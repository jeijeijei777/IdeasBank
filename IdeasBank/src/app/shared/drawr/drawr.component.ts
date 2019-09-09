// TODO:今はShareディレクトリにあるが各ページの共通化し、Coreディレクトリに移動する
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileService } from '../../user/shared/profile/profile.service';
import { Profile } from '../../user/shared/types/profile';
import { SessionService } from '../../core/service/session.service';

@Component({
  selector: 'app-drawr',
  templateUrl: './drawr.component.html',
  styleUrls: ['./drawr.component.css'],
})
export class DrawrComponent implements OnInit {
  profile$!: Observable<Profile | null>;

  constructor(
    private profile: ProfileService,
    private session: SessionService,
  ) {}

  ngOnInit() {
    this.profile$ = this.profile.profile$;
  }

  logout() {
    this.session.logout();
  }
}
