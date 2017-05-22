function addWidgetsfrmAniWinPop() {
    frmAniWinPop.add();
};

function frmAniWinPopGlobals() {
    frmAniWinPop = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniWinPop,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmAniWinPop",
        "needAppMenu": true,
        "preShow": p2kwiet974599865237_frmAniWinPop_preshow_seq0,
        "skin": "frmAniSkin",
        "title": "Pop"
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
    frmAniWinPop.info = {
        "kuid": "p2kwiet974599865237"
    };
};