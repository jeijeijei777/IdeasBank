import { Component, OnInit } from '@angular/core';
import { TRANSLATION } from './profile-search-dialog.translation';
import { LanguageService } from '../language/language.service';
import { Observable, of } from 'rxjs';
import { Profile } from '../../user/shared/types/profile';
import { ProfileService } from '../../user/shared/profile/profile.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-search-dialog',
  templateUrl: './profile-search-dialog.component.html',
  styleUrls: ['./profile-search-dialog.component.css']
})
export class ProfileSearchDialogComponent implements OnInit {
  word: string;
  profiles$: Observable<Profile[]>;
  translation = TRANSLATION;

  constructor(
    private dialogRef: MatDialogRef<ProfileSearchDialogComponent>,
    private language: LanguageService,
    private profile: ProfileService
  ) {
    this.word = '';
    this.profiles$ = of([]);
   }

  get lang() {
    return this.language.code;
  }

  ngOnInit() {
  }

  onTwitter() {
    this.profiles$ = this.profile.searchWithTwitterID(this.word);
  }

  onFacebook() {
    this.profiles$ = this.profile.searchWithFacebookID(this.word);
  }

  onInstagram() {
    this.profiles$ = this.profile.searchWithInstagramID(this.word);
  }

  onGithub() {
    this.profiles$ = this.profile.searchWithGithubID(this.word);
  }

  close(profile: Profile) {
    this.dialogRef.close(profile);
  }
}
