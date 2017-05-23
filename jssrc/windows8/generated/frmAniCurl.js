function addWidgetsfrmAniCurl() {
    frmAniCurl.add();
};

function frmAniCurlGlobals() {
    frmAniCurl = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniCurl,
        "enabledForIdleTimeout": false,
        "id": "frmAniCurl",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "Curl"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "formTransition": "None"
        },
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp"
    });
    frmAniCurl.info = {
        "kuid": "p2kwiet12889314953416"
    };
};