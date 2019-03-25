import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  url: string;
  clientId: string;
  clientSecret: string;
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.url = window.location.href;
    this.clientId = '';
    this.clientSecret = '';
  }

  requestAuthorization() {
    this.spotifyService.getAuthorization(this.clientId, this.clientSecret);
  }

}
