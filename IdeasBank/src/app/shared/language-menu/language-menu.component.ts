import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language/language.service';

@Component({
  selector: 'app-language-menu',
  templateUrl: './language-menu.component.html',
  styleUrls: ['./language-menu.component.css'],
})
export class LanguageMenuComponent implements OnInit {

  constructor(private language: LanguageService) { }

  public get lang() {
    return this.language.code;
  }

  ngOnInit() { }

  public setLanguage(twoLetter: string) {
    this.language.code = twoLetter;
  }
}
