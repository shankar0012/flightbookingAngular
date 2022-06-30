import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['./usermenu.component.css']
})
export class UsermenuComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('UserName')==null)
    this.route.navigate(['']);
  }

}
