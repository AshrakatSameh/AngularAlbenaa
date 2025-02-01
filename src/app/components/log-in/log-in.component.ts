import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  passtype : string = "password";
  isText: boolean = false;

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService,
    private router:Router,
    private toast: NgToastService,
    private userStore: UserStoreService 
  ){ }
  ngOnInit(): void {
    this.loginForm= this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    });
    
  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText? this.passtype ="text" : this.passtype= "password" 

  }

  OnLogIn(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      this.auth.logIn(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          // alert(res.message)
          this.loginForm.reset();
          this.auth.storeToken(res.token);
          const tokenPayload = this.auth.decodedToken();
          this.userStore.setFullNameForStore(tokenPayload.unique_name);
          this.userStore.setRoleForStore(tokenPayload.role);
          this.toast.success({detail:"SUCCESS",summary: res.message, duration: 5000});
          if(tokenPayload.role ==='Admin')
            this.router.navigate(['controll']);
          else{this.router.navigate(['home'])}
          
        },
        error:(err)=>{
          // alert(err?.error.message)
          this.toast.error({detail:"ERROR",summary: "Something went wrong", duration: 5000});

        }
      })
    }else{
      console.log('Form not valid');
    }
  }

}
