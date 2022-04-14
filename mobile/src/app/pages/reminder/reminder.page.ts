import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';
import { StorageServiceService } from './../../storage-service.service';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.page.html',
  styleUrls: ['./reminder.page.scss'],
})
export class ReminderPage implements OnInit {
  public eventGroups;
  refrechApi = () => {
    this.storage.get('id').then((idUser) => {
      this.callApi
        .getEventGroups(`?id_cms_users=${idUser}`)
        .subscribe((res: any) => {
          this.eventGroups = res?.data;
        });
    });
  };
  constructor(
    public modalCtrl: ModalController,
    private callApi: ConfigService,
    private storage: StorageServiceService,
    public alertController: AlertController
  ) {
    this.eventGroups = [{ name: 'cheyma', id: 1 }];
    this.refrechApi();
  }

  async updateEventGroup(id) {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        methed: 'update',
        id: id,
      },
    });
    modal.onDidDismiss().then(({ data }) => {
      let { status } = data;
      if (status === 1) this.refrechApi();
    });
    return await modal.present();
  }
  async addEventGroup() {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
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

  ngOnInit() {}
}
