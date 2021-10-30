import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private af:AngularFireDatabase,private cdr: ChangeDetectorRef) { }
  users:any;
  usersList;
  ngOnInit(): void {
    this.af.list('users').snapshotChanges().forEach(res=>{
      this.usersList = [];
      res.forEach(res =>{
        let user = res.payload.toJSON();
        user['$key'] = res.key;
        this.usersList.push(user);
        this.cdr.detectChanges();
      })
    });
  }
  

}
