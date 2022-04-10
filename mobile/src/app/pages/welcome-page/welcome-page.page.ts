import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageServiceService } from 'src/app/storage-service.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.page.html',
  styleUrls: ['./welcome-page.page.scss'],
})
export class WelcomePagePage implements OnInit {
  public userName = '';
  constructor(private storage: StorageServiceService, private router: Router) {}
  goToLogin() {
    this.router.navigate(['/login']);
  }
  goToSingup() {
    this.router.navigate(['/register']);
  }

  ngOnInit() {
    this.storage.set('path', '');

    this.storage.get('name').then((res) => {
      this.userName = res;
    });
  }
}
