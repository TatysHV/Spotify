import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ProfileService } from './services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  profile: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private profileService: ProfileService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.router.navigate(['loading']);
      this.getProfile();
    });
  }

  getProfile() {
    this.profileService.getProfile()
      .subscribe((profile) => {
        this.router.navigateByUrl('');
        return this.profile = profile;
      },
      (err) => {
        this.router.navigateByUrl('profile-error');
        return err;
      });
  }
}
