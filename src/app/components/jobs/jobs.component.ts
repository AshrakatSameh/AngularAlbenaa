import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit{

  jobs :any[] = [];


  constructor(    
    private jobService:JobsService
  ){}

  ngOnInit(): void {
    this.getAllJobs();
  }

  getAllJobs(){
    this.jobService.getAllJobs().subscribe((res:any)=>{
      this.jobs = res
    })
  }

}
