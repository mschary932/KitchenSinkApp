function p2kwiet9745998656024_imgActionLink_onClick_seq0(eventobject, context) {
    function alert_onClick_530839745998657301_True() {}

    function alert_onClick_530839745998657301_Callback() {
        alert_onClick_530839745998657301_True()
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_ERROR,
        "alertTitle": "",
        "yesLabel": "Yes",
        "noLabel": "No",
        "message": "You clicked link",
        "alertHandler": alert_onClick_530839745998657301_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}