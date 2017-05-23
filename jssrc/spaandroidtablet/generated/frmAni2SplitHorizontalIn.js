function addWidgetsfrmAni2SplitHorizontalIn() {
    frmAni2SplitHorizontalIn.add();
};

function frmAni2SplitHorizontalInGlobals() {
    frmAni2SplitHorizontalIn = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni2SplitHorizontalIn,
        "enabledForIdleTimeout": false,
        "id": "frmAni2SplitHorizontalIn",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "2SplitHorizontalIn"
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
    frmAni2SplitHorizontalIn.info = {
        "kuid": "p2kwiet12889314953368"
    };
};