function addWidgetsfrmAniFlipRight() {
    frmAniFlipRight.add();
};

function frmAniFlipRightGlobals() {
    frmAniFlipRight = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniFlipRight,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAniFlipRight",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "FlipRight"
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
    frmAniFlipRight.info = {
        "kuid": "p2kwiet1288931495156"
    };
};