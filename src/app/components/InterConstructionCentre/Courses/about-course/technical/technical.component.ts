import { Component } from '@angular/core';
import { DirectionService } from 'src/app/shared/direction.service';

@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.css']
})
export class TechnicalComponent {
  constructor(public directionService: DirectionService){}


}
