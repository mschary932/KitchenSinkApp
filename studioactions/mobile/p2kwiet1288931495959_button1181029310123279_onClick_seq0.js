function p2kwiet1288931495959_button1181029310123279_onClick_seq0(eventobject) {
    if ((kony.os.deviceInfo().model != "iPhone Simulator" && kony.os.userAgent() != "google_sdk")) {
        frmCameraOptions.show();
    } else {
        simulatorCheck.call(this);
    }
}