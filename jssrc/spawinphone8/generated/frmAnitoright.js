function addWidgetsfrmAnitoright() {
    frmAnitoright.add();
};

function frmAnitorightGlobals() {
    frmAnitoright = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnitoright,
        "enabledForIdleTimeout": false,
        "id": "frmAnitoright",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "to right"
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
    frmAnitoright.info = {
        "kuid": "p2kwiet1288931495225"
    };
};