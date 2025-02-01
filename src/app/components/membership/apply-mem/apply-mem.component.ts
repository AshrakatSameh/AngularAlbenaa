import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MembershipService } from 'src/app/services/membership.service';

@Component({
  selector: 'app-apply-mem',
  templateUrl: './apply-mem.component.html',
  styleUrls: ['./apply-mem.component.css']
})
export class ApplyMemComponent implements OnInit {

  myMembershipApplicantForm!:FormGroup;

  ngOnInit(): void {
    this.myMembershipApplicantForm = this.fb.group({
      fullNameInArabic:['', Validators.required],
      fullNameInEnglish:['', Validators.required],
      nationalNumber:['', Validators.required],
      phone:['', Validators.required],
      email:['',Validators.required],
      city:['',Validators.required],
      address:['',Validators.required],
      gender:['',Validators.required],
      status:['',Validators.required],
      memberType:['',Validators.required],
      memberSystem:['',Validators.required],
      memberCategory:['',Validators.required]
    });
  }

  constructor( private fb: FormBuilder , private membershipService :MembershipService){}

  onSubmitMembershipApplicant() {
    if (this.myMembershipApplicantForm.valid) {
      const membershipApplicantItem = this.myMembershipApplicantForm.value;
      this.membershipService.postMembershipApplicant(membershipApplicantItem).subscribe(
          () => {
            alert('تم التسجيل')
              console.log('TainingApplicant item added successfully');
              this.myMembershipApplicantForm.reset();
              // Optionally, refresh the news list or navigate back to the list
          },
          error => {
              console.error('Error adding new TainingApplicant Item :', error);
          }
      );
  } else {
      console.error('Form is invalid');
  }
}

}
