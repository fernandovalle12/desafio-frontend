import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class VideoService {

    constructor(
		private http: HttpClient
	) { }

    public getVideos(): Observable<any> {
        let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&key=AIzaSyBEq354XOXigACcVSQ0O3xoXLlkdKl8jII`
        return this.http.get<any>(url);
    }

    public getChannels(): Observable<any> {
        let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=channel&key=AIzaSyBEq354XOXigACcVSQ0O3xoXLlkdKl8jII`
        return this.http.get<any>(url);
    }
   
    public searchVideos(filter: string): Observable<any> {
        let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${filter}&key=AIzaSyBEq354XOXigACcVSQ0O3xoXLlkdKl8jII`
        return this.http.get<any>(url);
    }

    
}
