function addWidgetsfrmAniSwitchLeft() {
    frmAniSwitchLeft.add();
};

function frmAniSwitchLeftGlobals() {
    frmAniSwitchLeft = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniSwitchLeft,
        "enabledForIdleTimeout": false,
        "id": "frmAniSwitchLeft",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "SwitchLeft"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "inTransitionConfig": {
            "formTransition": "none"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        },
        "retainScrollPosition": false
    });
    frmAniSwitchLeft.info = {
        "kuid": "p2kwiet12889314953496"
    };
};