function addWidgetsfrmAniPush() {
    frmAniPush.add();
};

function frmAniPushGlobals() {
    frmAniPush = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniPush,
        "enabledForIdleTimeout": false,
        "id": "frmAniPush",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "Push"
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
    frmAniPush.info = {
        "kuid": "p2kwiet12889314953481"
    };
};