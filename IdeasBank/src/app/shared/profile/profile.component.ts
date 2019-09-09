import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LanguageService } from '../language/language.service';
import { Profile } from '../../user/shared/types/profile';
import { TRANSLATION } from './profile.translation';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  @Input()
  public profile?: Profile;

  public translation = TRANSLATION;

  constructor(
    private language: LanguageService,
  ) { }

  ngOnInit() {
  }
}
