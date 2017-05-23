function addWidgetsfrmAniCloth() {
    frmAniCloth.add();
};

function frmAniClothGlobals() {
    frmAniCloth = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniCloth,
        "enabledForIdleTimeout": false,
        "id": "frmAniCloth",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "Cloth"
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
    frmAniCloth.info = {
        "kuid": "p2kwiet12889314953412"
    };
};