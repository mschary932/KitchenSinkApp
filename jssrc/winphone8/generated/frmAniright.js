function addWidgetsfrmAniright() {
    frmAniright.add();
};

function frmAnirightGlobals() {
    frmAniright = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniright,
        "enableCache": false,
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
            "transitionSpeed": 0
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "transitionSpeed": 0
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmAniright.info = {
        "kuid": "p2kwiet1288931495192"
    };
};