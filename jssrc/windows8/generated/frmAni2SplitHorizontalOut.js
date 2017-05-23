function addWidgetsfrmAni2SplitHorizontalOut() {
    frmAni2SplitHorizontalOut.add();
};

function frmAni2SplitHorizontalOutGlobals() {
    frmAni2SplitHorizontalOut = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni2SplitHorizontalOut,
        "enabledForIdleTimeout": false,
        "id": "frmAni2SplitHorizontalOut",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "2SplitHorizontalOut"
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
    frmAni2SplitHorizontalOut.info = {
        "kuid": "p2kwiet12889314953372"
    };
};