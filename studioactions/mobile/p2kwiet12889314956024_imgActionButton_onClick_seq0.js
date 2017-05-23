function p2kwiet12889314956024_imgActionButton_onClick_seq0(eventobject, context) {
    function alert_onClick_318112889314958568_True() {}

    function alert_onClick_318112889314958568_Callback() {
        alert_onClick_318112889314958568_True()
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_ERROR,
        "alertTitle": "",
        "yesLabel": "Yes",
        "noLabel": "No",
        "message": "You clicked button",
        "alertHandler": alert_onClick_318112889314958568_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}