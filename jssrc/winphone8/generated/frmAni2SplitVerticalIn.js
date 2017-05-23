function addWidgetsfrmAni2SplitVerticalIn() {
    frmAni2SplitVerticalIn.add();
};

function frmAni2SplitVerticalInGlobals() {
    frmAni2SplitVerticalIn = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni2SplitVerticalIn,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAni2SplitVerticalIn",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "2SplitVerticalIn"
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
    frmAni2SplitVerticalIn.info = {
        "kuid": "p2kwiet128893149589"
    };
};