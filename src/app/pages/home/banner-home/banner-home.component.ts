import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-banner-home',
  templateUrl: './banner-home.component.html'
})
export class BannerHomeComponent implements AfterViewInit {
  @ViewChild('video') videoElement!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    this.playVideo();
  }

  playVideo() {
    const video: HTMLVideoElement = this.videoElement.nativeElement;
    video.muted = true;
    video.loop = true;
    video.play().catch(error => {
      console.error('Error trying to play video:', error);
    });
  }
}

