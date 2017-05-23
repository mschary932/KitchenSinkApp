function addWidgetsfrmAni4SplitRotateIn() {
    frmAni4SplitRotateIn.add();
};

function frmAni4SplitRotateInGlobals() {
    frmAni4SplitRotateIn = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni4SplitRotateIn,
        "enabledForIdleTimeout": false,
        "id": "frmAni4SplitRotateIn",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "4SplitRotateIn"
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
    frmAni4SplitRotateIn.info = {
        "kuid": "p2kwiet1288931495105"
    };
};