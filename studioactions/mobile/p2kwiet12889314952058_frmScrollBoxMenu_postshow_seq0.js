function p2kwiet12889314952058_frmScrollBoxMenu_postshow_seq0(eventobject, neworientation) {
    if (kony.os.deviceInfo().name == "android") {
        glbScrollBegining = false;
        frmScrollBoxMenu.sboxGlobalHome.scrollToEnd()
    }
}