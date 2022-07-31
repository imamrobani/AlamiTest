package com.alamitest;

import android.content.ContentResolver;
import android.provider.Settings;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class MyModule extends ReactContextBaseJavaModule {
    public MyModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "MyModule";
    }

    @ReactMethod
    public void sayHello(String name, Callback callback){
        try{
            String message = "Hello " + name;
            callback.invoke(null, message);
        }catch (Exception e){
            callback.invoke(e,null);
        }
    }

    @ReactMethod
    public void getDeviceId(Callback callback){
        String ID = Settings.Secure.getString(getCurrentActivity().getContentResolver(), Settings.Secure.ANDROID_ID);
        callback.invoke(ID);
    }
}
