function addWidgetsfrmAnitop() {
    frmAnitop.add();
};

function frmAnitopGlobals() {
    frmAnitop = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnitop,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAnitop",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "top"
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
    frmAnitop.info = {
        "kuid": "p2kwiet1288931495219"
    };
};