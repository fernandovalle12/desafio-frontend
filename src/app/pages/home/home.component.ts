import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/core/services/video.service';
import { Video } from 'src/app/shared/interface/video';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public videos: Video[] = [];
    constructor(
        private videoService: VideoService
    ) { }

    ngOnInit(): void {
        this.getVideos();
    }

    private getVideos() {
        this.videoService.getVideos().pipe().subscribe((val: any) => { 
            this.videos = val.items;
        })
    }
}