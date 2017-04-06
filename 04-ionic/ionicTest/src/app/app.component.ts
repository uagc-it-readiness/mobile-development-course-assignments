import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

import { GithubService } from '../providers/github-service';
import { ProfilesPage } from '../pages/profiles/profiles';


@Component({
  templateUrl: 'app.html',
  providers: [GithubService]
})
export class MyApp {
  rootPage = ProfilesPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
