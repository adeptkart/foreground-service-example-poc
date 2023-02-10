//Nativescript
import { Component } from "@angular/core";
import * as application from '@nativescript/core/application';
import { Application, CoreTypes, AndroidApplication, Device, ApplicationSettings, Utils } from '@nativescript/core';


declare var com: any //this is the important part

@Component({
  selector: "ns-app",
  template: `
    <StackLayout orientation="vertical">
           <h1><Label [text]="message" (tap)="onTap()"></Label></h1>
    </StackLayout>
  `
})
export class AppComponent extends androidx.appcompat.app.AppCompatActivity  {
private forceStop = false;
    public message: string = "Hello, Angular";
    public onTap() {
        this.message = "Text Changed";
        console.log("Hello, ");
     var ctx = application.android.context;
    var lState=com.tns.exampleapp.service.SoundService.getState();
    if (lState === com.tns.exampleapp.constant.MusicConstants.STATE_SERVICE.NOT_INIT) {
    console.log(com.tns.exampleapp.util.NetworkHelper.isInternetAvailable(ctx));
      if (!com.tns.exampleapp.util.NetworkHelper.isInternetAvailable(ctx)) {
          console.log("I am error inside lState!=");
          return;
      }
      }
    console.log(lState);
    var intent=new android.content.Intent(ctx,com.tns.exampleapp.service.SoundService.class);
   const testIntent=new android.content.Intent(ctx,com.tns.TestObject.class);
   // console.log(testIntent);
    //intent.setAction(com.tns.exampleapp.service.MusicConstants.ACTION.START_ACTION);
    ctx.startForegroundService(testIntent);
    //ctx.startService(testIntent);
    // ctx.startForegroundService(intent);
     this.invokeInterval(ctx,testIntent);

    //var testhello=new com.tns.exampleapp.MyToast().showToast(application.android.context,"Hello , Hitesh","short");
    //console.log("Finished "+testhello);


    }

counter : number =0;

  invokeInterval(ctx,intent) {

         const timeCount = setInterval(() => {
           if(!this.forceStop) {
           if(this.counter===100){
                ctx.stopService(intent);
                this.forceStop=true;
           }
           this.counter += 1;
             console.log("Foreground service started." +this.counter);
           } else {
             this.counter=0;
             clearInterval(timeCount);
           }
         }, 1000);
     }


    }

