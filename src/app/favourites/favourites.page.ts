import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {
  constructor(private storageService: StorageService) { }

  allReviewIds: string[] = [];
  favesArray: string[] = [];

  async ngOnInit() {
    await this.storageService.getReady();
    this.loadData();
  }

  
  async loadData() {
    this.allReviewIds = await this.storageService.getAllReviewIDs();
    for (const id of this.allReviewIds) {
      const review = await this.storageService.getReview(id);
      if (review.isFavourite == true) {
        this.favesArray.push(review.name);
      }
    }
   
  }
}
