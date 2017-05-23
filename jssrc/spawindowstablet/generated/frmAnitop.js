function addWidgetsfrmAnitop() {
    frmAnitop.add();
};

function frmAnitopGlobals() {
    frmAnitop = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnitop,
        "enabledForIdleTimeout": false,
        "id": "frmAnitop",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "top"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "inTransitionConfig": {
            "formTransition": "topCenter"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        },
        "retainScrollPosition": false
    });
    frmAnitop.info = {
        "kuid": "p2kwiet12889314953507"
    };
};