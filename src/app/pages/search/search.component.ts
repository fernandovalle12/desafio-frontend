import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { VideoService } from 'src/app/core/services/video.service';
import { Video } from 'src/app/shared/interface/video';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    private routeSub: Subscription = new Subscription();
    
    public videos: Video[] = [];

    constructor(
        private route: ActivatedRoute,
        private videoService: VideoService
    ) { }

    ngOnInit(): void {
        this.routeSub = this.route.params.subscribe(params => {
            this.onSearch(params['search']);
        });
    }

    private onSearch(key: string) {
        this.videoService.searchVideos(key).pipe().subscribe((val: any) => { this.videos = val.items; })
    }

}
