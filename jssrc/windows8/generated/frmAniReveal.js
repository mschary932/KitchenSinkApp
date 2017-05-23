function addWidgetsfrmAniReveal() {
    frmAniReveal.add();
};

function frmAniRevealGlobals() {
    frmAniReveal = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniReveal,
        "enabledForIdleTimeout": false,
        "id": "frmAniReveal",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "Reveal"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
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
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp"
    });
    frmAniReveal.info = {
        "kuid": "p2kwiet12889314953485"
    };
};