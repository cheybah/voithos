import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ConfigService } from 'src/app/config.service';
import { StorageServiceService } from 'src/app/storage-service.service';
import * as dayjs from 'dayjs';
import { ModalEventPage } from './modal-event/modal-event.page';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {
  public events;
  refrechApi = () => {
    this.callApi.getEvents(`?idEvent=${this.id}`).subscribe((res: any) => {
      this.events = res?.map((value) => {
        value.time = dayjs(`2000-04-30 ${value?.time}`).format('HH:mm');
        return value;
      });
      console.log(this.events);
    });
  };
  id = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    public modalCtrl: ModalController,
    public modalController: ModalController,
    private callApi: ConfigService,
    private storage: StorageServiceService,
    public alertController: AlertController
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.events = [{ name: 'cheyma', id: 1 }];
    this.refrechApi();
  }

  ngOnInit() {}

  async addEvent() {
    const modal = await this.modalCtrl.create({
      component: ModalEventPage,
      componentProps: {
        methed: 'create',
      },
    });
    modal.onDidDismiss().then(({ data }) => {
      let { status } = data;
      if (status === 1) this.refrechApi();
    });
    return await modal.present();
  }

  async updateEvent(id) {
    const modal = await this.modalCtrl.create({
      component: ModalEventPage,
      componentProps: {
        method: 'update',
        id: id,
      },
    });
    modal.onDidDismiss().then(({ data }) => {
      let { status } = data;
      if (status === 1) this.refrechApi();
    });
    return await modal.present();
  }

  async presentAlert(id) {
    const alert = await this.alertController.create({
      // header: 'Delete',
      subHeader: 'Delete',
      message: 'Are you sure you want to delete this reminder?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Delete',
          handler: () => {
            this.callApi
              .deleteEventGroups(`?id=${id}`)
              .subscribe((res: any) => {
                this.refrechApi();
              });
          },
        },
      ],
    });

    await alert.present();
  }
}
