import { Component } from '@angular/core';
import { DirectionService } from 'src/app/shared/direction.service';

@Component({
  selector: 'app-max3',
  templateUrl: './max3.component.html',
  styleUrls: ['./max3.component.css']
})
export class Max3Component {

  constructor(public directionService: DirectionService){}


}
