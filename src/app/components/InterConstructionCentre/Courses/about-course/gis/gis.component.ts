import { Component } from '@angular/core';
import { DirectionService } from 'src/app/shared/direction.service';

@Component({
  selector: 'app-gis',
  templateUrl: './gis.component.html',
  styleUrls: ['./gis.component.css']
})
export class GISComponent {

  constructor(public directionService: DirectionService){}


}
