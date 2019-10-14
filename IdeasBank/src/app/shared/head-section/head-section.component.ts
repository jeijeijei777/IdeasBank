import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-head-section',
  templateUrl: './head-section.component.html',
  styleUrls: ['./head-section.component.scss']
})
export class HeadSectionComponent implements OnInit {
  @Input()
  public color = '';

  constructor() {
    
  }

  ngOnInit() {
  }
}
