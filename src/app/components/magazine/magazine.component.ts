import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MagazineService } from 'src/app/services/magazine.service';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css'],
})
export class MagazineComponent implements OnInit {
  magazines: any[] = [];
  myMagazineForm: FormGroup;
  data: any[] = [];

  constructor(
    private magazinesService: MagazineService,
    private fb: FormBuilder
  ) {
    this.myMagazineForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getAllMagazines();
  }

  getAllMagazines() {
    this.magazinesService.getAllMagazines().subscribe((res: any) => {
      this.magazines = res;
    });
  }
}
