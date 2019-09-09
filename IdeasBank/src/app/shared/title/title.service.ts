import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CONFIG } from '../../app.config';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  constructor(private title: Title) {}

  getTitle(): string {
    return this.title.getTitle();
  }

  setTitle(title?: string) {
    if (title) {
      this.title.setTitle(title + ' - ' + CONFIG.baseTitle);
    } else {
      this.title.setTitle(CONFIG.baseTitle);
    }
  }
}
