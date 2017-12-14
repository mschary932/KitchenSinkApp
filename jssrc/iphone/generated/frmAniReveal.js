function addWidgetsfrmAniReveal() {
    frmAniReveal.add();
};

function frmAniRevealGlobals() {
    frmAniReveal = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniReveal,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmAniReveal",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "Reveal"
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
            "transitionDirection": "fromLeft",
            "transitionEffect": "transitionReveal"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "fromRight",
            "transitionEffect": "transitionReveal"
        },
        "retainScrollPosition": false,
        "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
        "titleBar": true,
        "titleBarAttributes": {
            "barStyle": constants.BAR_STYLE_DEAFULT,
            "navigationBarHidden": false,
            "translucent": true,
            "tintColor": "4e4e4eff",
            "hidesBackButton": true,
            "prompt": "",
            "leftItemsSupplementBackButton": true,
            "leftBarButtonItems": [{
                "titleBarLeftSideView": "title",
                "closureLeftSideView": goToFrmAni,
                "labelLeftSideView": "Back"
            }],
            "rightBarButtonItems": []
        },
        "titleBarSkin": "sknTitleBarSampleApp"
    });
};