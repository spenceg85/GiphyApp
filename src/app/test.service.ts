import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TestService {

    data: any;
    limitNum: number = 20;
  constructor(private http: HttpClient, public sanitizer: DomSanitizer) { }

    // Rest Items Service: Read all REST Items
    getAll(text, limitNum) {
        console.log(limitNum)
        var url = 'http://api.giphy.com/v1/gifs/search?q=' + text + '&api_key=gO4ceCCsJqJpm4YGFu4YlXOLZyDacQYW&limit='+ limitNum;
      return this.http
        .get<any[]>(url)
        .pipe(map(data => data));
    }
}
