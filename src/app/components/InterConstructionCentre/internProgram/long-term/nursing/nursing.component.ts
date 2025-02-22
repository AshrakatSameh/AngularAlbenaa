import { Component } from '@angular/core';
import { DirectionService } from 'src/app/shared/direction.service';

@Component({
  selector: 'app-nursing',
  templateUrl: './nursing.component.html',
  styleUrls: ['./nursing.component.css']
})
export class NursingComponent {

  constructor(public directionService: DirectionService){}


}
