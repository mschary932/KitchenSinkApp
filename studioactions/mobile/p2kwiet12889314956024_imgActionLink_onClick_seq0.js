function p2kwiet12889314956024_imgActionLink_onClick_seq0(eventobject, context) {
    function alert_onClick_3539812889314957150_True() {}

    function alert_onClick_3539812889314957150_Callback() {
        alert_onClick_3539812889314957150_True()
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_ERROR,
        "alertTitle": "",
        "yesLabel": "Yes",
        "noLabel": "No",
        "message": "You clicked link",
        "alertHandler": alert_onClick_3539812889314957150_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}