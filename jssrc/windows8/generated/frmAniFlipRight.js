function addWidgetsfrmAniFlipRight() {
    frmAniFlipRight.add();
};

function frmAniFlipRightGlobals() {
    frmAniFlipRight = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniFlipRight,
        "enabledForIdleTimeout": false,
        "id": "frmAniFlipRight",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "FlipRight"
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
    frmAniFlipRight.info = {
        "kuid": "p2kwiet12889314953436"
    };
};