import { Component, OnInit } from '@angular/core';
import { subNavMenu } from './navigation-bar.model';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  public subNavMenu = subNavMenu;

  constructor() { }

  ngOnInit(): void {
  }

}
