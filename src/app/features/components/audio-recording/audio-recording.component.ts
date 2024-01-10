import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audio-recording',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audio-recording.component.html',
  styleUrls: ['./audio-recording.component.scss']
})
export class AudioRecordingComponent {

  public stream:any;
  public audioRecoder:any;
  public audioRecoded:any =[];
  public isAudioPlay:boolean = false;

  public gainNode:any;
  // async ngOnInit() {
  //   if (
  //     'mediaDevices' in navigator &&
  //     'getUserMedia' in navigator?.mediaDevices
  //   ) {
  //     console.log("Let's get this party started");
  //     this.stream = await navigator.mediaDevices.getUserMedia({
  //       "audio": {
  //           "mandatory": {
  //               "googEchoCancellation": "false",
  //               "googAutoGainControl": "false",
  //               "googNoiseSuppression": "false",
  //               "googHighpassFilter": "false"
  //           },
  //           "optional": []
  //       },
  //   }, onMicrophoneGranted, onMicrophoneDenied));
  //   } else {
  //     window.alert('Media devices are not available !');
  //   }
  // }
  // function onMicrophoneDenied() {
  //   alert('Stream generation failed.');
}

// public mediaStreamSource = null;
// public audioContext = null;
// public meter = null;
// public canvasContext = null;
// public WIDTH=500;
// public HEIGHT=50;
// public rafID = null;

// function onMicrophoneGranted(stream:any) {
//     // Create an AudioNode from the stream.
//     mediaStreamSource = audioContext.createMediaStreamSource(stream);

//     // Create a new volume meter and connect it.
//     meter = createAudioMeter(audioContext);
//     mediaStreamSource.connect(meter);

//     // kick off the visual updating
//     onLevelChange();
// }

// function onLevelChange( time ) {
//     // clear the background
//     canvasContext.clearRect(0,0,WIDTH,HEIGHT);

//     // check if we're currently clipping
//     if (meter.checkClipping())
//         canvasContext.fillStyle = "red";
//     else
//         canvasContext.fillStyle = "green";

//     console.log(meter.volume);

//     // draw a bar based on the current volume
//     canvasContext.fillRect(0, 0, meter.volume * WIDTH * 1.4, HEIGHT);

//     // set up the next visual callback
//     rafID = window.requestAnimationFrame( onLevelChange );
// }
//   public startAudioRecording() {
//     this.audioRecoder = new MediaRecorder(this.stream);
//     this.audioRecoder.start();
//     this.isAudioPlay = true;
//     console.log('Recording Started !!!!!!!!!!!');
//     const audioContext = new AudioContext();
//     const microphone = audioContext.createMediaStreamSource(this.stream);

//     // Now you can connect the microphone to your processing chain
//     // For example, you can create a script processor node or any other nodes you need.
//     this.gainNode = audioContext.createGain();
//     // microphone.connect(this.gainNode);
//     this.gainNode.connect(audioContext.destination);
    
//     // this.gainNode.gain.value = 0.1;
//     console.log('this.gainNode :>> ', this.gainNode);
//     // Adjust the gain value to control the volume
//   }
//   public stopAudioRecording(){
//     this.audioRecoder.addEventListener('dataavailable', (event: any) => {
//       this.audioRecoded.push(URL.createObjectURL(event.data));
//       console.log('this.audioRecoded :>> ', this.audioRecoded);
//       console.log('Recording Stoped !!!!!!!!!!!');
//     });
//     this.audioRecoder.stop();
//     this.isAudioPlay = false;
//   }

// }
