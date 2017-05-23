function addWidgetsfrmDummy() {
    frmDummy.add();
};

function frmDummyGlobals() {
    frmDummy = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDummy,
        "enabledForIdleTimeout": false,
        "id": "frmDummy",
        "needAppMenu": true,
        "postShow": p2kwiet1288931495940_frmDummy_postshow_seq0,
        "skin": "frmSknTrans"
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
        "kuid": "p2kwiet1288931495940"
    };
};