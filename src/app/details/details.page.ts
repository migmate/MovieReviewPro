import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
    reviewObject = {
      name: '',
      description: '',
      category: '',
      review: '',
      rating: 0,
      isFavourite: false
    }
  
    constructor(private route: ActivatedRoute, private storageService: StorageService) { }
  
    ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id');
      this.loadReview(id);
      console.log(id);
    }
  
    async loadReview(id: string) {
      const review = await this.storageService.getReview(id);
      
      this.reviewObject = {
        name: review.name,
        description: review?.description ?? 'N/A',
        category: review?.category ?? 'N/A',
        review: review?.review ?? 'N/A',
        rating: review?.rating ?? 'N/A',
        isFavourite: review.isFavourite
      };
    }
  }
  
