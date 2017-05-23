function addWidgetsfrmAni4SplitRotateIn() {
    frmAni4SplitRotateIn.add();
};

function frmAni4SplitRotateInGlobals() {
    frmAni4SplitRotateIn = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni4SplitRotateIn,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAni4SplitRotateIn",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "4SplitRotateIn"
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
    frmAni4SplitRotateIn.info = {
        "kuid": "p2kwiet1288931495105"
    };
};