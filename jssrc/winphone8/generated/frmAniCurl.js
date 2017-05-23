function addWidgetsfrmAniCurl() {
    frmAniCurl.add();
};

function frmAniCurlGlobals() {
    frmAniCurl = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniCurl,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAniCurl",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "Curl"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "inTransitionConfig": {
            "transitionSpeed": 0
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "transitionSpeed": 0
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmAniCurl.info = {
        "kuid": "p2kwiet1288931495136"
    };
};