import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { Subscription } from 'rxjs';
import { PushNotificationService } from './push-notification.service';


const VAPID_PUBLIC = 'BN62-2o_nwO-2z-fO-eFTLwFrE0SpuCQUtyHwqeDwtDquP68yR9Qmsbkx2rO83CPCMDSYnbRSkOM9zp_FaoYEAo'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Param App Notification';
  constructor(swPush: SwPush, pushService: PushNotificationService){
    if (swPush.isEnabled) {
      swPush.requestSubscription({
        serverPublicKey:  VAPID_PUBLIC,
      }).then( subscription => {
        //send subscrioption to the server
       pushService.sendSubscriptionToTheServer(subscription)
     
      })
      .catch(console.error)
  }

}
}
