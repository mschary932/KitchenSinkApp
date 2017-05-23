function addWidgetsfrmAni2SplitHorizontalOut() {
    frmAni2SplitHorizontalOut.add();
};

function frmAni2SplitHorizontalOutGlobals() {
    frmAni2SplitHorizontalOut = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni2SplitHorizontalOut,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAni2SplitHorizontalOut",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "2SplitHorizontalOut"
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
    frmAni2SplitHorizontalOut.info = {
        "kuid": "p2kwiet128893149585"
    };
};