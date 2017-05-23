function addWidgetsfrmAnifromleft() {
    frmAnifromleft.add();
};

function frmAnifromleftGlobals() {
    frmAnifromleft = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnifromleft,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAnifromleft",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "from left"
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
    frmAnifromleft.info = {
        "kuid": "p2kwiet1288931495163"
    };
};