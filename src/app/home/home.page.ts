import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { ToastController } from '@ionic/angular';

export interface VidObject{
  videoid: string;
  videoTitle: string;
  channelId: string;
  channelTitle: string;
  topics: string[];
  videoTags: string[];
  timestamp: string;
  date: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  prefersDark: boolean;
  idsList = ['VzCy0REnIq8','O2HXZBW7NUs','dngSZc_LOGE','VDkgu4Vj1CY','BTOM7IVDFsI',
    'O0KYzeqUurk','5Qgp7cj98zE','VJKSUCqfBTo','Ve0TFbbUD9U','yxcDWiOwXrc'];
  // eslint-disable-next-line max-len
  feelingLucky = ['technology', 'technological', 'robotics', 'electronics', 'software', 'technical school', 'polytechnic', 'computer', 'electronic', 'biotechnology', 'gadgets', 'manufacturing', 'industrial', 'science', 'computing', 'nanotechnology', 'bioscience', 'techie', 'cryogenics', 'school', 'technician', 'technical', 'chip', 'engineer', 'advanced', 'helped', 'texas', 'giants', 'new', 'market', 'ucla', 'computers', 'business', 'micro', 'titans', 'atlanta', 'big', 'stanford', 'miami', 'marketing', 'intel', 'high', 'arizona', 'denver', 'consumer', 'improved', 'usf', 'industry', 'technologies', 'leading', 'florida', 'rebounding', 'kansas', 'makers', 'chicago', 'clemson', 'tennessee', 'manufacturers', 'pseudoscience', 'houston', 'stocks', 'cisco', 'tools', 'smart', 'run', 'drive', 'usc', 'hokies', 'seattle', 'york', 'home', 'tool', 'equipment', 'systems', 'basketball', 'dallas', 'indianapolis', 'corporate', 'technique', 'drives', 'better', 'american', 'running', 'michigan', 'indiana', 'baltimore', 'focus', 'midwest', 'advantage', 'center', 'scientifically', 'companies', 'scientific', 'phoenix', 'record', 'engineering', 'game', 'buying', 'quarter', 'booming', 'longhorns', 'cowboys', 'syracuse', 'firms', 'up', 'offense', 'california', 'whiz', 'upgrade', 'sales', 'detroit', 'chips', 'key', 'notebook', 'neuroscience', 'hydroscience', 'engineering school', 'polytechnic institute', 'metrology', 'cyberscience', 'sociology', 'climatology', 'tribology', 'biophysics', 'organon', 'bionanoscience', 'alchemical', 'superscience', 'technoscience', 'geology', 'proscience', 'bellwethers', 'fortran', 'bionics', 'multiscience', 'antiscience', 'phrenology', 'architectonics', 'ergonomics', 'n9ne', 'scienceless', 'systematics', 'hydrodynamic', 'alchemy', 'epistemology', 'microscopy', 'ic', 'theoretician', 'interoperable', 'psychology', 'sciencelike', 'geophysics', 'cybernetics', 'university', 'optimization', 'scientist', 'nonscience', 'interoperability', 'geoscience', 'mcscience', 'limnology', 'glycoscience', 'physicist', 'agronomy', 'informatics', 'radiography', 'metaphysics', 'physiology', 'dendrohydrology', 'physic', 'ology', 'theorist', 'developer', 'environmental', 'mathematician', 'system', 'aeronautics', 'operator', 'logistics', 'astrophysics', 'histology', 'electrochemistry', 'anthropology', 'watercourse', 'agrobiology', 'biological', 'modernize', 'channel', 'technoid', 'ecological', 'kinesiology', 'biologist', 'eco', 'bio', 'dynamic', 'naturalist', 'cartography', 'electrical engineer', 'riverine', 'photoscience', 'empiricism', 'comparator', 'specialize', 'gerontology', 'subroutine', 'apply science', 'canalisation', 'methodology', 'ecology', 'startups', 'biotech', 'sci', 'biomedical', 'aerospace', 'networking', 'technologists', 'automotive', 'telecom', 'techno', 'hardware', 'innovators', 'tec', 'semiconductor', 'labs', 'nerds', 'biometrics', 'telecommunications', 'biomedicine', 'futuristic', 'cyber', 'wireless', 'robots', 'brainiac', 'innovation', 'robotic', 'incubator', 'entrepreneurial', 'darpa', 'microelectronics', 'pharma', 'nano', 'profile', 'hipster', 'laptops', 'digital', 'aeronautic', 'auto', 'outsourcing', 'academia', 'futurism', 'smartphone', 'specialization', 'cryptography', 'evolution', 'demography', 'logy', 'canal', 'canalise', 'mechanical engineer', 'electrotelegraphy', 'sysop', 'geroscience', 'biocomputing', 'sociobiology', 'neurophysics', 'system science', 'microphonics', 'actinochemistry', 'terotechnology', 'exobiology', 'cyberpsychology', 'thanatology', 'depolarize', 'psychobiology', 'macrophysics', 'infostructure', 'lifehack', 'bioacoustics', 'radiology', 'chemical engineer', 'alchemize', 'astrobiology', 'scienticide', 'transistorize', 'information science', 'apply mathematics', 'cyberphilosophy', 'cybertechnology', 'scientific method', 'biomed', 'dotcom', 'geek', 'digerati', 'gizmos', 'techy', 'technophile', 'ungreen', 'symbolics', 'brainiacs', 'brainpower', 'thingamajigs', 'grads', 'enviro', 'whizbang', 'futurology', 'gearhead', 'micrographics', 'turtlenecked', 'highflier', 'doodad', 'photomicrography', 'fanboy', 'intrapreneur', 'cogwheels', 'dealmaking', 'cryptology', 'newfangled', 'pricey', 'social science', 'gimcracks', 'scientific discipline', 'cognitive science', 'formal science', 'software engineer', 'information theory', 'philosophy of science', 'natural science', 'topic category', 'scientific theory', 'hard science', 'chemical physic', 'field of study', 'natural history', 'space technology', 'bachelor of science', 'quantum physic', 'system theory', 'school subject', 'system analysis', 'civil engineer', 'physical chemistry', 'mathematical logic', 'letter and science', 'security system', 'technological university', 'computer science', 'rocket science', 'exact science', 'system engineer', 'life science', 'information technology', 'pure mathematics', 'industrial design', 'industrial art', 'statistical mechanic', 'natural philosophy', 'affine transformation', 'bucket chemistry', 'evolutionary biology', 'screen saver', 'linear program', 'monkey patch', 'transport good', 'power user', 'seismic design', 'political science', 'quantum mechanic', 'computer scientist', 'space biology', 'dot com', 'venture capital', 'gee whiz', 'cutting edge', 'venture capitalist', 'vacuum tube', 'dean kamen', 'ultrahigh frequency', 'bridge river', 'Popular Searches', 'trees and plants', 'textiles', 'universe', 'unity', 'underwater', 'urban', 'unique', 'umbrella', 'unicorn', 'usa', 'ugly', 'unemployment', 'vehicles', 'volcano', 'vikings', 'vegetables', 'vacation', 'vision', 'violence', 'vampires', 'victory', 'water', 'war', 'winter', 'weather', 'wedding', 'wind', 'warrior', 'witchcraft', 'wine', 'work', 'youth', 'yoga', 'yellow', 'young', 'yarn', 'youtube', 'yachts', 'yes', 'yogurt', 'mouse', 'egypt', 'poker', 'parents', 'skiing', 'baby', 'bank', 'pig', 'twilight'];
  safeTuples: [SafeResourceUrl, SafeResourceUrl][] = [];
  searchQuery: string;

  testUrl: SafeResourceUrl;
  testThumbnail: SafeResourceUrl;

  resultsArray: any[] = new Array();
  metadata: any = {};

  vidObjects: VidObject[] = [];
  query: string;
  timeTakenString: string;

  constructor(private domSanitizer: DomSanitizer, public toastController: ToastController) {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (systemDark){
      this.prefersDark = true;
      document.body.setAttribute('data-theme', 'dark');
    } else {
      this.prefersDark = false;
    }
  }

  showLanding(){
    console.log('Within showLanding');
    document.getElementById('landing-info').hidden = false;
    this.timeTakenString = '';
    this.vidObjects = [];
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
    this.resultsArray = [];
    this.vidObjects = [];


    const data = this.searchQuery;
    console.log('Query: ' + data);

    try{
      const start = Date.now();

      const query = await fetch(
        `http://35.230.150.245:9090/?query=${data.replace(' ', '_')}`,
        {
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
        }
      );

      // eslint-disable-next-line eqeqeq
      if (query.status != 200) {
        console.log('Error retrieving data!');
        return;
      }

      const res = await query.json();

      // eslint-disable-next-line prefer-const
      for (let index in res){
        // eslint-disable-next-line eqeqeq
        if (Number(index) == res.length-1){
          this.metadata = res[index];
        } else {
          this.resultsArray.push(res[index]);
        }
      }

      let timeTaken = Date.now() - start;
      this.timeTakenString = ': 500 results in ' + Number(timeTaken) + 'ms!'
    } catch(e){
      console.log(e);

      const toast = await this.toastController.create({
        message: 'Please \'Allow\' insecure content for this site in broswer! See \'Privacy\' for help',
        color: 'danger',
        icon: 'warning',
        position: 'top',
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

    // eslint-disable-next-line guard-for-in
    for (const i in this.resultsArray){

      console.log('Structure of a result');
      console.log(this.resultsArray[i]);
      console.log(this.resultsArray[i][1].video_id);

      console.log(this.metadata);

      const vidObj: VidObject = {
        videoid: this.resultsArray[i][1].video_id,
        videoTitle: this.metadata[this.resultsArray[i][1].video_id].title,
        channelId: this.metadata[this.resultsArray[i][1].video_id].channelId,
        channelTitle: this.metadata[this.resultsArray[i][1].video_id].channelTitle,
        topics: this.metadata[this.resultsArray[i][1].video_id].topic,
        videoTags: this.metadata[this.resultsArray[i][1].video_id].tags,
        timestamp: this.resultsArray[i][1].timestamp,
        date: this.metadata[this.resultsArray[i][1].video_id].date
      };

      document.getElementById('landing-info').hidden = true;
      this.vidObjects.push(vidObj);
    }
  }

  async imFeelingLucky(){
    for (let i = 0; i < 2; i++){
      const randomElement = Math.floor(Math.random() * this.feelingLucky.length);
      if (i == 0) {
        this.query = this.feelingLucky[randomElement];
      } else {
        this.query += ' ' + this.feelingLucky[randomElement];
      }
    }

    console.log('Query: ' + this.query);

    try{
      const start = Date.now();

      const query = await fetch(
        `http://35.230.150.245:9090/?query=${this.query.replace(' ', '_')}`,
        {
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
        }
      );

      // eslint-disable-next-line eqeqeq
      if (query.status != 200) {
        console.log('Error retrieving data!');
        return;
      }

      const res = await query.json();

      // eslint-disable-next-line prefer-const
      for (let index in res){
        // eslint-disable-next-line eqeqeq
        if (Number(index) == res.length-1){
          this.metadata = res[index];
        } else {
          this.resultsArray.push(res[index]);
        }
      }

      let timeTaken = Date.now() - start;
      this.timeTakenString = ': 500 results in ' + Number(timeTaken) + 'ms!'
    } catch(e){
      console.log(e);

      const toast = await this.toastController.create({
        message: 'Please \'Allow\' insecure content for this site in broswer! See \'Privacy\' for help',
        color: 'danger',
        icon: 'warning',
        position: 'top',
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

    // eslint-disable-next-line guard-for-in
    for (const i in this.resultsArray){
      console.log('Structure of a result');
      console.log(this.resultsArray[i]);
      console.log(this.resultsArray[i][1].video_id);
      console.log(this.metadata);

      const vidObj: VidObject = {
        videoid: this.resultsArray[i][1].video_id,
        videoTitle: this.metadata[this.resultsArray[i][1].video_id].title,
        channelId: this.metadata[this.resultsArray[i][1].video_id].channelId,
        channelTitle: this.metadata[this.resultsArray[i][1].video_id].channelTitle,
        topics: this.metadata[this.resultsArray[i][1].video_id].topic,
        videoTags: this.metadata[this.resultsArray[i][1].video_id].tags,
        timestamp: this.resultsArray[i][1].timestamp,
        date: this.metadata[this.resultsArray[i][1].video_id].date
      };
      document.getElementById('landing-info').hidden = true;
      this.vidObjects.push(vidObj);
    }

    const time = this.timeFunction(this.vidObjects[0].timestamp);
    window.open('https://www.youtube.com/embed/' + this.vidObjects[0].videoid + '?start=' + time, '_blank');
  }

  clickTitle(videoid: string){
    window.open('https://www.youtube.com/embed/' + videoid);
  }

  clickChannel(channelid: string){
    window.open('https://www.youtube.com/channel/' + channelid);
  }

  timeFunction(hms: string){
    const time = hms.split(':').reverse();

    let counter = 0;
    let seconds = 0;

    for (const part of time){
      seconds += Number(part)*60 ** counter;
      counter+=1;
    }
    return seconds;
  }
}
