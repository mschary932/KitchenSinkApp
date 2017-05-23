function addWidgetsfrmAni2SplitHorizontalIn() {
    frmAni2SplitHorizontalIn.add();
};

function frmAni2SplitHorizontalInGlobals() {
    frmAni2SplitHorizontalIn = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni2SplitHorizontalIn,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAni2SplitHorizontalIn",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "2SplitHorizontalIn"
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
    frmAni2SplitHorizontalIn.info = {
        "kuid": "p2kwiet128893149581"
    };
};