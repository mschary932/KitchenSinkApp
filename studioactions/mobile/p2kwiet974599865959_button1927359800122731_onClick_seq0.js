function p2kwiet974599865959_button1927359800122731_onClick_seq0(eventobject) {
    if ((kony.os.deviceInfo().model != "iPhone Simulator" && kony.os.userAgent() != "google_sdk")) {
        frmAclmeterOptions.show();
    } else {
        simulatorCheck.call(this);
    }
}