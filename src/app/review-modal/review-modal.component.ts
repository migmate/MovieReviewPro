import { Component,Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-review-modal',
  templateUrl: './review-modal.component.html',
  styleUrls: ['./review-modal.component.scss'],
})
export class ReviewModalComponent  implements OnInit {
  @Input() review: string;
  @Input() index: number;
  @Input() idPass: string; 

  moviesArray: string[] = [];

  reviewDisplayed = "Movie Name"

  

  reviewObject = {
    name: "",
    description: "",
    category: "",
    review: "",
    rating: "",
    isFavourite: false
  }
 

  constructor(private toastController: ToastController, private storageService: StorageService,private modalCtrl: ModalController) {}


  async showToast() {
    const toast = await this.toastController.create({
      message: 'Movie Name can not be blank',
      duration: 5000, 
      position: 'bottom' 
    });
    await toast.present();
  }
  

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    if (this.reviewObject.name.trim() === '') {
     
      return this.showToast()
    }
    return this.modalCtrl.dismiss(this.reviewObject, 'confirm');
  }
  async ngOnInit() {
    // if (this.review !== null) {
    //   this.reviewDisplayed = this.review
    // }
    this.loadData();
    console.log(this.idPass);
    
  }

  async loadData() {
    const review = await this.storageService.getReview(this.idPass);
      
    this.reviewObject = {
      name: review?.name ?? '',
      description: review?.description ?? '',
      category: review?.category ?? '',
      review: review?.review ?? '',
      rating: review?.rating ?? 0,
      isFavourite: review?.isFavourite ?? false
    };
  }

}
