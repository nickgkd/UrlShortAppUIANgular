import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class UrlShortenerService {
    url = 'http://192.168.99.100:8080/api/v1/url/shorten'
    constructor(private http: HttpClient) { }
    
    get() {
        return this.http.get(this.url)
    }

    post(originalUrl: string){
        const body = {
            originalUrl: originalUrl
        }
        return this.http.post(this.url,body)
    }
}