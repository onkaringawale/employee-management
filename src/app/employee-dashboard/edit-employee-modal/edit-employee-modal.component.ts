import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';




interface Employee {
  firstname: string;
  lastname: string;
  email: string;
  mobileno: string;
  age: number;
  city: string;
  State: string;
  Country: string;
  range: string | number;
  url: string;
  profileData: string;
}

@Component({
  selector: 'app-edit-employee-modal',
  templateUrl: './edit-employee-modal.component.html',
  styleUrls: ['./edit-employee-modal.component.css']
})
export class EditEmployeeModalComponent {
  profileForm!: FormGroup;

  @Input()
  
  employeeData!: Employee;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {}


  updateEmployeedetails() {
    this.employeeData = this.profileForm.value;
    let ref = document.getElementById('cancel')
    ref?.click();
   alert('updated successfully')
    

  }
  
  onselectfile(e:any){
    if(e.target.files){
      var reader =new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event:any) =>{
      this.profileForm.setValue(event.target.result);
      }
    }
   
  }

  ngOnInit() {
    console.log('employeeData ==>', this.employeeData);
    this.profileForm = this.fb.group({
      firstname: [this.employeeData.firstname,[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      lastname: [this.employeeData.lastname],
      email: [this.employeeData.email],
      mobileno: [this.employeeData.mobileno],
      age: [this.employeeData.age],
      city: [this.employeeData.city],
      State: [this.employeeData.State],
      Country: [this.employeeData.Country],
      range: [this.employeeData.range],
      url: ['']
     
    });
  }
}
