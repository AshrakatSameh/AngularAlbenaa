import { Component } from '@angular/core';
import { DirectionService } from 'src/app/shared/direction.service';

@Component({
  selector: 'app-space-diploma',
  templateUrl: './space-diploma.component.html',
  styleUrls: ['./space-diploma.component.css']
})
export class SpaceDiplomaComponent {
  constructor(public directionService: DirectionService){}


}
