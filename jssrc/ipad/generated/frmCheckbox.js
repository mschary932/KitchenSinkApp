function addWidgetsfrmCheckbox() {
    var hbxCheckBoxes = new kony.ui.Box({
        "id": "hbxCheckBoxes",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox192926642422365 = new kony.ui.Box({
        "id": "vbox192926642422365",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label11798972525642 = new kony.ui.Label({
        "id": "label11798972525642",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Default view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var checkboxgroup11798972524954 = new kony.ui.CheckBoxGroup({
        "focusSkin": "cbxNormal",
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
        "margin": [2, 2, 5, 2],
        "marginInPixel": false,
        "padding": [15, 12, 0, 12],
        "paddingInPixel": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "groupCells": false,
        "viewType": constants.CHECKBOX_VIEW_TYPE_ONOFFSWITCH
    });
    var label11798972525660 = new kony.ui.Label({
        "id": "label11798972525660",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Table view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
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
        "margin": [2, 2, 5, 2],
        "marginInPixel": false,
        "padding": [0, 12, 0, 12],
        "paddingInPixel": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "groupCells": false,
        "viewType": constants.CHECKBOX_VIEW_TYPE_TABLEVIEW
    });
    var label11798972525724 = new kony.ui.Label({
        "id": "label11798972525724",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "OnScreenWheel view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
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
        "margin": [2, 2, 5, 2],
        "marginInPixel": false,
        "padding": [2, 1, 1, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "groupCells": false,
        "viewType": constants.CHECKBOX_VIEW_TYPE_ONSCREENWHEEL
    });
    var label1041881913186981 = new kony.ui.Label({
        "id": "label1041881913186981",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Checkbox with Ticked and Unticked image"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var checkboxgroup192914726024080 = new kony.ui.CheckBoxGroup({
        "focusSkin": "cbxNormal",
        "id": "checkboxgroup192914726024080",
        "isVisible": true,
        "masterData": [
            ["key1", "Value1"],
            ["key2", "Value2"],
            ["key3", "Value3"]
        ],
        "selectedKeys": ["key1"],
        "skin": "cbxNormal"
    }, {
        "containerWeight": 100,
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "margin": [2, 2, 5, 2],
        "marginInPixel": false,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "groupCells": false,
        "tickedImage": "chkboxchkd.png",
        "untickedImage": "chkbox.png",
        "viewType": constants.CHECKBOX_VIEW_TYPE_TABLEVIEW
    });
    vbox192926642422365.add(label11798972525642, checkboxgroup11798972524954, label11798972525660, checkboxgroup11798972525580, label11798972525724, checkboxgroup11798972525616, label1041881913186981, checkboxgroup192914726024080);
    hbxCheckBoxes.add(vbox192926642422365);
    frmCheckbox.add(hbxCheckBoxes);
};

function frmCheckboxGlobals() {
    frmCheckbox = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCheckbox,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmCheckbox",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Checkbox"
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
};