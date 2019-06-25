package com.gyoh.reactnativestarterkit;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.masteratul.rn.testexception.RnTestExceptionHandlerPackage;


import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

// react-native-navigation v2
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;

// Firebase
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;

// ExceptionHandler
import com.masteratul.exceptionhandler.ReactNativeExceptionHandlerPackage;

// DeviceInfo
import com.learnium.RNDeviceInfo.RNDeviceInfo;

// Version Check
import io.xogus.reactnative.versioncheck.RNVersionCheckPackage;

// WebView
import com.reactnativecommunity.webview.RNCWebViewPackage;

// VectorIcons
import com.oblador.vectoricons.VectorIconsPackage;


import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

  @Override
  protected ReactGateway createReactGateway() {
    ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
      @Override
      protected String getJSMainModuleName() {return "index";}
    };
    return new ReactGateway(this, isDebug(), host);
  }


  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }


  protected List<ReactPackage> getPackages() {
    // Add additional packages you require here
    // No need to add RnnPackage and MainReactPackage
    return Arrays.<ReactPackage>asList(
            new RNFirebasePackage(),
            new RNFirebaseMessagingPackage(),
            new VectorIconsPackage(),
            new RNVersionCheckPackage(),
            new RNCWebViewPackage(),
            new RNDeviceInfo(),
            new ReactNativeExceptionHandlerPackage(),
            new RnTestExceptionHandlerPackage()
    );
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
  }

}
/*
public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RnTestExceptionHandlerPackage(),
            new ReactNativeExceptionHandlerPackage(),
            new RNCWebViewPackage(),
            new RNVersionCheckPackage(),
            new VectorIconsPackage(),
            new RNDeviceInfo(),
            new RNGestureHandlerPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, false);
  }
}

*/