import { Component, OnInit, AfterViewInit } from '@angular/core';
//import { trigger, animate, style, transition, keyframes } from '@angular/animations';
import { TestService } from './test.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'GIPHY Search';
    giphArray: Array<string> = [];
    giphData: any;
    limitNum: number = 20;
    
  constructor(private testService: TestService, public sanitizer: DomSanitizer) {}

ngAfterViewInit(){
    
}
  getRestItems(text, limitNum): any {
    this.testService.getAll(text, limitNum)
      .subscribe(
        giphData => {
          this.giphArray = [];
          this.giphData = giphData;
          this.giphData.data.forEach(element => {
              this.giphArray.push(element.images.downsized.url)
          });
  });
}
}
