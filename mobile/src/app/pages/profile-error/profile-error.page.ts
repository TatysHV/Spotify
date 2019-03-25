import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-error',
  templateUrl: './profile-error.page.html',
  styleUrls: ['./profile-error.page.scss'],
})
export class ProfileErrorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  retry() {
    window.location.reload();
  }

}
