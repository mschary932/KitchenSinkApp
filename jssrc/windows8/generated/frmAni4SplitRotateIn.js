function addWidgetsfrmAni4SplitRotateIn() {
    frmAni4SplitRotateIn.add();
};

function frmAni4SplitRotateInGlobals() {
    frmAni4SplitRotateIn = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni4SplitRotateIn,
        "enabledForIdleTimeout": false,
        "id": "frmAni4SplitRotateIn",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "4SplitRotateIn"
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
    frmAni4SplitRotateIn.info = {
        "kuid": "p2kwiet12889314953392"
    };
};