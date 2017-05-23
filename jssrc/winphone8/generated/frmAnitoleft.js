function addWidgetsfrmAnitoleft() {
    frmAnitoleft.add();
};

function frmAnitoleftGlobals() {
    frmAnitoleft = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnitoleft,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAnitoleft",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "to left"
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
    frmAnitoleft.info = {
        "kuid": "p2kwiet1288931495216"
    };
};