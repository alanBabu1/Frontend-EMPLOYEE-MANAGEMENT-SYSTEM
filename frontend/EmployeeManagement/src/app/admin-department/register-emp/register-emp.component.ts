import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import{ first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-emp',
  templateUrl: './register-emp.component.html',
  styleUrls: ['./register-emp.component.scss']
})
export class RegisterEmpComponent implements OnInit{
  myform !: FormGroup;
  constructor(private authService: AuthService, private router: Router) { } 

  ngOnInit(): void{
    this.myform = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      password2: new FormControl(''),
    });
  }

  get f() {
    return this.myform.controls;
  }

  onSubmit() {
    this.authService.register(this.myform.value).pipe(first()).subscribe(
      data =>{
        // this.authService.success('Registration successful', true);
        this.router.navigate(['admin']);
        console.log(data);
        alert('Register Success');
      }
    )}
   
}

