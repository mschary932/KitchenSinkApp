function addWidgetsfrmAnifromcenter() {
    frmAnifromcenter.add();
};

function frmAnifromcenterGlobals() {
    frmAnifromcenter = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnifromcenter,
        "enabledForIdleTimeout": false,
        "id": "frmAnifromcenter",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "from center"
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
    frmAnifromcenter.info = {
        "kuid": "p2kwiet1288931495160"
    };
};