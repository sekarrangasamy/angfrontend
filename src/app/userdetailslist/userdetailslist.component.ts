import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../userdetails/userdetails.service';
import {WorkexperienceComponent} from '../workexperience/workexperience.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ImportComponent } from '../import/import.component';

@Component({
  selector: 'app-userdetailslist',
  templateUrl: './userdetailslist.component.html',
  styleUrls: ['./userdetailslist.component.css']
})
export class UserdetailslistComponent implements OnInit {

  personalDetails:any=[];
  modalContent: any = '';
  bsModalRef: BsModalRef;
  data: Date;
  date1: any;
  date2: any;
  filterParams: any={};
  tempArr:any =[];
  dataArr:any =[];
  details:any;
  constructor(private service:UserdetailsService,private modalService: BsModalService) { }

  ngOnInit() {
    this.list()
  }

  list(){
    this.service.getPersonalDetails().subscribe((res:any)=>{
      if(res){
        this.tempArr = res;
        for(let i of this.tempArr){
          if(i.company){
            this.dataArr.push(i.company);
          }
        }
      }
      this.personalDetails=res;
    })
  }

  delete(id){
    this.service.deleteData(id).subscribe((res:any)=>{
      if(res){
        this.list();
        alert("Deleted Successfully")
      }
    })
  }

  view(id){
    this.details = id;
    const initialState = {
      title: 'Company Details',
      modalContent:this.details.company
    };

    this.bsModalRef = this.modalService.show(WorkexperienceComponent,{initialState});
  }

  viewimport(){
    this.bsModalRef = this.modalService.show(ImportComponent);
  }

  export(){
    this.service.export().subscribe((res) => {
      if(res){
      console.log("res",res);
      }
    })
  }

  onValueChange(event: Date) {
    if (event != this.data) {
			this.data = event ? event : void 0;
			this.date1 = this.data[0];
			this.date2 = this.data[1];
    }
    
    	//start Date
		let start_month = ("0" + (this.date1.getMonth() + 1)).slice(-2);
		let start_day = ("0" + (this.date1.getDate())).slice(-2)
		let start_date = [this.date1.getFullYear(), start_month, start_day].join("-");


		//End Date
		let end_month = ("0" + (this.date2.getMonth() + 1)).slice(-2);
		let end_day = ("0" + (this.date2.getDate())).slice(-2)
		let end_date = [this.date2.getFullYear(), end_month, end_day].join("-");

		this.filterParams['from'] = start_date;
    this.filterParams['to'] = end_date;
    
    this.service.dateDate(this.filterParams).subscribe((res:any)=>{
      this.personalDetails=res;
    })
  }
}
