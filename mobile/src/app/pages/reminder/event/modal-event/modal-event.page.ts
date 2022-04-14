import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-event',
  templateUrl: './modal-event.page.html',
  styleUrls: ['./modal-event.page.scss'],
})
export class ModalEventPage implements OnInit {
  modalCtrl: any;
  public result: any;
  public rangeHours: number;
  public rangeDays: number;
  constructor(modalCtrl: ModalController) {
    this.rangeHours = 0;
    this.rangeDays = 0;
    this.result = {
      type: '',
      isHours: false,
      isDay: false,
      isMonth: false,
    };
  }

  ngOnInit() {}
  setType(type: string) {
    this.result.type = type;
  }
  setIsHours() {
    this.result.isHours = !this.result.isHours;
    this.result.isDay = false;
    this.result.isMonth = false;
  }
  setIsDay() {
    if (this.result.type === 'duration') {
      this.result.isHours = false;
    } else {
      this.result.isHours = true;
    }
    this.result.isMonth = !this.result.isDay && false;

    this.result.isDay = !this.result.isDay;
  }
  setIsMonth() {
    this.result.isHours = !this.result.isMonth || true;
    this.result.isDay = !this.result.isMonth || true;
    this.result.isMonth = !this.result.isMonth;
  }
}
