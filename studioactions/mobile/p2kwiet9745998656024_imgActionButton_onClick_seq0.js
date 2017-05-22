function p2kwiet9745998656024_imgActionButton_onClick_seq0(eventobject, context) {
    function alert_onClick_60332974599865785_True() {}

    function alert_onClick_60332974599865785_Callback() {
        alert_onClick_60332974599865785_True()
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_ERROR,
        "alertTitle": "",
        "yesLabel": "Yes",
        "noLabel": "No",
        "message": "You clicked button",
        "alertHandler": alert_onClick_60332974599865785_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}