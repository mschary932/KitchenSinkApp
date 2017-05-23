function addWidgetsfrmAniFlip() {
    frmAniFlip.add();
};

function frmAniFlipGlobals() {
    frmAniFlip = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniFlip,
        "enabledForIdleTimeout": false,
        "id": "frmAniFlip",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "Flip"
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
    frmAniFlip.info = {
        "kuid": "p2kwiet1288931495148"
    };
};