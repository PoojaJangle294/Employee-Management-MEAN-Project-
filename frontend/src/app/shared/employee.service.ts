import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute,Route } from '@angular/router';
// import 'rxjs/add/operator/map'
//import 'rxjs/add/operator/toPromise'

import { Employee } from './employee.model';
@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
//  selectedEmployee?:Employee;
  selectedEmployee: Employee = {};
  employees?:Employee[];
  readonly baseURL="http://localhost:3000/employees"


  constructor(public http:HttpClient,private router:ActivatedRoute) { }
  postEmployee(emp: Employee){
    return this.http.post(this.baseURL,emp)

  }

  getEmployee(){
    return this.http.get(this.baseURL)
  }

  putEmployee(emp:Employee){
    
     return this.http.put(this.baseURL+`/${emp._id}`,emp);
  }

  updatedata(id:any,emp:any){
    return this.http.put(`${this.baseURL}/${id}`,emp);

  }

  refreshEmployeeList(){
    this.getEmployee().subscribe((res)=>{
      this.employees=res as Employee[];
    })
  }

  singlestd(id:any){
    return this.http.get(this.baseURL+'/'+id)
  }
  deleteemp(id:any){
    return this.http.delete(this.baseURL+`/${id}`);
  }

}


