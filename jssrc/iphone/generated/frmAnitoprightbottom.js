function addWidgetsfrmAnitoprightbottom() {
    frmAnitoprightbottom.add();
};

function frmAnitoprightbottomGlobals() {
    frmAnitoprightbottom = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnitoprightbottom,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmAnitoprightbottom",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "topright-bottom"
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
    frmAnitoprightbottom.info = {
        "kuid": "p2kwiet1288931495222"
    };
};