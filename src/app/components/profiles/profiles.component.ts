import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Service
import { TprofilService } from '../../services/tprofil.service';

// Class tprofil
import { Tprofil } from '../../models/tprofil';
import { HeaProfiles} from '../../models/heaProofiles';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  profilesList;
  // profilesList:  Observable<any[]>;
  profil: Tprofil;

  constructor(private tprofileService: TprofilService) { }

  ngOnInit() {
    // this.tprofileService.getProfiles()
    // .snapshotChanges()
    // .subscribe(item => {
    //   this.profilesList = [];
    //   item.forEach(element => {
    //     let x = element.payload.toJSON();
    //     x["$key"] = element.key;
    //     console.log (element.key);
    //     this.profilesList.push(x);
    //   });
      console.log("ich lebe");
      this.profilesList = HeaProfiles;
      console.log(this.profilesList.HEA);
      this.profil = new Tprofil ( HeaProfiles.HEA[0].HEA, HeaProfiles.HEA[0].h, HeaProfiles.HEA[0].b, HeaProfiles.HEA[0].tg, HeaProfiles.HEA[0].ts, HeaProfiles.HEA[0].r);
      console.log (this.profil.getAreaProfil());
      console.log (this.profil.getAreaSteg());
      console.log (this.profil.getWichteProfil());

    }
    // this.profilesList = this.tprofileService.getProfiles();
    // console.log(this.profilesList.);
  }

