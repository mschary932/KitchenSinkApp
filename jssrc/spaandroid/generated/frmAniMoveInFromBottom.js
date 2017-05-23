function addWidgetsfrmAniMoveInFromBottom() {
    frmAniMoveInFromBottom.add();
};

function frmAniMoveInFromBottomGlobals() {
    frmAniMoveInFromBottom = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniMoveInFromBottom,
        "enabledForIdleTimeout": false,
        "id": "frmAniMoveInFromBottom",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "MoveInFromBottom"
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
    frmAniMoveInFromBottom.info = {
        "kuid": "p2kwiet1288931495176"
    };
};