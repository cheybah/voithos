import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { StorageServiceService } from 'src/app/storage-service.service';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() methed: string;
  @Input() id: string;

  submitType: string;
  constructor(
    public modalCtrl: ModalController,
    private callApi: ConfigService,
    private storage: StorageServiceService,
    navParams: NavParams
  ) {
    this.submitType = navParams.get('methed');
  }

  ngOnInit() {}
  addEventGroup = ({ value }) => {
    this.storage.get('id').then((id_cms_users) => {
      if (this.submitType === 'update') {
        this.callApi
          .updateEventGrouppApi({ ...value, id_cms_users, id: this.id })
          .subscribe((res: any) => {
            if (res.api_status === 1) {
              this.dismiss({ status: res.api_status });
            }
          });
      } else
        this.callApi
          .addEventGrouppApi({ ...value, id_cms_users })
          .subscribe((res: any) => {
            if (res.api_status === 1) {
              this.dismiss({ status: res.api_status });
            }
          });
    });
  };
  dismiss(data) {
    this.modalCtrl.dismiss({
      dismissed: true,
      ...data,
    });
  }
}
