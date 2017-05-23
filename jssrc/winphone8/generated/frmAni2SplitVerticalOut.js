function addWidgetsfrmAni2SplitVerticalOut() {
    frmAni2SplitVerticalOut.add();
};

function frmAni2SplitVerticalOutGlobals() {
    frmAni2SplitVerticalOut = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni2SplitVerticalOut,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAni2SplitVerticalOut",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "2SplitVerticalOut"
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
    frmAni2SplitVerticalOut.info = {
        "kuid": "p2kwiet128893149593"
    };
};