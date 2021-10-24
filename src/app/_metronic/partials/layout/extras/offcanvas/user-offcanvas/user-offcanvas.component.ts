import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../../../core';
import { AuthService, IUserInfo } from '../../../../../../modules/auth/_services/auth.service';
import { LocalStorage as ls } from "../../../../../../utils/localstorage.service";

@Component({
  selector: 'app-user-offcanvas',
  templateUrl: './user-offcanvas.component.html',
  styleUrls: ['./user-offcanvas.component.scss'],
})

export class UserOffcanvasComponent implements OnInit {
  currentUser: IUserInfo;
  extrasUserOffcanvasDirection = 'offcanvas-right';

  constructor(private layout: LayoutService, private auth: AuthService) {}

  ngOnInit(): void {
    this.currentUser = ls.getValue('currentUser');
    this.extrasUserOffcanvasDirection = `offcanvas-${this.layout.getProp(
      'extras.user.offcanvas.direction'
    )}`;
  }

  logout() {
    this.auth.logout();
    // document.location.reload();
  }
}
