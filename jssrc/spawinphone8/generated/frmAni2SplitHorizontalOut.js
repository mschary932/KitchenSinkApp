function addWidgetsfrmAni2SplitHorizontalOut() {
    frmAni2SplitHorizontalOut.add();
};

function frmAni2SplitHorizontalOutGlobals() {
    frmAni2SplitHorizontalOut = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni2SplitHorizontalOut,
        "enabledForIdleTimeout": false,
        "id": "frmAni2SplitHorizontalOut",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "2SplitHorizontalOut"
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
    frmAni2SplitHorizontalOut.info = {
        "kuid": "p2kwiet128893149585"
    };
};