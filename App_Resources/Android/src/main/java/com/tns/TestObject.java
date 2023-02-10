package com.tns;
import android.app.NativeActivity;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.IBinder;
import androidx.annotation.Nullable;
import androidx.core.app.NotificationCompat;
import android.R;
import android.widget.Toast;

import com.tns.exampleapp.MainActivity;

public class TestObject extends Service {

    public  final String CHANNEL_ID = "ForegroundServiceChannel";
    @Override
    public void onCreate() {
        super.onCreate();
    }
    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
//        new Thread(
//
//                new Runnable() {
//                    @Override
//                    public void run() {
//                        while(true){
//                            try{
//                                Thread.sleep(2000);
//                            }
//                            catch (InterruptedException ex){
//
//                            }
//                        }
//                    }
//                }
//        ).start();
NotificationChannel channel=new NotificationChannel(
        CHANNEL_ID,
        CHANNEL_ID,
        NotificationManager.IMPORTANCE_HIGH
);
         getSystemService(NotificationManager.class).createNotificationChannel(channel);
         Notification.Builder notificationBuilder=new Notification.Builder(this,CHANNEL_ID)
        .setContentText("I am running")
        .setContentTitle("Hello World")
        .setSmallIcon(R.drawable.ic_dialog_alert);
        startForeground(1001,notificationBuilder.build());

        return super.onStartCommand(intent, flags, startId);
    }
    @Override
    public void onDestroy() {
        super.onDestroy();
    }
    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }
}
