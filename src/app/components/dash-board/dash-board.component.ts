import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  public users:any =[];
  public fullName:string ="";
  public role!: string;
  constructor(private api: ApiServiceService, private auth: AuthService,
    private userStore: UserStoreService
  ){}

  ngOnInit(){
    this.api.getUsers()
    .subscribe(res=>{
      this.users= res;
      console.log(this.users);

    });
    this.userStore.getFullNameFromStore().subscribe(val=>{
      const fullNameFromToken = this.auth.getFullNameFromToken();
      this.fullName = val || fullNameFromToken
    })
     
    this.userStore.getRoleFromStore()
    .subscribe(val=>{
      const roleFromToken = this.auth.getRoleFromToken();
      this.role = val || roleFromToken;
    })
    

  }
  logOut(){
    this.auth.singOut()
  }
}


