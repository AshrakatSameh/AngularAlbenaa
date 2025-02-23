import { Component } from '@angular/core';
import { DirectionService } from 'src/app/shared/direction.service';

@Component({
  selector: 'app-mangment',
  templateUrl: './mangment.component.html',
  styleUrls: ['./mangment.component.css']
})
export class MangmentComponent {

  constructor(public directionService: DirectionService){}


}
