function addWidgetsfrmAni4SplitOut() {
    frmAni4SplitOut.add();
};

function frmAni4SplitOutGlobals() {
    frmAni4SplitOut = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni4SplitOut,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAni4SplitOut",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "4SplitOut"
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
    frmAni4SplitOut.info = {
        "kuid": "p2kwiet1288931495101"
    };
};