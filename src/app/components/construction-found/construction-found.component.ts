import { Component } from '@angular/core';
import { DirectionService } from 'src/app/shared/direction.service';

@Component({
  selector: 'app-construction-found',
  templateUrl: './construction-found.component.html',
  styleUrls: ['./construction-found.component.css']
})
export class ConstructionFoundComponent {
  constructor(public directionService: DirectionService){}

}
