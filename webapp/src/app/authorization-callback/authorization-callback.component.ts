import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-authorization-callback',
  templateUrl: './authorization-callback.component.html',
  styleUrls: ['./authorization-callback.component.css']
})
export class AuthorizationCallbackComponent implements OnInit {
  code: string;
  response: any;
  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService,
    private router: Router,
    private toastr: ToastrService) {
    }

  ngOnInit() {
    this.route.queryParams.subscribe((d) => {
      this.code = d.code;
      this.spotifyService.getCredentials(this.code)
      .subscribe((response) => {
        this.response = response;
      },
      (err) => {
        this.toastr.error('There was an error getting the credentials, review your clientId and clientSecret');
        this.router.navigateByUrl('');
        console.error(err);
      });
    });
  }

}
