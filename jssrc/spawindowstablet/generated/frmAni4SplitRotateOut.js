function addWidgetsfrmAni4SplitRotateOut() {
    frmAni4SplitRotateOut.add();
};

function frmAni4SplitRotateOutGlobals() {
    frmAni4SplitRotateOut = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni4SplitRotateOut,
        "enabledForIdleTimeout": false,
        "id": "frmAni4SplitRotateOut",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "4SplitRotateOut"
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
    frmAni4SplitRotateOut.info = {
        "kuid": "p2kwiet12889314953396"
    };
};