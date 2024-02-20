import { Component, ElementRef, ViewChild } from '@angular/core';
import { MyCustomPlugin } from 'my-custom-plugin';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  
  async testPluginMethod(msg:string) {
    await MyCustomPlugin.testPluginMethod({msg:msg})
    .then((res:any)=> {alert("Return value is " + JSON.stringify(res.value))})
    .catch((err:any)=> {alert( JSON.stringify(err))})
  }

  async takePhoto() {
    //debugger
    try {
      const capturedPhoto = await MyCustomPlugin.takePhoto();
      console.log('Photo captured successfully:', capturedPhoto);
    } catch (error) {
      console.error('Error capturing photo:', error);
    }
  }

  async testCameraPlugin() {
    try {
      const result = await MyCustomPlugin.openCamera();
      console.log('Camera plugin result:', result);
    } catch (error) {
      console.error('Error calling camera plugin:', error);
    }
  }

}
