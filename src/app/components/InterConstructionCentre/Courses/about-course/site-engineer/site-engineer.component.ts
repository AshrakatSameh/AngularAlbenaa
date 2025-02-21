import { Component } from '@angular/core';
import { DirectionService } from 'src/app/shared/direction.service';

@Component({
  selector: 'app-site-engineer',
  templateUrl: './site-engineer.component.html',
  styleUrls: ['./site-engineer.component.css']
})
export class SiteEngineerComponent {
  constructor(public directionService: DirectionService){}

}
