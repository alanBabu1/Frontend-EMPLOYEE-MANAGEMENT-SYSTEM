import { Component,OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

  export class NavbarComponent implements OnInit {
    constructor(private service:AuthService,private route:Router) { }
  
    ngOnInit(): void {}
    logOut(){
      this.service.logout();
      this.route.navigate([''])
    }
  }
