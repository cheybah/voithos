import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private api_link = 'http://127.0.0.1:8000/api/';
  private header = { headers: { 'Content-Type': 'application/json' } };
  constructor(private http: HttpClient) {}

  loginApi(req) {
    let api = 'login';
    return this.http.post(this.api_link + api, req, this.header);
  }
  signUpApi(req) {
    let api = 'sign_up';
    return this.http.post(this.api_link + api, req, this.header);
  }
  getEventGroups(req) {
    let api = 'event_groups';
    return this.http.get(this.api_link + api + req);
  }

  addEventGrouppApi(req) {
    let api = 'add_event_group';
    return this.http.post(this.api_link + api, req, this.header);
  }
  deleteEventGroups(req) {
    let api = 'delete_event_group';
    return this.http.get(this.api_link + api + req);
  }

  updateEventGrouppApi(req) {
    let api = 'update_event_group';
    return this.http.post(this.api_link + api, req, this.header);
  }
  getEvents(req) {
    let api = 'events';
    return this.http.get(this.api_link + api + req);
  }
}
