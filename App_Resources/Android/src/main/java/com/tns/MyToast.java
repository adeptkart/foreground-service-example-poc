package com.tns.exampleapp;

import android.widget.Toast;
import android.content.Context;


public class MyToast{

    public  String showToast(Context context,String text ,String StrDuration ){
        int duration;
        switch (StrDuration){
            case "short":
                duration = Toast.LENGTH_SHORT;
                break;
            case "long":
                duration = Toast.LENGTH_LONG;
                break;
        }
        Toast.makeText(context,text, Toast.LENGTH_SHORT).show();

        return "Hello, World";
    }
}
