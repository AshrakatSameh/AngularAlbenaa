import { Component } from '@angular/core';
import { DirectionService } from 'src/app/shared/direction.service';

@Component({
  selector: 'app-building-institute',
  templateUrl: './building-institute.component.html',
  styleUrls: ['./building-institute.component.css']
})
export class BuildingInstituteComponent {

  constructor(public directionService: DirectionService){}


}
