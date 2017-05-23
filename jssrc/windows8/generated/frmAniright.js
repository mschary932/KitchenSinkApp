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
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "formTransition": "None"
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmAniright.info = {
        "kuid": "p2kwiet12889314953489"
    };
};