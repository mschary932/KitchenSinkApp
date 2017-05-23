function addWidgetsfrmAniReveal() {
    frmAniReveal.add();
};

function frmAniRevealGlobals() {
    frmAniReveal = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniReveal,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAniReveal",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "Reveal"
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
    frmAniReveal.info = {
        "kuid": "p2kwiet1288931495188"
    };
};