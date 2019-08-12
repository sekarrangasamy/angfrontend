import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-workexperience',
  templateUrl: './workexperience.component.html',
  styleUrls: ['./workexperience.component.css']
})
export class WorkexperienceComponent implements OnInit {
  title: string;
  modalContent:any;
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    console.log(this.modalContent,this.title);
  }

}
