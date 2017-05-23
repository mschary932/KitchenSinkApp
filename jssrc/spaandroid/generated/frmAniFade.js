function addWidgetsfrmAniFade() {
    frmAniFade.add();
};

function frmAniFadeGlobals() {
    frmAniFade = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniFade,
        "enabledForIdleTimeout": false,
        "id": "frmAniFade",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "Fade"
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
    frmAniFade.info = {
        "kuid": "p2kwiet1288931495144"
    };
};