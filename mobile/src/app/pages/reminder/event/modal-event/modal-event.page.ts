import { ModalController, NavParams } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-modal-event',
  templateUrl: './modal-event.page.html',
  styleUrls: ['./modal-event.page.scss'],
})
export class ModalEventPage implements OnInit {
  modalCtrl: any;
  public result: any;
  @Input() theid: number;
  constructor(
    modalCtrl: ModalController,
    private activatedRoute: ActivatedRoute,
    navParams: NavParams
  ) {
    this.theid = navParams.get('theid');
    this.result = {
      rangeHours: 1,
      rangeDays: 1,
      days: [false, false, false, false, false, false, false, false],
      name: '',
      type: '',
      time: '',
      date: '',
      day: '',
      fullDate: '',
      isHours: false,
      isDay: false,
      isMonth: false,
      start: '',
      end: '',
    };
  }
  setDataForma = (data) => {
    let result = {
      id_event_group: this.theid,
      name: data.name,
      frequency: data.type,
      time: '',
      start_date: data.start,
      end_date: data.end,
      details: {},
    };
    const dayJsFullDate = dayjs(data.fullDate);
    const dayJsStart = dayjs(result.start_date);
    const dayJsEnd = dayjs(result.end_date);
    switch (data.type) {
      case 'one':
        result.time = dayJsFullDate.format('HH:MM:ss');
        result.start_date = dayJsFullDate.format('YYYY-MM-DD');
        result.end_date = dayJsFullDate.format('YYYY-MM-DD');
        break;
      case 'duration':
        console.log('start', result.start_date);
        result.time = '00:00:00';
        result.start_date = dayJsStart.format('YYYY-MM-DD');
        result.end_date = dayJsEnd.format('YYYY-MM-DD');
        result.details = JSON.stringify({
          time: !!data.time
            ? dayjs(data.time).format('HH:MM:ss')
            : data.rangeHours,
          days: !!data.rangeDays ? data.rangeDays : null,
        });
        break;

      case 'date':
        data.days[7]
          ? (data.days = [true, true, true, true, true, true, true])
          : data.days.pop();
        result.start_date = dayJsStart.format('YYYY-MM-DD');
        result.end_date = dayJsEnd.format('YYYY-MM-DD');
        result.time = dayJsFullDate.format('HH:MM:ss');
        result.details = JSON.stringify({
          days: data.days,
        });
        break;
    }
    return result;
  };
  submit() {
    this.setDataForma(this.result);
    console.log(this.result);
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
