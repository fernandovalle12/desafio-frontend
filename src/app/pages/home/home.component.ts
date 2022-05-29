import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/core/services/video.service';

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
            console.log(val);
            this.videos = val.videos;
        })
    }
}

interface Video {
    id: string,
    kind: string,
    etag: string,
    snipet: Snipet,
    contentDetails: ContentDetails,
    status: Status,
    statistics: Statistics
}

interface Snipet {
    publishedAt: Date,
    channelId: string,
    title: string,
    description: string,
    thumbnails: Thumbnails,
    categoryId: number
}

interface Thumbnails {
    default: { url: string },
    medium: { url: string },
    high: { url: string }
}

interface ContentDetails {
    duration: string,
    aspectRatio: string
}

interface Statistics {
    viewCount: string,
    likeCount: string,
    dislikeCount: string,
    favoriteCount: string,
    commentCount: string
}

interface Status {
    uploadStatus: string,
    privacyStatus: string
}