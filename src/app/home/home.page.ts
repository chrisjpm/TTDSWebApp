import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  prefersDark: boolean;
  idsList = ['VzCy0REnIq8','O2HXZBW7NUs','dngSZc_LOGE','VDkgu4Vj1CY','BTOM7IVDFsI',
    'O0KYzeqUurk','5Qgp7cj98zE','VJKSUCqfBTo','Ve0TFbbUD9U','yxcDWiOwXrc'];
  safeTuples: [SafeResourceUrl, SafeResourceUrl][] = [];
  ham: string;

  testUrl: SafeResourceUrl;
  testThumbnail: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer, public toastController: ToastController) {
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

  update(){
    const id = 'VzCy0REnIq8';
    const urlstring = 'https://www.youtube.com/embed/'+id+'?start=10&end=60';
    this.testUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(urlstring);
    const tnString = 'https://img.youtube.com/vi/'+id+'/mqdefault.jpg';
    this.testThumbnail = tnString;
    console.log(this.testUrl);
  }

  search(){
    //hide landing info
    document.getElementById('landing-info').hidden = true;
  }

  async imFeelingLucky(){
    console.log('idsList = ' + this.idsList);

    //hide landing info
    document.getElementById('landing-info').hidden = true;

    // eslint-disable-next-line guard-for-in
    for (const i in this.idsList){
      console.log('Video id = ' + this.idsList[i]);
      const urlstring = 'https://www.youtube.com/embed/' + this.idsList[i] + '?start=10';
      console.log('string is ' + urlstring);
      const tnString = 'https://img.youtube.com/vi/'+this.idsList[i]+'/mqdefault.jpg';
      this.safeTuples.push([this.domSanitizer.bypassSecurityTrustResourceUrl(urlstring),
        this.domSanitizer.bypassSecurityTrustResourceUrl(tnString)]);
    }

    const toast = await this.toastController.create({
      message: 'X results found in Ys',
      color: 'success',
      icon: 'information-circle',
      buttons: [
        {
          text: 'Okay!',
          role: 'cancel',
          handler: () => {
            console.log('Toast dismissed');
          }
        }
      ]
    });
    toast.present();
  }
}
