function addWidgetsfrmSegmentMoreFeatures() {
    var button11782289566537 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button11782289566537",
        "isVisible": true,
        "onClick": p2kwiet12889314952571_button11782289566537_onClick_seq0,
        "skin": "btnNormal",
        "text": "Icon edit style"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 12, 12, 6],
        "marginInPixel": true,
        "padding": [3, 13, 3, 13],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button11782289566543 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button11782289566543",
        "isVisible": true,
        "onClick": p2kwiet12889314952571_button11782289566543_onClick_seq0,
        "skin": "btnNormal",
        "text": "Swipe to delete"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [3, 13, 3, 13],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button11782289566549 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button11782289566549",
        "isVisible": true,
        "onClick": p2kwiet12889314952571_button11782289566549_onClick_seq0,
        "skin": "btnNormal",
        "text": "Pull to refresh"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [3, 13, 3, 13],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button15633488264683 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button15633488264683",
        "isVisible": true,
        "onClick": p2kwiet12889314952571_button15633488264683_onClick_seq0,
        "skin": "btnNormal",
        "text": "On reach end"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [3, 13, 3, 13],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    frmSegmentMoreFeatures.add(button11782289566537, button11782289566543, button11782289566549, button15633488264683);
};

function frmSegmentMoreFeaturesGlobals() {
    frmSegmentMoreFeatures = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegmentMoreFeatures,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmSegmentMoreFeatures",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Segment"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
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
                "labelLeftSideView": "Back"
            }],
            "rightBarButtonItems": []
        },
        "titleBarSkin": "sknTitleBarSampleApp"
    });
};