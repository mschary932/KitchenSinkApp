function addWidgetsfrmAniMoveInFromTop() {
    frmAniMoveInFromTop.add();
};

function frmAniMoveInFromTopGlobals() {
    frmAniMoveInFromTop = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniMoveInFromTop,
        "enabledForIdleTimeout": false,
        "id": "frmAniMoveInFromTop",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "MoveInFromTop"
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
    frmAniMoveInFromTop.info = {
        "kuid": "p2kwiet1288931495180"
    };
};