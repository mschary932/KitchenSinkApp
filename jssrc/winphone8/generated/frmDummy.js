function addWidgetsfrmDummy() {
    frmDummy.add();
};

function frmDummyGlobals() {
    frmDummy = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDummy,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmDummy",
        "needAppMenu": true,
        "postShow": p2kwiet1288931495940_frmDummy_postshow_seq0,
        "skin": "frmSknTrans"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
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
    frmDummy.info = {
        "kuid": "p2kwiet1288931495940"
    };
};