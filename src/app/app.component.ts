import { Component, OnInit, OnDestroy, NgModule } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { Subscription } from 'rxjs';
import { PushNotificationService } from './push-notification.service';
import {
  OnPageVisible, OnPageHidden, OnPageVisibilityChange, AngularPageVisibilityStateEnum, OnPagePrerender, OnPageUnloaded
} from 'angular-page-visibility';

import { NgxPermissionsModule } from 'ngx-permissions';
const VAPID_PUBLIC = 'BN62-2o_nwO-2z-fO-eFTLwFrE0SpuCQUtyHwqeDwtDquP68yR9Qmsbkx2rO83CPCMDSYnbRSkOM9zp_FaoYEAo'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
  exports: [NgxPermissionsModule],
})
export class AppComponent implements OnDestroy, OnInit {

  ngOnInit(): void {
  }

  title = 'Param App Notification';
  constructor(swPush: SwPush, pushService: PushNotificationService, private permissionService: NgxPermissionsModule) {
   //For Push Subscription
    if (swPush.isEnabled) {
      swPush.requestSubscription({
        serverPublicKey: VAPID_PUBLIC,
      }).then(subscription => {
        //send subscrioption to the server
        pushService.sendSubscriptionToTheServer(subscription)
      })
        .catch(console.error)
    }
  }


  // Page Visibility Detection
  @OnPageVisible()
  logWhenPageVisible(): void {
    console.log("OnPageVisible => visible");
  }

  @OnPageHidden()
  logWhenPageHidden(): void {
    console.log('OnPageHidden => Hidden');
  }

  @OnPagePrerender()
  logWhenPagePrerender(): void {
    console.log('OnPagePrerender => prerender');
  }

  @OnPageUnloaded()
  logWhenPageUnloaded(): void {
    console.log('OnPageUnloaded => Unloaded');
  }

  @OnPageVisibilityChange()
  logWhenPageVisibilityChange(isPageVisible: boolean): void {
    console.log('OnPageVisibilityChange');
    if (isPageVisible) {
      console.log('visible');
    } else {
      console.log('hidden');
    }
  }
  
  ngOnDestroy(): void {
    console.log("ONDestroy");
  }

}