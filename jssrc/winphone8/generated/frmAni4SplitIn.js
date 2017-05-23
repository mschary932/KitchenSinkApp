function addWidgetsfrmAni4SplitIn() {
    frmAni4SplitIn.add();
};

function frmAni4SplitInGlobals() {
    frmAni4SplitIn = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni4SplitIn,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAni4SplitIn",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "4SplitIn"
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
    frmAni4SplitIn.info = {
        "kuid": "p2kwiet128893149597"
    };
};