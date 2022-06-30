import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminmenu',
  templateUrl: './adminmenu.component.html',
  styleUrls: ['./adminmenu.component.css']
})
export class AdminmenuComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('UserName')==null)
    this.route.navigate(['']);
  }

}
