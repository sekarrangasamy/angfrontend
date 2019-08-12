import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  private resourceUrl = environment.resourceUrl;
  constructor(private http:HttpClient) { }

  public getPersonalDetails():Observable<any>{
    return this.http.get(this.resourceUrl +'/personal');
  }

  
  public savePersoanlDetails(data):Observable<any>{
    return this.http.post(this.resourceUrl +'/personal',data)
  }


  public getById(id):Observable<any>{
    return this.http.get(this.resourceUrl + '/personal/'+id)
  }

  public updatePersonal(id,data):Observable<any>{
    return this.http.put(this.resourceUrl + '/personal/' + id,data)
  }

  public deleteData(id):Observable<any>{
    return this.http.delete(this.resourceUrl + '/personal/' + id)
  }

  public dateDate(params):Observable<any>{
    return this.http.get(this.resourceUrl + '/personal',{params:params})
  }

  public importExcel(data):Observable<any>{
    return this.http.post(this.resourceUrl + '/import', data)
  }

  public export():Observable<any>{
    return this.http.get(this.resourceUrl + '/export')
  }

}
