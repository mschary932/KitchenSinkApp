function addWidgetsfrmAniFlipLeft() {
    frmAniFlipLeft.add();
};

function frmAniFlipLeftGlobals() {
    frmAniFlipLeft = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniFlipLeft,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAniFlipLeft",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "FlipLeft"
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
    frmAniFlipLeft.info = {
        "kuid": "p2kwiet1288931495152"
    };
};