import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() heading?: string;
  @Input() image?: string;

  @Output() toggleMenu = new EventEmitter();


  isLogin$!: Observable<boolean>;
  title = 'IdeasBank';

  constructor(
  ) { }

  ngOnInit() {
  }

  onMenu() {
    this.toggleMenu.emit();
  }
}
