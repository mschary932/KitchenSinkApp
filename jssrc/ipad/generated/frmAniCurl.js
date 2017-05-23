function addWidgetsfrmAniCurl() {
    frmAniCurl.add();
};

function frmAniCurlGlobals() {
    frmAniCurl = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniCurl,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmAniCurl",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "Curl"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
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
            "transitionDirection": "fromTop",
            "transitionEffect": "transitionCurl"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "fromBottom",
            "transitionEffect": "transitionCurl"
        },
        "retainScrollPosition": false,
        "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "title",
            "closureLeftSideView": goToFrmAni,
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "none"
        },
        "titleBarSkin": "sknTitleBarSampleApp"
    });
    frmAniCurl.info = {
        "kuid": "p2kwiet12889314953416"
    };
};