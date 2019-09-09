import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  code = window.navigator.language.substr(0, 2) === 'ja' ? 'ja' : 'en';
}
