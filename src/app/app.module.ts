import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserdetailslistComponent } from './userdetailslist/userdetailslist.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap';
import { WorkexperienceComponent } from './workexperience/workexperience.component';
import { ImportComponent } from './import/import.component';

@NgModule({
  declarations: [
    AppComponent,
    UserdetailsComponent,
    UserdetailslistComponent,
    WorkexperienceComponent,
    ImportComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[WorkexperienceComponent]
})
export class AppModule { }
