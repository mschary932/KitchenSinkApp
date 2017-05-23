function addWidgetsfrmAniSwitchRight() {
    frmAniSwitchRight.add();
};

function frmAniSwitchRightGlobals() {
    frmAniSwitchRight = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniSwitchRight,
        "enabledForIdleTimeout": false,
        "id": "frmAniSwitchRight",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "SwitchRight"
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
    frmAniSwitchRight.info = {
        "kuid": "p2kwiet12889314953500"
    };
};