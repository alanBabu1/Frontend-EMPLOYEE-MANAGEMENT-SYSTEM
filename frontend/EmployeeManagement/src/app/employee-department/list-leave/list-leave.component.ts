
import { Component ,OnInit,Input  } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';
@Component({
  selector: 'app-list-leave',
  templateUrl: './list-leave.component.html',
  styleUrls: ['./list-leave.component.scss']
}) 
  export class  ListLeaveComponent  implements OnInit {
  
    constructor(private service:PublicService) { }
  
    LeaveList:any=[];
  
    ModalTitle!:string;
    ActivateAddEditEmpComp:boolean=false;
    ActivateviewEmpComp:boolean=false;
    emp:any;
  
    // employee_id_filter!:string;
    nature_filter!:string;
   apply_date_without_filter:any=[];
  
  
    ngOnInit(): void {
      this.refreshEmpList();
    }
  
    addClick(){
      this.emp={
        
          // "apply_date": "",
          "user": 0,
          "nature_of_leave": "",
          "first_Day": "",
          "last_Day": "",
          "number_Of_Days": 0,
          "status": "pending",
         
          
      }
      this.ModalTitle="Add Leave";
      this.ActivateAddEditEmpComp=true;
  
    }
  
    editClick(item: any){
      console.log(item);
  
      if (this.emp.status=="pending"){
        this.emp=item;
        this.ModalTitle="Edit leave";
        this.ActivateAddEditEmpComp=true;
        this.ActivateviewEmpComp=false;
      }
      else{
       alert("Can't Edit this leave");
      }
        
    }
    // view
    viewClick(item: any){
      console.log(item);
      this.emp=item;
      this.ModalTitle="View Leave";
      this.ActivateAddEditEmpComp=false;
      this.ActivateviewEmpComp=true;
    }
  
    deleteClick(item: { id: any; }){
      if(confirm('Are you sure??')){
        this.service.deleteleave(item.id).subscribe(data=>{
          alert(data.toString());
          this.refreshEmpList();
        })
      }
    }
    
  
    closeClick(){
      this.ActivateAddEditEmpComp=false;
      this.refreshEmpList();
    }
  
  
    refreshEmpList(){
      this.service.getleaveList().subscribe(data=>{
        this.LeaveList=data;
        this.apply_date_without_filter=data;
      });
    }
  //Search 
    FilterFn(){
      var  nature_filter = this.nature_filter;
    
      this.LeaveList = this.apply_date_without_filter.filter(function (el:any){
          return el.nature_of_leave.toString().toLowerCase().includes(
           nature_filter.toString().trim().toLowerCase()
          )
      });
    }
  // Sort
    sortResult(prop:any,asc:any){
      this.LeaveList = this.apply_date_without_filter.sort(function(a:any,b:any){
        if(asc){
            return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
        }else{
          return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
        }
      })
    }
  
  }
  