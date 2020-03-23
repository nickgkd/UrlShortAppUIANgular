import { Component, OnInit } from '@angular/core';
import { UrlShortenerService } from './screen_one.service';

@Component({
    selector: 'app-screen_one',
    templateUrl: './screen_one.component.html',
    styleUrls: ['./screen_one.component.css']
})

export class ScreenOneComponent implements OnInit {
    public originalUrl = ''
    result = '';
    constructor(private urlShortenerService: UrlShortenerService) { }
    
    ngOnInit() { }

    isShow = false
    
    onSubmit() {
        this.urlShortenerService.post(this.originalUrl).subscribe(resp => {
            console.log(resp['shortenUrl'])
            this.result = resp['shortenUrl']
            this.isShow = true
        }, error => {
            err => console.log(err)
        })
    }
}