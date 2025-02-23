import { Component } from '@angular/core';
import { DirectionService } from 'src/app/shared/direction.service';

@Component({
  selector: 'app-icdl',
  templateUrl: './icdl.component.html',
  styleUrls: ['./icdl.component.css']
})
export class IcdlComponent {
  constructor(public directionService: DirectionService){}

}
