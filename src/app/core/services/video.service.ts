import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class VideoService {
    public url = 'https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyBEq354XOXigACcVSQ0O3xoXLlkdKl8jII&part=snippet,contentDetails,statistics,status';
    
    constructor(
		private http: HttpClient
	) { }

    public getVideos(): Observable<any> {
        return this.http.get<any>(this.url);
    }
}
