function addWidgetsfrmAniWinRotate3DDual() {
    frmAniWinRotate3DDual.add();
};

function frmAniWinRotate3DDualGlobals() {
    frmAniWinRotate3DDual = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniWinRotate3DDual,
        "enabledForIdleTimeout": false,
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
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "titleBar": true,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmAniWinRotate3DDual.info = {
        "kuid": "p2kwiet1288931495240"
    };
};