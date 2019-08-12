import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserdetailsService } from './userdetails.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  
  userObj:any = {};
  experience:boolean = false;
  id:any;
  value:any;
  value1:any;
  type:any;

  constructor(private fb: FormBuilder, private service: UserdetailsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.queryParams.subscribe(params =>{
      this.id = params.id
    })

    this.service.getById(this.id).subscribe(res =>{
      if(this.id){
        console.log(res);
        this.userObj.name =res.name;
      this.userObj.email = res.email;
      this.userObj.phone =res.phone;
      this.userObj.dob =res.dob;
      this.userObj.qualification =res.qualification;
      this.userObj.college =res.college;
      this.userObj.university =res.university;
      this.userObj.address =res.address;
      this.type=res.type;
    

      if(res.type == "experience"){
        
        this.experience = true;
        this.value = true;
        this.tempArr=res.company;
        // this.addObj();
      }

      if(res.type == "fresher"){
        this.experience = false;
        this.value1 = true;
      }
      }

      
    })
  }
 

  radio(obj,event){
    if(obj == "experience"){
      this.experience = true;
      this.tempArr =[];
      this.addObj();
      this.type=obj;
    }else{
      this.experience = false;
      this.type =obj;
    }
  }
  // onChanges(event,radio){
  //   console.log(event.target,radio);
  // }

  deleteRecord(index){
    this.tempArr.splice(index,this.tempArr.length);
  }

  tempArr:any =[];
  addObj(){
    this.tempArr.push({}); 
  }

  savedata(obj){

    if(this.id){
      console.log(this.type);
      // this.type=obj.radio;
      obj.type =this.type;
      obj.company = this.tempArr;
      this.service.updatePersonal(this.id,obj).subscribe((res:any)=>{
        if(res)
        alert("Data Updated Successfully");
        this.router.navigateByUrl('/userdetailslist');
      })
    }else{
      obj.type = obj.radio;
      obj.company = this.tempArr;
      this.service.savePersoanlDetails(obj).subscribe((resObj) =>{
        if(resObj)
        alert("Data Save Successfully");
        this.router.navigateByUrl('/userdetailslist');
      })
    }
  }

 
}




