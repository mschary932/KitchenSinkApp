function p2kwiet9745998651944_frmRegisterAccelerometer_onhide_seq0(eventobject, neworientation) {
    if (kony.os.deviceInfo().name != "iPhone") {
        kony.accelerometer.unregisterAccelerationEvents(["shake"]);
        delete shakeCount;
        frmRegisterAccelerometer.lblEvent3.text = "0";
    }
}