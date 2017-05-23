function addWidgetsfrmDummy() {
    frmDummy.add();
};

function frmDummyGlobals() {
    frmDummy = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDummy,
        "enabledForIdleTimeout": false,
        "id": "frmDummy",
        "needAppMenu": true,
        "skin": "frm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
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
    frmDummy.info = {
        "kuid": "p2kwiet12889314953845"
    };
};