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
        "inTransitionConfig": {
            "formTransition": "none"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        },
        "retainScrollPosition": false
    });
    frmAniCloth.info = {
        "kuid": "p2kwiet1288931495132"
    };
};