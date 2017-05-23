function p2kwiet1288931495959_button1181029310123373_onClick_seq0(eventobject) {
    if ((kony.os.deviceInfo().model != "iPhone Simulator")) {
        frmCalendarEvents.show();
    } else {
        simulatorCheck.call(this);
    }
}