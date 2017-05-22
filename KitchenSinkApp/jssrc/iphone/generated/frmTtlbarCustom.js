function addWidgetsfrmTtlbarCustom() {
    var labeltitleBack2 = new kony.ui.Label({
        "id": "labeltitleBack2",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Look at the customized look of titlebar ( with background image and custom left/right buttons ) above."
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 7, 6, 6],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    frmTtlbarCustom.add(labeltitleBack2);
};

function frmTtlbarCustomGlobals() {
    frmTtlbarCustom = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTtlbarCustom,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmTtlbarCustom",
        "needAppMenu": true,
        "skin": "frm"
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
        "titleBar": true,
        "titleBarBackGroundImage": "konylogo4.png",
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "button",
            "closureLeftSideView": titleBar,
            "labelLeftSideView": "Home",
            "imageLeftSideView": "greenbtn50x30.png",
            "titleBarRightSideView": "button",
            "closureRightSideView": titleBar,
            "labelRightSideView": "Previous",
            "imageRightSideView": "greenbtn50x30.png"
        }
    });
    frmTtlbarCustom.info = {
        "kuid": "p2kwiet9745998653186"
    };
};