import { Component } from '@angular/core';
import { DirectionService } from 'src/app/shared/direction.service';

@Component({
  selector: 'app-revit',
  templateUrl: './revit.component.html',
  styleUrls: ['./revit.component.css']
})
export class RevitComponent {
  constructor(public directionService: DirectionService){}


}
