import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewModalComponent } from './review-modal/review-modal.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';

import {IonicStorageModule} from '@ionic/storage-angular';
import { StorageService } from './services/storage.service';
@NgModule({
  declarations: [AppComponent, ReviewModalComponent, TabsComponent],
  imports: [BrowserModule, FormsModule,
    RouterModule.forRoot([]), IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule],
  providers: [StorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
