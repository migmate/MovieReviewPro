import { Component,OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';
import { StorageService } from '../services/storage.service';
import { ChangeDetectorRef } from '@angular/core';

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit{
  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;
  doughnutChart: any;
  isLoading: boolean = true;

  constructor(private storageService: StorageService, private cdRef:ChangeDetectorRef) { }
  reviewCategories: string[] = [];


  createDoughnutChart(labels: string[], data: number[]) {
    if (this.doughnutChart) {
      this.doughnutChart.destroy();
    }
  
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          label: '# of Movies Watched by Category:',
          data: data,
          backgroundColor: [
            'rgba(255, 159, 64, 50)',
            'rgba(255, 99, 132, 50)',
            'rgba(54, 162, 235, 50)',
            'rgba(255, 206, 86, 50)',
            'rgba(75, 192, 192, 50)'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384'
          ]
        }]
      }
    });
  }

  async ngOnInit() {
    await this.storageService.getReady();
    await this.loadData(); 
  }
  

  async loadData() {
    this.isLoading = true;
    this.reviewCategories = await this.storageService.getAllCategories();
    this.isLoading = false;
    this.updateChart(); 
  }
  
  updateChart() {
    
    if (this.doughnutChart) {
      this.doughnutChart.destroy();
    }

    

    // Count occurrences of each category
    const categoryCounts = {};
    for (const category of this.reviewCategories) {
      if (category in categoryCounts) {
        categoryCounts[category]++;
      } else {
        categoryCounts[category] = 1;
      }
    }

    // Get keys and values from categoryCounts object
    const categoryNames = Object.keys(categoryCounts);
    const categoryValues = Object.values(categoryCounts) as number[];

    // Call doughnutChartMethod with the data
    this.createDoughnutChart(categoryNames, categoryValues);
  
    this.cdRef.detectChanges(); // Add this line
   
  }

}
