import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import {GithubService} from '../../providers/github-service';
import { RepoDetailsPage } from '../repo-details/repo-details';




/*
  Generated class for the Profiles page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profiles',
  templateUrl: 'profiles.html'
})
export class ProfilesPage {
  github_user: string = "";
  profile: any;
  repos: any;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private githubService: GithubService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilesPage');
  }

  onSubmit(){
    this.getProfile(this.github_user);
    this.github_user = '';
  }

  getProfile(username: string){
    this.githubService.getProfile(username).subscribe(
      response => this.profile = response);
  }

  showRepos(username){
    this.getRepos(username);
  }

  getRepos(username){
    this.githubService.getRepos(username).subscribe(
      response => this.repos = response);
    
  }

  repoTapped(event, repo){
    // this.navCtrl.push(RepoDetailsPage, {
    //   repo: repo
    // })
    let profileModal = this.modalCtrl.create(RepoDetailsPage, {repo: repo});
    profileModal.present();
  }

}
