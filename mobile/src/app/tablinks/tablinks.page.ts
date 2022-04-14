import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';
import { GamesPage } from '../pages/games/games.page';
import { ReminderPage } from '../pages/reminder/reminder.page';
import { TrackingPage } from '../tracking/tracking.page';

@Component({
  selector: 'app-tablinks',
  templateUrl: './tablinks.page.html',
})
export class TablinksPage implements OnInit {
  public home = HomePage;
  public reminder = ReminderPage;
  public games = GamesPage;
  public tracking = TrackingPage;
  constructor() {}

  ngOnInit() {}
}
