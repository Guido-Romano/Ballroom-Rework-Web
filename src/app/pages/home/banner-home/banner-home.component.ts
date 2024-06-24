import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-banner-home',
  templateUrl: './banner-home.component.html'
})
export class BannerHomeComponent implements AfterViewInit {
  @ViewChild('video', { static: false }) videoElement!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    this.playVideo();
  }

  playVideo() {
    const video: HTMLVideoElement = this.videoElement.nativeElement;
    video.muted = true;
    video.loop = true;

    const tryPlay = () => {
      video.play().then(() => {
        console.log('Video is playing');
      }).catch(error => {
        console.error('Error trying to play video:', error);
        // Retry after a delay if play fails
        setTimeout(tryPlay, 1000);
      });
    };

    // Try to play the video
    tryPlay();
  }
}


