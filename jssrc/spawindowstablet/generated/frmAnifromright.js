function addWidgetsfrmAnifromright() {
    frmAnifromright.add();
};

function frmAnifromrightGlobals() {
    frmAnifromright = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnifromright,
        "enabledForIdleTimeout": false,
        "id": "frmAnifromright",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "from right"
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
    frmAnifromright.info = {
        "kuid": "p2kwiet12889314953446"
    };
};