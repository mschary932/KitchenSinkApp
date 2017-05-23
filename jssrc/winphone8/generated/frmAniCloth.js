function addWidgetsfrmAniCloth() {
    frmAniCloth.add();
};

function frmAniClothGlobals() {
    frmAniCloth = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniCloth,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAniCloth",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "Cloth"
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
    frmAniCloth.info = {
        "kuid": "p2kwiet1288931495132"
    };
};