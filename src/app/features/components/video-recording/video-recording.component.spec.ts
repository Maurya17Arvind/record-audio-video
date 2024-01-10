import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoRecordingComponent } from './video-recording.component';

describe('VideoRecordingComponent', () => {
  let component: VideoRecordingComponent;
  let fixture: ComponentFixture<VideoRecordingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [VideoRecordingComponent]
    });
    fixture = TestBed.createComponent(VideoRecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
