import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  prefersDark: boolean;

  constructor() {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (systemDark){
      this.prefersDark = true;
      document.body.setAttribute('data-theme', 'dark');
    } else {
      this.prefersDark = false;
    }
  }

  changeColors(){
    if (this.prefersDark){
      document.body.setAttribute('data-theme', 'light');
      this.prefersDark = false;
    } else {
      document.body.setAttribute('data-theme', 'dark');
      this.prefersDark = true;
    }
  }



}
