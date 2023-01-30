import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { ActivatedRoute,Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css'],
  providers:[EmployeeService]
})
export class ManagementComponent implements OnInit {

  constructor(public employeeService:EmployeeService,private acrouter:ActivatedRoute,private roter:Router) { }

  ngOnInit(): void {
    this.employeeService.refreshEmployeeList();
  }
  // refreshEmployeeList(){
  //   this.employeeService.getEmployee().subscribe((res)=>{
  //     this.employeeService.employees=res as Employee[];
  //   })
  // }
  
  onDelete(id:any){
    if(confirm('Are you sure to delete this data...')==true){
      this.employeeService.deleteemp(id).subscribe(data=>{
        console.log(data);
        this.employeeService.refreshEmployeeList();
      })
    }
    else{
      
    }
  
    
  }
}