function addWidgetsfrmAni2SplitVerticalIn() {
    frmAni2SplitVerticalIn.add();
};

function frmAni2SplitVerticalInGlobals() {
    frmAni2SplitVerticalIn = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAni2SplitVerticalIn,
        "enabledForIdleTimeout": false,
        "id": "frmAni2SplitVerticalIn",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "2SplitVerticalIn"
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
    frmAni2SplitVerticalIn.info = {
        "kuid": "p2kwiet128893149589"
    };
};