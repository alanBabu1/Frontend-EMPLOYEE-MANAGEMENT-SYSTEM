import { Component,OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar-emp',
  templateUrl: './navbar-emp.component.html',
  styleUrls: ['./navbar-emp.component.scss']
})
export class NavbarEmpComponent implements OnInit {
  constructor(private service:AuthService,private route:Router) { }

  ngOnInit(): void {}
  logOut(){
    this.service.logout();
    this.route.navigate([''])
  }
}
