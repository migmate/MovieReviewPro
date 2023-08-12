import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../services/storage.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  email: string;
  password: string;
  userName: string;
  selectedDate: string;
  routeParamsSubscription;

  userObject = {
    userName: "",
    password: "",
    dob: "",
    save: Boolean
  }

  constructor(private route: ActivatedRoute,private router: Router) {}
  
  ngOnInit() {
    
    this.routeParamsSubscription = this.route.params.subscribe(params => {
      // Use 'params' , if 'paramMap’ not working

      this.userName = params['userName'];
      
    }
    
    );
  }

  saveUserData = this.userObject.save


  // async getData() {
  //   const settings = await this.storage.setItem.(id, "userDetail");
  //   if (settings) {
  //     this.userObject.userName = settings?.name ?? '';
  //     this.userObject.password = settings?.notifications ?? '';
  //     this.userObject.dob = settings?.datetime ?? '';
  //     this.userObject.save = settings?.datetime ?? '';
  //   }
  // }
  
  
    
  onLogin() {
  this.router.navigate(['tabs/accounts', this.userName]);
  }

}

