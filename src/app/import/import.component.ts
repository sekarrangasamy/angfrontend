import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { environment } from '../../environments/environment';
import * as XLSX from 'xlsx';
import { UserdetailsService } from '../userdetails/userdetails.service';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {

  importObj: any= {}

  constructor(private service:UserdetailsService, public bsModalRef: BsModalRef) { }

  ngOnInit() {

  }

  savedata(obj){
  console.log("obj",obj);
   this.service.importExcel(obj).subscribe((res)=>{
    if(res){
      console.log("resobj",res);
    }
   })
  }
filename:any;
setFiles(event) {
    let files = event.srcElement.files;
    if (!files) {
      }
      else{
        console.log("file",files);
        const formData: FormData = new FormData();
          for (let i = 0; i < files.length; i++) {
            formData.append(i.toString(), files[i], files[i].name);
            this.filename = files[i].name;
          }
          let obj = {
            "file":this.filename
          }
          this.service.importExcel(obj).subscribe((res) =>{
            if(res){
            console.log("res",res);
            }
          })
      }
    }

}