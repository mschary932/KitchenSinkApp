function addWidgetsfrmAni4SplitRotateOut() {
    frmAni4SplitRotateOut.add();
};

function frmAni4SplitRotateOutGlobals() {
    frmAni4SplitRotateOut = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni4SplitRotateOut,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAni4SplitRotateOut",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "4SplitRotateOut"
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
    frmAni4SplitRotateOut.info = {
        "kuid": "p2kwiet1288931495109"
    };
};