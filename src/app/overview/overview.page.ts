import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ReviewModalComponent } from '../review-modal/review-modal.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit{

  // Method that gets executed on component initialization
  async ngOnInit() {
    // Wait until the storage service is ready
    await this.storageService.getReady();
    // Load the initial data
    
    this.loadData();
    
  }
  movieReviews = ["John Wick", "The Thing", "Godzilla"]
  reviewNames: string[] = [];
  IDsArray: string[] = [];

  constructor(private alertController: AlertController,private storageService: StorageService, private modalCtrl: ModalController, private route: ActivatedRoute,private router: Router) {
   
  }

idtest = "8fd0bc52-9940-40ad-8e01-5418eff5e8c8"
  
  // Function to open the modal for adding a new review
  async openModal() {
    // Create the modal
    const modal = await this.modalCtrl.create({
      component: ReviewModalComponent,
    });
    // Show the modal
    modal.present();

    // Wait for the modal to be dismissed and get the data
    const { data, role } = await modal.onWillDismiss();

    // Check if the modal was confirmed
    if (role === 'confirm') {
      // Create a new review object with the data from the modal
      const newReview = {
        name: `${data.name}`,
        description: `${data.description}`,
        category: `${data.category}`,
        review: `${data.review}`,
        rating: `${data.rating}`,
        isFavourite: Boolean(data.isFavourite),
        id: null
      };

      // Add the review to the storage service and get the new id
      const newId = await this.storageService.addReview(newReview);

      // Update the id of the new review
      newReview.id = newId;  // Now newReview has an id.
      
      // Update the review names from the storage service
      this.reviewNames = await this.storageService.getAllReviewNames();
    }
  }

  // Function to open the modal for editing a review
  async openModal2(index: number, idPass: string) {
    // Create the modal with the review to edit and its index
    const modal = await this.modalCtrl.create({
      component: ReviewModalComponent,
      componentProps: {
        review: this.movieReviews[index],
        index: index,
        idPass: this.IDsArray[index]
      }
    });
    // Show the modal
    modal.present();
    const id = this.IDsArray[index];

    // Wait for the modal to be dismissed and get the data
    const { data, role } = await modal.onWillDismiss();

    // Check if the modal was confirmed
    if (role === 'confirm') {
      // Create a new review object with the updated data from the modal
      const newReview = {
        name: `${data.name}`,
        description: `${data.description}`,
        category: `${data.category}`,
        review: `${data.review}`,
        rating: `${data.rating}`,
        isFavourite: Boolean(data.isFavourite),
        id: `${data.ID}`
      };

      // Update the review in the storage service
      await this.storageService.updateReview(id,newReview);
    
      // Update the review names from the storage service
      this.reviewNames = await this.storageService.getAllReviewNames();
    }
  }

  // Function to delete a contact from the movieReviews array
  deleteContact(index: number) {
    if (confirm("Delete " + this.movieReviews[index] + "?")) {
      this.movieReviews.splice(index, 1);
    }
  }

  // Function to navigate to the details page
  navDetails() {
    this.showReview(this.idtest)
  }

  // Function to get a review by id and log it
  async showReview(idtest) {
    const review = await this.storageService.getReview(idtest);
    console.log(review);
  }

  // Function to load the review names and ids from the storage service
  async loadData() {
    this.reviewNames = await this.storageService.getAllReviewNames();
    this.IDsArray = await this.storageService.getAllReviewIDs();
    console.log(this.reviewNames);
    console.log(this.IDsArray);
  }
    
  // Function to navigate to the details page for a specific review
  nReviewClick(index: number) {
    const id = this.IDsArray[index];
    this.router.navigate(['/details', id]);
  }

  // Function to delete a review from the storage service and the local arrays
  async deleteReview(index: number){
    if (confirm("Confirm Delete?")) {
      const id = this.IDsArray[index];
      this.IDsArray.splice(index, 1);
      await this.storageService.deleteReview(id);
      // Reload the data after a review is deleted
      this.loadData()       
    }
  }




}




