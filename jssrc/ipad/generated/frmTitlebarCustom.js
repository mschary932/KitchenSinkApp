function addWidgetsfrmTitlebarCustom() {
    var label1178139583100982 = new kony.ui.Label({
        "id": "label1178139583100982",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Look at the customized look of titlebar ( with background image and custom left/right buttons ) above."
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    frmTitlebarCustom.add(label1178139583100982);
};

function frmTitlebarCustomGlobals() {
    frmTitlebarCustom = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTitlebarCustom,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmTitlebarCustom",
        "needAppMenu": true,
        "skin": "frm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
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
        "titleBar": true,
        "titleBarBackGroundImage": "konylogo4.png",
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "button",
            "closureLeftSideView": titleBar,
            "labelLeftSideView": "Options",
            "imageLeftSideView": "greenbtn50x30.png",
            "titleBarRightSideView": "button",
            "closureRightSideView": titleBar,
            "labelRightSideView": "Previous",
            "imageRightSideView": "greenbtn50x30.png"
        }
    });
    frmTitlebarCustom.info = {
        "kuid": "p2kwiet12889314954870"
    };
};