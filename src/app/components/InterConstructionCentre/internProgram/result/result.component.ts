import { Component, OnInit } from '@angular/core';
import { ResultService } from 'src/app/services/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit{
  results: any[] = [];

constructor(private resultService:ResultService){

}

  ngOnInit(): void {
    this.getAllresults();
  }

  getAllresults(){
    this.resultService.getAllResults().subscribe((res:any)=>{
      this.results = res
    })
  }

}
