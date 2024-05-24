import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Employee from '../models/Employee';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
  employee:Employee={
    name:'',
    department:'',
    dateOfHire:'',
    salary:0
  };

  employeeList:Employee[]=[];

  departments=['Human Resources','Financials','Technology','Sales'];

  editingIndex:number | null=null;

  saveEmployee(){

    if (this.editingIndex !==null){
      this.employeeList[this.editingIndex] ={...this.employee};
      this.editingIndex =null;
    }else{
      this.employeeList.push({...this.employee});
    }
    this.resetForm();
  }

  editEmployee(index:number){
    console.log(index);
    this.employee={ ...this.employeeList[index]};
    console.log(this.employee);
    this.editingIndex=index;

  }
  
  deleteEmployee(index:number){
    this.employeeList.splice(index,1);
  }

  resetForm(){
    this.employee={
      name:'',
      department:'',
      dateOfHire:'',
      salary:0
    };
    this.editingIndex=null;
  }
}
