import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // @ViewChild('videoRef') videoRef!: ElementRef<HTMLVideoElement>;

  // title = 'audio-video';
  // videoInput: any;
  // canvas: any;

  // streamStarted: boolean = false;
  // isVideoStarted: boolean = false;
  // isVideoPaused: boolean = false;
  // public isStartRecoding:boolean = false;
  // public defaultCamera:any;
  // public mediaRecorder:any;
  // videoConstraint: MediaStreamConstraints | any = {
  //   video: {
  //     width: 1280,
  //     height: 720,
  //     facingMode: 'user',
  //     advanced: [
  //       {
  //         deviceId: '',
  //       },
  //     ],
  //   },
  // };
  // currentVideoInput!: string;
  // videoSrcObject: any;
  // screenShotSrcs: any = [];
  // public videoRecorded:any = [];
  // public stream:any;

  // async ngOnInit() {
  //   console.log('navigator :>> ', navigator);
  //   console.log('mediaDevices in navigator :>> ', navigator.mediaDevices);
  //   console.log(
  //     'getUserMedia in navigator.mediaDevices :>> ',
  //     'getUserMedia' in navigator?.mediaDevices
  //   );
  //   if (
  //     'mediaDevices' in navigator &&
  //     'getUserMedia' in navigator?.mediaDevices
  //   ) {
  //     console.log("Let's get this party started");
  //     this.stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  //     this.getDevices();
  //     this.getCameraOptions();
  //   } else {
  //     window.alert('Media devices are not available !');
  //   }
  // }

  // ngAfterViewInit() {
  //   this.canvas = document.querySelector('canvas');
  // }

  // async getDevices() {
  //   const devices = await navigator.mediaDevices.enumerateDevices();
  //   console.log('devices :>> ', devices);
  // }

  // async getCameraOptions() {
  //   const devices = await navigator.mediaDevices.enumerateDevices();
  //   this.videoInput = devices.filter((device) => device.kind === 'videoinput');
  //   console.log('this.videoInput :>> ', this.videoInput);
  // }

  // cameraSelect(event: any) {
  //   this.currentVideoInput = event.target.value;
  //   this.videoSrcObject = null;
  //   console.log('this.currentVideoInput :>> ', this.currentVideoInput);
  //   this.playVideo();
  // }

  // playVideo() {
  //   if (
  //     'mediaDevices' in navigator &&
  //     'getUserMedia' in navigator.mediaDevices
  //   ) {
  //     this.videoConstraint.video.advanced[0].deviceId = this.currentVideoInput
  //     const updatedConstraints = {
  //       ...this.videoConstraint,
  //       deviceId: {
  //         exact: this.currentVideoInput,
  //       },
  //     };
  //     console.log('updatedConstraints :>> ', updatedConstraints);
  //     this.defaultCamera = this.videoInput[0].deviceId;
  //     this.startStream(updatedConstraints);
  //   }
  //   this.getMediaRecorder();
  // }

  // async startStream(constraints: any) {
  //   navigator.mediaDevices.getUserMedia(constraints).then((res) => {
  //     if (res) this.handleStream(res);
  //   });
  // }

  // handleStream(stream: any) {
  //   this.videoSrcObject = stream;
  //   this.isVideoStarted = true;
  //   this.isVideoPaused = false;
  // }

  // screenShot() {
  //   console.log('ss :>> ');
  //   console.log('this.canvas :>> ', this.canvas);
  //   if (this.canvas) {
  //     const el = document.querySelector('#logoImg');
  //     this.canvas.width = this.videoRef.nativeElement.videoWidth;
  //     this.canvas.height = this.videoRef.nativeElement.videoHeight;
  //     ((this.canvas as HTMLCanvasElement).getContext('2d') as any)?.drawImage(
  //       this.videoRef.nativeElement,
  //       0,
  //       0
  //     );
  //     this.screenShotSrcs.push(this.canvas.toDataURL('image/jpeg'));
  //     console.log('this.screenShotSrcs :>> ', this.screenShotSrcs);
  //   }
  // }

  // pause() {
  //   this.videoRef.nativeElement.pause();
  //   this.isVideoPaused = true;
  // }

  // downloadImg(src: any, index: number) {
  //   const link = document.createElement('a');
  //   link.download = `screenshot-${index + 1}`;
  //   link.href = src;
  //   link.click();
  // }

  
  // public getMediaRecorder() {
  //   if (!MediaRecorder.isTypeSupported('video/webm')) { // <2>
  //     console.warn('video/webm is not supported')
  //   } else {
  //     this.mediaRecorder = new MediaRecorder(this.stream, { // <3>
  //       mimeType: 'video/webm',
  //     });
  //   }
  // }

  // public startRecording() {
  //   this.mediaRecorder.start();
  //   this.isStartRecoding = true;
  //   console.log('Recording Started !!!!!!!!!!!');

  // }

  // public stopRecording() {
  //   this.mediaRecorder.stop();
  //   this.isStartRecoding = false;
  //   this.mediaRecorder.addEventListener('dataavailable', (event: any) => {
  //     this.videoRecorded.push(URL.createObjectURL(event.data));
  //     console.log('this.videoRecorded :>> ', this.videoRecorded);
  //     console.log('Recording Stoped !!!!!!!!!!!');
  //   });
  // }

  
}
