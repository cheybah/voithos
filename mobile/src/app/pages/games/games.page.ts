import { Component, OnInit } from '@angular/core';
import { StorageServiceService } from './../../storage-service.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {
  constructor(private storage: StorageServiceService) {}

  ngOnInit() {
    this.storage.set('path', 'games');
  }
}
