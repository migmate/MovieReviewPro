import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  userName: string

  constructor( private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.userName = this.route.snapshot.paramMap.get('userName');
    }

    goStats(){
      this.router.navigate(['/stats']);
    }

}
