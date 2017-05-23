function addWidgetsfrmAnileft() {
    frmAnileft.add();
};

function frmAnileftGlobals() {
    frmAnileft = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnileft,
        "enabledForIdleTimeout": false,
        "id": "frmAnileft",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "left"
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
    frmAnileft.info = {
        "kuid": "p2kwiet12889314953449"
    };
};