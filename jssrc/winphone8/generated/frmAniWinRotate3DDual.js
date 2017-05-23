function addWidgetsfrmAniWinRotate3DDual() {
    frmAniWinRotate3DDual.add();
};

function frmAniWinRotate3DDualGlobals() {
    frmAniWinRotate3DDual = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniWinRotate3DDual,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "headers": [hBoxTitle],
        "id": "frmAniWinRotate3DDual",
        "needAppMenu": true,
        "preShow": p2kwiet1288931495240_frmAniWinRotate3DDual_preshow_seq0,
        "skin": "frmAniSkin",
        "title": "Rotate3DDual"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "inTransitionConfig": {
            "inTransition": "Rotate3DDual",
            "transitionSpeed": 0
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "transitionSpeed": 0
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmAniWinRotate3DDual.info = {
        "kuid": "p2kwiet1288931495240"
    };
};