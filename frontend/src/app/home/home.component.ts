import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../shared/employee.service';
import { ManagementComponent } from '../management/management.component';
import { Employee } from '../shared/employee.model';
import { ActivatedRoute,Router } from '@angular/router';



var m:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[EmployeeService]
})
export class HomeComponent implements OnInit {

  constructor(public employeeService:EmployeeService,private router:Router,private activate:ActivatedRoute) { 


  }

  id:any
  
  edit?:any[

  ]

  ngOnInit(): void {
    // this.id=this.router.snapshot.paramMap.get('id');
    // this.employeeService.getId(this.id).subscribe((data:any)=>{
    //   this.employeeService.employees=data
    //   this.newdata=this.employeeService.employees;
    // })
    this.id=this.activate.snapshot.paramMap.get('id');
    // console.log(this.id)
    this.employeeService.singlestd(this.id).subscribe((data:any)=>{
      this.employeeService.selectedEmployee=data;
    })
    this.resetForm();
    

  }


  resetForm(form?:NgForm){
    if(form)
      form.reset()
      this.employeeService.selectedEmployee={
      _id:"",
      firstname:"",
      lastname:"",
      empid:0,
      city:"",
      contact:0,
      email:"",
      designation:"",
      salary:0,
      jndate:"",
      dob:"",
      state:""
      }
  }

  onSubmit(form:NgForm){
    // console.log(form.value._id);
    if(form.value._id==""){
      if(form.value.firstname==""){
        alert("Please fill the all first name");
      }
      else if(form.value.lastname==""){
        alert("Please fill the all last name");
      }
      else if(form.value.empid==""){
        alert("Please fill the employee Id");
      }
      else if(form.value.state==""){
        alert("Please fill the state");
      }
      else if(form.value.city==""){
        alert("Please fill the city");
      }
      else if(form.value.email==""){
        alert("Please fill the email");
      }
      else if(form.value.contact==""){
        alert("Please fill the contact");
      }
      else if(form.value.dob==""){
        alert("Please fill the date of birth");
      }
      else if(form.value.designation==""){
        alert("Please fill the designation");
      }
      else if(form.value.jndate==""){
        alert("Please fill the joining date");
      }
      else if(form.value.salary==""){
        alert("Please fill the salary");
      }
      else{
        alert("Data Submitted Successfully")
      }
    this.employeeService.postEmployee(form.value).subscribe((res)=>{
      
      this.resetForm();
      this.employeeService.refreshEmployeeList();
      m.toast({html:'Saved Successfully',classes:'rounded'})
      
      
    })
  }
  else{
    console.log(form.value._id);
    alert("Data Updated Successfully")
    this.employeeService.putEmployee(form.value).subscribe((res)=>{
      console.log(res);
      this.resetForm(form);
      this.employeeService.refreshEmployeeList();
      // m.toast({html:'Updated Successfully',classes:'rounded'})
      alert("Data updated")
    })
  }
}
}
