function addWidgetsfrmAniright() {
    frmAniright.add();
};

function frmAnirightGlobals() {
    frmAniright = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniright,
        "enabledForIdleTimeout": false,
        "id": "frmAniright",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "right"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "inTransitionConfig": {
            "formTransition": "rightCenter"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        },
        "retainScrollPosition": false
    });
    frmAniright.info = {
        "kuid": "p2kwiet12889314953489"
    };
};