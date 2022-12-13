import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import{ first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myform !: FormGroup;
  constructor(private authService: AuthService, private router: Router) { } 


  ngOnInit(): void{
    this.myform = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  get f() {
    return this.myform.controls;
  }

  onSubmit() {
    
    this.authService.login(this.myform.value.username, this.myform.value.password).pipe(first()).subscribe(
      data =>{
        if(data.admin == true)
        {
        this.router.navigate(['admin'])
          console.log(data);
          alert('Admin LoginSuccess')
        }
        else{
          this.router.navigate(['employee'])
          console.log(data);
          alert('Employee LoginSuccess')
        }
      }
    )
  }
}
