import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  
  signUpForm!: FormGroup
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private toast:NgToastService){}
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      fullName: ['', Validators.required],
      username:['', Validators.required],
      email:['', Validators.required],
      password:  [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})'
          )
        ]
      ],
      phone: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: this.matchPasswords('password', 'confirmPassword')
      // type : ['', Validators.required]
    })
  }

    // Custom validator for password confirmation
    matchPasswords(password: string, confirmPassword: string) {
      return (formGroup: FormGroup) => {
        const pass = formGroup.controls[password];
        const confirmPass = formGroup.controls[confirmPassword];
        if (pass.value !== confirmPass.value) {
          confirmPass.setErrors({ mismatch: true });
        } else {
          confirmPass.setErrors(null);
        }
      };
    }
    signUp() {
        this.auth.signUp(this.signUpForm.value).subscribe({
          next: (res) => {
            alert(res.message);
            this.signUpForm.reset();
            this.router.navigate(['/login']);
          },
          error: (err) => {
            alert(err?.error.message);
          }
        });
    
    }
  

  // signUp(){
  //   if(this.signUpForm.valid){
  //     this.auth.signUp(this.signUpForm.value)
  //   .subscribe({
  //     next:(res=>{
  //       alert(res.message)
  //     }),

  //     error:(err=>{
  //       alert(err.error.message)
  //     })
  //   })

  //     console.log(this.signUpForm.value)
  //   }else{
  //     console.log("error"); 
  //   }
  // }
}

  



