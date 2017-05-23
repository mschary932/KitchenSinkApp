function addWidgetsfrmAniWinRotate3DDual() {
    frmAniWinRotate3DDual.add();
};

function frmAniWinRotate3DDualGlobals() {
    frmAniWinRotate3DDual = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniWinRotate3DDual,
        "enabledForIdleTimeout": false,
        "headers": [hBoxTitle],
        "id": "frmAniWinRotate3DDual",
        "needAppMenu": true,
        "preShow": p2kwiet1288931495240_frmAniWinRotate3DDual_preshow_seq0,
        "skin": "frmAniSkin",
        "title": "Rotate3DDual"
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
    frmAniWinRotate3DDual.info = {
        "kuid": "p2kwiet1288931495240"
    };
};