function addWidgetsfrmChk() {
    var label11798972525642 = new kony.ui.Label({
        "id": "label11798972525642",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Default view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 12, 6, 6],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var checkboxgroup11798972524954 = new kony.ui.CheckBoxGroup({
        "focusSkin": "cbxFocus",
        "id": "checkboxgroup11798972524954",
        "isVisible": true,
        "masterData": [
            ["1", "value1"],
            ["2", "value2"],
            ["3", "value3"]
        ],
        "selectedKeys": ["1"],
        "skin": "cbxNormal"
    }, {
        "containerWeight": 100,
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "margin": [6, 6, 12, 6],
        "marginInPixel": true,
        "padding": [3, 1, 0, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "groupCells": false,
        "viewType": constants.CHECKBOX_VIEW_TYPE_ONOFFSWITCH
    });
    var label11798972525660 = new kony.ui.Label({
        "id": "label11798972525660",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Table view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var checkboxgroup11798972525580 = new kony.ui.CheckBoxGroup({
        "focusSkin": "cbxNormal",
        "id": "checkboxgroup11798972525580",
        "isVisible": true,
        "masterData": [
            ["1", "value1"],
            ["2", "value2"],
            ["3", "value3"]
        ],
        "selectedKeys": ["1"],
        "skin": "cbxNormal"
    }, {
        "containerWeight": 100,
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "margin": [6, 6, 12, 6],
        "marginInPixel": true,
        "padding": [4, 0, 0, 0],
        "paddingInPixel": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "groupCells": true,
        "tickedImage": "chkboxchkd.png",
        "untickedImage": "chkbox.png",
        "viewType": constants.CHECKBOX_VIEW_TYPE_TABLEVIEW
    });
    var label11798972525724 = new kony.ui.Label({
        "id": "label11798972525724",
        "isVisible": true,
        "skin": "lblSub",
        "text": "OnScreenWheel view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var checkboxgroup11798972525616 = new kony.ui.CheckBoxGroup({
        "focusSkin": "cbxFocus",
        "id": "checkboxgroup11798972525616",
        "isVisible": true,
        "masterData": [
            ["1", "value1"],
            ["2", "value2"],
            ["3", "value3"]
        ],
        "selectedKeys": ["1"],
        "skin": "cbxNormal"
    }, {
        "containerWeight": 100,
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "margin": [18, 6, 20, 6],
        "marginInPixel": true,
        "padding": [4, 0, 0, 0],
        "paddingInPixel": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "groupCells": false,
        "tickedImage": "chkboxchkd.png",
        "untickedImage": "chkbox.png",
        "viewType": constants.CHECKBOX_VIEW_TYPE_ONSCREENWHEEL
    });
    frmChk.add(label11798972525642, checkboxgroup11798972524954, label11798972525660, checkboxgroup11798972525580, label11798972525724, checkboxgroup11798972525616);
};

function frmChkGlobals() {
    frmChk = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmChk,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmChk",
        "needAppMenu": true,
        "skin": "frm",
        "title": "CheckBox"
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
            "titleBarLeftSideView": "title",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "none"
        },
        "titleBarSkin": "sknTitleBarSampleApp"
    });
};