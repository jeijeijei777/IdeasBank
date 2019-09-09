import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../shared/language/language.service';
import { TRANSLATION } from './home.translation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  translation = TRANSLATION;

  constructor(private language: LanguageService) { }

  get lang() {
    return this.language.code;
  }

  ngOnInit() {
  }

}
