import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/components/all-actions/all-actions.component').then(c => c.AllActionsComponent)
  },
  {
    path: 'video-recoder',
    loadComponent: () => import('./features/components/video-recording/video-recording.component').then(c => c.VideoRecordingComponent)
  },
  {
    path: 'audio-recoder',
    loadComponent: () => import('./features/components/audio-recording/audio-recording.component').then(c => c.AudioRecordingComponent)
  },
];
