function addWidgetsfrmAni4SplitOut() {
    frmAni4SplitOut.add();
};

function frmAni4SplitOutGlobals() {
    frmAni4SplitOut = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni4SplitOut,
        "enabledForIdleTimeout": false,
        "id": "frmAni4SplitOut",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "4SplitOut"
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
    frmAni4SplitOut.info = {
        "kuid": "p2kwiet12889314953388"
    };
};