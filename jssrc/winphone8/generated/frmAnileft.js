function addWidgetsfrmAnileft() {
    frmAnileft.add();
};

function frmAnileftGlobals() {
    frmAnileft = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnileft,
        "enableCache": false,
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
            "transitionSpeed": 0
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "transitionSpeed": 0
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmAnileft.info = {
        "kuid": "p2kwiet1288931495169"
    };
};