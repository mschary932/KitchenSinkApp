function addWidgetsfrmTitlebarBgColor() {
    var label1178139583100876 = new kony.ui.Label({
        "id": "label1178139583100876",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Look at the customized look of  titlebar ( with background color ) above."
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
    frmTitlebarBgColor.add(label1178139583100876);
};

function frmTitlebarBgColorGlobals() {
    frmTitlebarBgColor = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTitlebarBgColor,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmTitlebarBgColor",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Titlebar with background color"
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
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "title",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "none"
        },
        "titleBarSkin": "titlestudio1"
    });
    frmTitlebarBgColor.info = {
        "kuid": "p2kwiet12889314954862"
    };
};