function p2kwiet974599865668_frmComplex_postshow_seq0(eventobject, neworientation) {
    if (kony.os.deviceInfo().name != "thinclient") {
        if (kony.os.getDeviceCurrentOrientation() == constants.DEVICE_ORIENTATION_PORTRAIT) frmComplex.lblComplex.text = "Please rotate the device to observe Landscape mode";
        else if (kony.os.getDeviceCurrentOrientation() == constants.DEVICE_ORIENTATION_LANDSCAPE) frmComplex.lblComplex.text = "Please rotate the device to observe Portrait mode";
        else {}
    }
}