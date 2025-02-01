import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
 
  news: any[] = [];
  myForm: FormGroup ;
  data: any[] = [];
  selectedId: number | null = null;
  currentNewsId: number = 0;
  isEditing = false;

  
  constructor(
    private newsService: NewsService,
    private fb: FormBuilder,

  ) {

    this.myForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl:['',Validators.required]
  });
}

ngOnInit(): void {
  this.getAllnews();
}

getAllnews(){
  this.newsService.getAllNews().subscribe((res:any)=>{
    this.news = res
  })
}



}
