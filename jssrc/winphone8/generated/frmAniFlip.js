function addWidgetsfrmAniFlip() {
    frmAniFlip.add();
};

function frmAniFlipGlobals() {
    frmAniFlip = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniFlip,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAniFlip",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "Flip"
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
    frmAniFlip.info = {
        "kuid": "p2kwiet1288931495148"
    };
};