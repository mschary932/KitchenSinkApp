function addWidgetsfrmAniMoveIn() {
    frmAniMoveIn.add();
};

function frmAniMoveInGlobals() {
    frmAniMoveIn = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniMoveIn,
        "enabledForIdleTimeout": false,
        "id": "frmAniMoveIn",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "MoveIn"
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
    frmAniMoveIn.info = {
        "kuid": "p2kwiet12889314953469"
    };
};