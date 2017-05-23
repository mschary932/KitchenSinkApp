function addWidgetsfrmAni2SplitVerticalOut() {
    frmAni2SplitVerticalOut.add();
};

function frmAni2SplitVerticalOutGlobals() {
    frmAni2SplitVerticalOut = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni2SplitVerticalOut,
        "enabledForIdleTimeout": false,
        "id": "frmAni2SplitVerticalOut",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "2SplitVerticalOut"
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
    frmAni2SplitVerticalOut.info = {
        "kuid": "p2kwiet128893149593"
    };
};