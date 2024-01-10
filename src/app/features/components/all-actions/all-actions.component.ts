import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-actions.component.html',
  styleUrls: ['./all-actions.component.scss']
})
export class AllActionsComponent {

  public allActions = [
    {
      title:'Video Record',
      url:'video-recoder',
      image:'../../../../assets/CameraLayout.6d3734500f0e908699e5194ed24019dd.svg'
    },
    {
      title:'Audio Record',
      url:'audio-recoder',
      image:'../../../../assets/AudioDefault.5a50a4497a1d2b9e3934cb1697ad558a.svg'
    },
  ];

  constructor(private router:Router){ }

  public gotoRoom(room:string){
    this.router.navigate([room]);
  }

}
