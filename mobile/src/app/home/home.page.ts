import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageServiceService } from './../storage-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public userName = '';
  constructor(private storage: StorageServiceService, private router: Router) {}
  ngOnInit() {
    this.storage.get('name').then((res) => {
      this.userName = res;
    });
  }

  onGoodbye() {
    this.storage.clear();
    this.storage.set('path', '').then(() => {
      this.router.navigate(['/login']);
    });
  }
}
