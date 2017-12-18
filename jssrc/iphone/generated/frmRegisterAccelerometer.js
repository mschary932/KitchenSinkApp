function addWidgetsfrmRegisterAccelerometer() {
    var hbox1927359800121824 = new kony.ui.Box({
        "id": "hbox1927359800121824",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [6, 12, 6, 6],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblEvent2 = new kony.ui.Label({
        "id": "lblEvent2",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    hbox1927359800121824.add(lblEvent2);
    var hbox10446524724681 = new kony.ui.Box({
        "id": "hbox10446524724681",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [6, 12, 6, 6],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblEvent1 = new kony.ui.Label({
        "id": "lblEvent1",
        "isVisible": true,
        "skin": "lblSub",
        "text": "No of times device shaked:"
    }, {
        "containerWeight": 82,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblEvent3 = new kony.ui.Label({
        "id": "lblEvent3",
        "isVisible": true,
        "skin": "lblSub",
        "text": "0"
    }, {
        "containerWeight": 18,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    hbox10446524724681.add(lblEvent1, lblEvent3);
    frmRegisterAccelerometer.add(hbox1927359800121824, hbox10446524724681);
};

function frmRegisterAccelerometerGlobals() {
    frmRegisterAccelerometer = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmRegisterAccelerometer,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmRegisterAccelerometer",
        "needAppMenu": true,
        "onHide": p2kwiet12889314951944_frmRegisterAccelerometer_onhide_seq0,
        "title": "Accelerometer"
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
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "button",
            "closureLeftSideView": unRegisterAccEvent,
            "labelLeftSideView": "Back",
            "imageLeftSideView": "back1.png",
            "titleBarRightSideView": "none"
        },
        "titleBarSkin": "sknTitleBarSampleApp"
    });
};