import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/config.service';
import { StorageServiceService } from 'src/app/storage-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public errorMessage;

  constructor(
    private callApi: ConfigService,
    private storage: StorageServiceService,
    private router: Router
  ) {
    this.errorMessage = '';
  }

  ngOnInit() {}

  login(form): void {
    this.callApi.loginApi(form.value).subscribe((res: any) => {
      if (!!res.email) {
        this.storage.set('id', res.id);
        this.storage.set('name', res.name);
        this.storage.set('email', res.email).then(() => {
          this.storage.get('email').then((res) => {
            if (!!res) {
              this.router.navigate(['/']);
            }
          });
        });
      } else {
        this.errorMessage = res.api_message;
      }
    });
  }

  loginOTP() {}
}
