import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/config.service';
import { StorageServiceService } from './../../storage-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public errorMessage;
  constructor(
    private callApi: ConfigService,
    private storage: StorageServiceService,
    private router: Router
  ) {
    this.errorMessage = '';
  }

  ngOnInit() {
    this.storage.set('path', 'register');
  }

  signUP(form) {
    const apiData = form.value;
    apiData.id_cms_privileges = 2;
    apiData.status = 'Active';
    this.callApi.signUpApi(form.value).subscribe((res: any) => {
      if (res.message == 'User aleady exists in Database') {
        this.errorMessage = res.message;
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
}
