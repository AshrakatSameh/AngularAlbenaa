import { Component } from '@angular/core';
import { DirectionService } from 'src/app/shared/direction.service';

@Component({
  selector: 'app-autocad',
  templateUrl: './autocad.component.html',
  styleUrls: ['./autocad.component.css']
})
export class AutocadComponent {

  constructor(public directionService: DirectionService){}


}
