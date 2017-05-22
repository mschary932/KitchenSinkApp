function addWidgetsfrmAnitop() {
    frmAnitop.add();
};

function frmAnitopGlobals() {
    frmAnitop = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnitop,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmAnitop",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "top"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
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
    frmAnitop.info = {
        "kuid": "p2kwiet9745998653507"
    };
};