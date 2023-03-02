import { Component ,OnInit } from '@angular/core';
import{ FormBuilder , FormGroup} from '@angular/forms'
import{ Validators} from '@angular/forms'
import {  FormControl } from '@angular/forms';
import { Data } from '@angular/router';
import { ApiService } from '../sheared/api.service';
import { Employeemodel } from './employee-dashboard.model';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditEmployeeModalComponent } from './edit-employee-modal/edit-employee-modal.component';


@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  url="../assets/angimg.jpg";

  onselectfile(e:any){
    if(e.target.files){
      var reader =new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event:any) =>{
        this.url = event.target.result;
      }
      
    }
  }
  
  



  title = 'project2';

  employeeModelobj :Employeemodel = new Employeemodel();
  employData !:any;

  profileForm :any = this.fb.group({
    firstname: new FormControl("",[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    
    lastname: [''],
    email: [''],
    mobileno: [''],
    city: [''],
    State: [''],
    Country: [''],
    range: [''],
    url: ['']
   
    
  });

  constructor(private fb: FormBuilder,
    private api :ApiService,
    private modalService: NgbModal
    ) { }

    ngOnInit(): void {
      this.getAllEmployee();
    }

  postEmployeedetails(){
   
    this.employeeModelobj = this.profileForm.value;
    console.log('profile image', this.profileForm);
    const newUrl = this.profileForm.value.url.split('\\')[2];
    this.employeeModelobj.profileData = `assets/${newUrl}`;

    this.api.postEmploye(this.employeeModelobj)
    .subscribe(res=>{
      console.log(res);
      alert("client added successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.profileForm.reset();

      this.getAllEmployee();
          
    })
   
  }
  getAllEmployee(){
    this.api.getEmploye()
    .subscribe(res=>{
      this.employData=res;
    })
  }

  deleteEmploy(id : number ){
    this.api.deletEmploye(id)
    .subscribe((res)=>{
      alert("client deleted");
      this.getAllEmployee()
    })

  }
  onedit(row : any){
    
    const modalRef = this.modalService.open(EditEmployeeModalComponent);
    modalRef.componentInstance.employeeData = row;
    
  }
}