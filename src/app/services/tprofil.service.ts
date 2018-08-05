import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TprofilService {

  profileList: AngularFireList<any>;
  // profileList: Observable<any[]>;

  constructor(private firebase: AngularFireDatabase) { }

  getProfiles() {
    return this.profileList = this.firebase.list('items');
  }
}
