import { Component, OnInit } from '@angular/core';
import { Studentinfo } from '../studentinfo';
import { ApiserviceService } from '../apiservice.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.component.html',
  styleUrls: ['./newpage.component.css']
})
export class NewpageComponent implements OnInit {
  student:Studentinfo;

  constructor(private studentservice: ApiserviceService) {
    this.student=new Studentinfo;
   // this.student.firstname = '';
   }

  ngOnInit() {
  }
  submit(){
    console.log("click");
    if(this.student.firstname=='')
    {
      alert("first name required");
      return;
    }
    this.student.country="India";
    
    console.log(this.student);
    
    this.studentservice.createUser(this.student).subscribe((res: any)=> {
      //this.spin=true;
     
        console.log('loginurl response', res);
        //this.spin=false;
        //this.router.navigate(['home']);
      
        //  sessionStorage.setItem('userName', this.userData.username);
     
       },error=>{
           console.error('Error in calling Login Api! Login Again');
        alert('Wrong user name or password');
       return throwError(error);
      });   
  }//end of submit

}
