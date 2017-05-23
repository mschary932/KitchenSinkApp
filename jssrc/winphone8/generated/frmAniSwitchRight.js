function addWidgetsfrmAniSwitchRight() {
    frmAniSwitchRight.add();
};

function frmAniSwitchRightGlobals() {
    frmAniSwitchRight = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniSwitchRight,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAniSwitchRight",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "SwitchRight"
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
    frmAniSwitchRight.info = {
        "kuid": "p2kwiet1288931495212"
    };
};