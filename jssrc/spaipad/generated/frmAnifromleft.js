function addWidgetsfrmAnifromleft() {
    frmAnifromleft.add();
};

function frmAnifromleftGlobals() {
    frmAnifromleft = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnifromleft,
        "enabledForIdleTimeout": false,
        "id": "frmAnifromleft",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "from left"
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
    frmAnifromleft.info = {
        "kuid": "p2kwiet12889314953443"
    };
};