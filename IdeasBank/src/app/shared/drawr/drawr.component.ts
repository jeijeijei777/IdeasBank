// TODO:今はShareディレクトリにあるが各ページの共通化し、Coreディレクトリに移動する
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-drawr',
  templateUrl: './drawr.component.html',
  styleUrls: ['./drawr.component.css'],
})
export class DrawrComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

}
