import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  private _storage: Storage | null = null;
  private reviewIds: string[] = []; // Stores unique identifiers of all reviews
  private isReady: Promise<void>;   // Promise indicating when the service is ready

  constructor(private storage: Storage) {
    this.isReady = this.init(); // Initialize storage upon service instantiation
  }
  
  // Initializes storage, creates it if it doesn't exist and loads reviewIds from it
  private async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    this.reviewIds = await this._storage.get('reviewIds') || [];
  }
  
  // Exposes the readiness of the service to the outside world
  public getReady() {
    return this.isReady;
  }

  // Sets a key-value pair in the storage
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }


  // Fetches a value from the storage based on the key
  public get(key: string) {
    return this._storage?.get(key);
  }
  
  // Retrieves a review based on its unique identifier
  getReview(id: string) {
    return this.get(id);
  }
  
  // Updates a review based on its unique identifier
  async updateReview(id: string, updatedReview) {
    await this.set(id, updatedReview);
  }
  
  // Adds a review to storage and assigns it a unique identifier
  async addReview(review) {
    const id = uuidv4();
    await this.set(id, review);
    this.reviewIds.push(id);
    await this.set('reviewIds', this.reviewIds);

    return id;
  }

  
  
  // Retrieves all reviews from storage
  async getAllReviews() {
    const reviews = [];
    for (let id of this.reviewIds) {
      const review = await this.get(id);
      reviews.push(review);
    }
    return reviews;
  }
  
  // Retrieves the names of all reviews from storage
  async getAllReviewNames() {
    const reviews = await this.getAllReviews();
    return reviews.map(review => review?.name || '');
  }

  // Retrieves the favorite status of all reviews from storage
  async getAllFavs() {
    const reviews = await this.getAllReviews();
    return reviews.map(review => review?.isFavourite || false);
  }

  // Retrieves the unique identifiers of all reviews
  async getAllReviewIDs() {
    return this.reviewIds;
  }

  // Removes a review from storage and also from the local array of review ids
  async deleteReview(id: string) {
    await this._storage?.remove(id);

    // remove the id from reviewIds
    const index = this.reviewIds.indexOf(id);
    if (index > -1) {
      this.reviewIds.splice(index, 1);
    }
    // also update 'reviewIds' in the storage
    await this.set('reviewIds', this.reviewIds);
  }

async getAllCategories() {
  const reviews = await this.getAllReviews();
  return reviews.map(review => review?.category || '');
}



}

