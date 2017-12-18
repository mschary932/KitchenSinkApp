function addWidgetsfrmAniWinRotate3DDual() {
    frmAniWinRotate3DDual.add();
};

function frmAniWinRotate3DDualGlobals() {
    frmAniWinRotate3DDual = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniWinRotate3DDual,
        "bounces": true,
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
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "extendBottom": false,
        "extendTop": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": 100,
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "retainScrollPosition": false,
        "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
        "titleBar": true
    });
};