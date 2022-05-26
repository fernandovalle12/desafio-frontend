import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.scss']
})
export class NavbarComponentComponent implements OnInit {
  public routes: Route[] = [
    { title: 'Home', url: '/home', active: true },
    { title: 'Videos', url: '/videos', active: false },
    { title: 'Channels', url: '/channels', active: false }
  ];
  public options: string[] = ["Subscriptions", "History", "Upload"]

  constructor() { }

  ngOnInit(): void {
  }

}

interface Route {
  title: string,
  url: string,
  active: boolean
}

interface Options {
  title: string
}