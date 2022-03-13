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
  feelingLucky = ['technology', 'technological', 'robotics', 'electronics', 'software', 'technical school', 'polytechnic', 'computer', 'electronic', 'biotechnology', 'gadgets', 'manufacturing', 'industrial', 'science', 'computing', 'nanotechnology', 'bioscience', 'techie', 'cryogenics', 'school', 'technician', 'technical', 'chip', 'engineer', 'advanced', 'helped', 'texas', 'giants', 'new', 'market', 'ucla', 'computers', 'business', 'micro', 'titans', 'atlanta', 'big', 'stanford', 'miami', 'marketing', 'intel', 'high', 'arizona', 'denver', 'consumer', 'improved', 'usf', 'industry', 'technologies', 'leading', 'florida', 'rebounding', 'kansas', 'makers', 'chicago', 'clemson', 'tennessee', 'manufacturers', 'pseudoscience', 'houston', 'stocks', 'cisco', 'tools', 'smart', 'run', 'drive', 'usc', 'hokies', 'seattle', 'york', 'home', 'tool', 'equipment', 'systems', 'basketball', 'dallas', 'indianapolis', 'corporate', 'technique', 'drives', 'better', 'american', 'running', 'michigan', 'indiana', 'baltimore', 'focus', 'midwest', 'advantage', 'center', 'scientifically', 'companies', 'scientific', 'phoenix', 'record', 'engineering', 'game', 'buying', 'quarter', 'booming', 'longhorns', 'cowboys', 'syracuse', 'firms', 'up', 'offense', 'california', 'whiz', 'upgrade', 'sales', 'detroit', 'chips', 'key', 'notebook', 'neuroscience', 'hydroscience', 'engineering school', 'polytechnic institute', 'metrology', 'cyberscience', 'sociology', 'climatology', 'tribology', 'biophysics', 'organon', 'bionanoscience', 'alchemical', 'superscience', 'technoscience', 'geology', 'proscience', 'bellwethers', 'fortran', 'bionics', 'multiscience', 'antiscience', 'phrenology', 'architectonics', 'ergonomics', 'n9ne', 'scienceless', 'systematics', 'hydrodynamic', 'alchemy', 'epistemology', 'microscopy', 'ic', 'theoretician', 'interoperable', 'psychology', 'sciencelike', 'geophysics', 'cybernetics', 'university', 'optimization', 'scientist', 'nonscience', 'interoperability', 'geoscience', 'mcscience', 'limnology', 'glycoscience', 'physicist', 'agronomy', 'informatics', 'radiography', 'metaphysics', 'physiology', 'dendrohydrology', 'physic', 'ology', 'theorist', 'developer', 'environmental', 'mathematician', 'system', 'aeronautics', 'operator', 'logistics', 'astrophysics', 'histology', 'electrochemistry', 'anthropology', 'watercourse', 'agrobiology', 'biological', 'modernize', 'channel', 'technoid', 'ecological', 'kinesiology', 'biologist', 'eco', 'bio', 'dynamic', 'rill', 'naturalist', 'cartography', 'electrical engineer', 'riverine', 'photoscience', 'empiricism', 'comparator', 'specialize', 'gerontology', 'subroutine', 'apply science', 'canalisation', 'methodology', 'ecology', 'startups', 'biotech', 'sci', 'biomedical', 'aerospace', 'networking', 'technologists', 'automotive', 'telecom', 'techno', 'hardware', 'innovators', 'tec', 'semiconductor', 'labs', 'biz', 'nerds', 'biometrics', 'telecommunications', 'biomedicine', 'futuristic', 'cyber', 'wireless', 'robots', 'brainiac', 'innovation', 'robotic', 'incubator', 'entrepreneurial', 'darpa', 'microelectronics', 'pharma', 'nano', 'profile', 'hipster', 'laptops', 'digital', 'sbc', 'aeronautic', 'auto', 'outsourcing', 'rad', 'academia', 'futurism', 'smartphone', 'specialization', 'cryptography', 'evolution', 'demography', 'logy', 'canal', 'canalise', 'mechanical engineer', 'electrotelegraphy', 'sysop', 'geroscience', 'biocomputing', 'sociobiology', 'neurophysics', 'system science', 'microphonics', 'actinochemistry', 'terotechnology', 'exobiology', 'cyberpsychology', 'thanatology', 'depolarize', 'psychobiology', 'macrophysics', 'infostructure', 'lifehack', 'bioacoustics', 'radiology', 'chemical engineer', 'alchemize', 'astrobiology', 'scienticide', 'transistorize', 'information science', 'apply mathematics', 'cyberphilosophy', 'cybertechnology', 'scientific method', 'biomed', 'dotcom', 'geek', 'digerati', 'gizmos', 'techy', 'technophile', 'ungreen', 'symbolics', 'brainiacs', 'brainpower', 'thingamajigs', 'grads', 'enviro', 'whizbang', 'futurology', 'gearhead', 'micrographics', 'turtlenecked', 'highflier', 'doodad', 'photomicrography', 'fanboy', 'intrapreneur', 'cogwheels', 'dealmaking', 'cryptology', 'newfangled', 'pricey', 'social science', 'gimcracks', 'scientific discipline', 'cognitive science', 'formal science', 'software engineer', 'information theory', 'philosophy of science', 'natural science', 'topic category', 'scientific theory', 'hard science', 'chemical physic', 'field of study', 'natural history', 'space technology', 'bachelor of science', 'quantum physic', 'system theory', 'school subject', 'system analysis', 'civil engineer', 'physical chemistry', 'mathematical logic', 'letter and science', 'security system', 'technological university', 'computer science', 'rocket science', 'exact science', 'system engineer', 'life science', 'information technology', 'pure mathematics', 'industrial design', 'industrial art', 'statistical mechanic', 'natural philosophy', 'affine transformation', 'bucket chemistry', 'evolutionary biology', 'screen saver', 'linear program', 'monkey patch', 'transport good', 'power user', 'seismic design', 'political science', 'quantum mechanic', 'computer scientist', 'space biology', 'dot com', 'venture capital', 'gee whiz', 'cutting edge', 'venture capitalist', 'vacuum tube', 'dean kamen', 'ultrahigh frequency', 'bridge river', 'Popular Searches', 'trees and plants', 'textiles', 'universe', 'unity', 'underwater', 'urban', 'unique', 'umbrella', 'unicorn', 'usa', 'ugly', 'unemployment', 'vehicles', 'volcano', 'vikings', 'vegetables', 'vacation', 'vision', 'violence', 'vampires', 'victory', 'water', 'war', 'winter', 'weather', 'wedding', 'wind', 'warrior', 'witchcraft', 'wine', 'work', 'youth', 'yoga', 'yellow', 'young', 'yarn', 'youtube', 'yachts', 'yes', 'yogurt', 'mouse', 'egypt', 'poker', 'parents', 'skiing', 'baby', 'bank', 'pig', 'twilight'];
  safeTuples: [SafeResourceUrl, SafeResourceUrl][] = [];
  searchQuery: string;

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

  async search(){


    //hide landing info
    document.getElementById('landing-info').hidden = true;

    const queryUrl = '' // whatever it ends up being

    const data = this.searchQuery
    console.log('data is ' + data);

    await fetch(queryUrl, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin,
      // origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({data: 'ham'}) // body data type must match 'Content-Type' header
    // });
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    }).then(function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status code: ${response.status}');
        return;
      }
      // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
      response.json().then(function(data) {
        console.log(data);
      });
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    }).catch(function(error) {
      console.log('Fetch error: ' + error);
    });
  }

  async imFeelingLucky(){
    console.log('idsList = ' + this.idsList);

    //hide landing info
    document.getElementById('landing-info').hidden = true;

    let luckyString = '';
    for (let i = 0; i < 6; i++){
      const randomElement = Math.floor(Math.random() * this.feelingLucky.length);
      luckyString += ' ' + this.feelingLucky[randomElement];
    }

    console.log(luckyString);

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
