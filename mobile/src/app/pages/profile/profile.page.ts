import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {
  profile: any;
  profile$: any;
  currentSong$: any;
  currentSong: any;
  isPlaying: boolean;
  loading = false;
  isPaused: boolean;

  constructor(private _profileService: ProfileService) { }

  ngOnInit() {
    this.loading = true;
  }

  ionViewWillEnter() {
    this.getProfile();
    this.getCurrentSong();
  }

  getProfile() {
    this.profile$ = this._profileService.getProfile()
      .subscribe((data) => {
        return this.profile = data;
      },
        (err) => {
          console.error(err);
        });
  }

  getCurrentSong() {
    this.currentSong$ = this._profileService.getCurrentSong()
      .subscribe((data) => {
        this.loading = false;
        if (!data) {
          this.isPlaying = true;
        } else {
          if (!data.is_playing) {
            this.isPaused = true;
            this.isPlaying = false;
          } else {
            this.isPlaying = true;
            this.isPaused = false;
          }
          return this.currentSong = data;
        }
      }, (err) => {
        this.loading = false;
        console.error(err);
      });
  }

  skipBack() {
    this._profileService.previousTrack()
      .subscribe((data) => {
        this.isPaused = false;
        this.isPlaying = true;
        this.getCurrentSong();
      }, (err) => {
        console.error(err);
      });

  }

  playPause() {
    if (this.isPaused) {
      this._profileService.playCurrentSong()
        .subscribe((data) => {
          this.isPaused = false;
          this.isPlaying = true;
        }, (err) => {
          console.error(err);
        });
    } else {
      this._profileService.pauseCurrentSong()
        .subscribe((data) => {
          this.isPaused = true;
          this.isPlaying = false;
        }, (err) => {
          console.error(err);
        });
    }
  }

  skipForward() {
    this._profileService.nextTrack()
      .subscribe((data) => {
        console.log(data);
        this.isPaused = false;
        this.isPlaying = true;
        this.getCurrentSong();
      }, (err) => {
        console.error(err);
      });
  }
}
