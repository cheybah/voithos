import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage: Storage, private router: Router) {}

  ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    this.storage.create();
    this.storage.get('email').then((res) => {
      this.storage.get('path').then((res) => {
        console.log('path', res);
      });

      console.log('res', res);
      if (!!res) {
        // this.router.navigate(['/tablinks']);
      } else {
        // this.router.navigate(['/']);
      }
    });
  }
}
