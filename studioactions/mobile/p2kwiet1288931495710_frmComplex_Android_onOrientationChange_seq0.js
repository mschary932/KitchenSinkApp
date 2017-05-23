function p2kwiet1288931495710_frmComplex_Android_onOrientationChange_seq0(eventobject, neworientation) {
    if (kony.os.getDeviceCurrentOrientation() == constants.DEVICE_ORIENTATION_PORTRAIT) frmComplex.lblComplex.text = "Please rotate the device to observe Landscape mode";
    else if (kony.os.getDeviceCurrentOrientation() == constants.DEVICE_ORIENTATION_LANDSCAPE) frmComplex.lblComplex.text = "Please rotate the device to observe Portrait mode";
    else {}
}