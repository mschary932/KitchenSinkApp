function p2kwiet12889314952439_segment2684597951820494_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    function alert_onRowClick_5733912889314955325_True() {}

    function alert_onRowClick_5733912889314955325_Callback() {
        alert_onRowClick_5733912889314955325_True()
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_ERROR,
        "alertTitle": "",
        "yesLabel": "Yes",
        "noLabel": "No",
        "message": "You clicked segment row",
        "alertHandler": alert_onRowClick_5733912889314955325_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    })
}