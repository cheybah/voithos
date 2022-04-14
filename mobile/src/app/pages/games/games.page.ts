import { Component, OnInit } from '@angular/core';
import { StorageServiceService } from './../../storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {
  public userName = '';
  constructor(private storage: StorageServiceService, private router: Router) {}

  ngOnInit() {
    this.storage.set('path', 'games');
    {
      this.storage.get('name').then((res) => {
        this.userName = res;
      });
    }
  }
}
