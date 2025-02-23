import { Component } from '@angular/core';
import { DirectionService } from 'src/app/shared/direction.service';

@Component({
  selector: 'app-summer-traning',
  templateUrl: './summer-traning.component.html',
  styleUrls: ['./summer-traning.component.css']
})
export class SummerTraningComponent {
  constructor(public directionService: DirectionService){}

}
