function addWidgetsfrmAni4SplitIn() {
    frmAni4SplitIn.add();
};

function frmAni4SplitInGlobals() {
    frmAni4SplitIn = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni4SplitIn,
        "enabledForIdleTimeout": false,
        "id": "frmAni4SplitIn",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "4SplitIn"
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
    frmAni4SplitIn.info = {
        "kuid": "p2kwiet12889314953384"
    };
};