import { Component } from '@angular/core';
import { DirectionService } from 'src/app/shared/direction.service';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent {
  constructor(public directionService: DirectionService){}

}
