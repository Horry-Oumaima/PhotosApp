package io.ionic.starter;

import com.getcapacitor.BridgeActivity;

import android.os.Bundle;


import com.ced.plugins.mycustomplugin.MyCustomPluginPlugin;


public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(MyCustomPluginPlugin.class);
        super.onCreate(savedInstanceState);

    }
}
