function addWidgetsfrmRadioButton() {
    var hbxRadioButtons = new kony.ui.Box({
        "id": "hbxRadioButtons",
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
    var label121049260349 = new kony.ui.Label({
        "id": "label121049260349",
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
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var radiobuttongroup121049260350 = new kony.ui.RadioButtonGroup({
        "focusSkin": "radioFocus",
        "id": "radiobuttongroup121049260350",
        "isVisible": true,
        "masterData": [
            ["Key1", "Value1"],
            ["Key2", "Value2"]
        ],
        "skin": "radioNormal"
    }, {
        "containerWeight": 100,
        "hExpand": true,
        "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_HORIZONTAL,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "groupCells": false,
        "viewConfig": {
            "toggleViewConfig": {
                "enableTintColor": false,
                "equalSegments": true,
                "viewStyle": constants.RADIOGROUP_TOGGLE_VIEW_STYLE_PLAIN
            }
        },
        "viewType": constants.RADIOGROUP_VIEW_TYPE_LISTVIEW
    });
    var label118082077326502 = new kony.ui.Label({
        "id": "label118082077326502",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Radiobutton with table view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var radiobuttongroup118082077326512 = new kony.ui.RadioButtonGroup({
        "focusSkin": "radioNormal",
        "id": "radiobuttongroup118082077326512",
        "isVisible": true,
        "masterData": [
            ["Key1", "Value1"],
            ["Key2", "Value2"]
        ],
        "skin": "radioNormal"
    }, {
        "containerWeight": 100,
        "hExpand": true,
        "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_HORIZONTAL,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "groupCells": false,
        "viewConfig": {
            "toggleViewConfig": {
                "enableTintColor": false,
                "equalSegments": true,
                "viewStyle": constants.RADIOGROUP_TOGGLE_VIEW_STYLE_PLAIN
            }
        },
        "viewType": constants.RADIOGROUP_VIEW_TYPE_TABLEVIEW
    });
    var label118082077326522 = new kony.ui.Label({
        "id": "label118082077326522",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Radiobutton with OnScreenWheel view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var radiobuttongroup118082077326530 = new kony.ui.RadioButtonGroup({
        "focusSkin": "radioFocus",
        "id": "radiobuttongroup118082077326530",
        "isVisible": true,
        "masterData": [
            ["Key1", "Value1"],
            ["Key2", "Value2"]
        ],
        "skin": "radioNormal"
    }, {
        "containerWeight": 100,
        "hExpand": true,
        "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_HORIZONTAL,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "groupCells": false,
        "viewConfig": {
            "toggleViewConfig": {
                "enableTintColor": false,
                "equalSegments": true,
                "viewStyle": constants.RADIOGROUP_TOGGLE_VIEW_STYLE_PLAIN
            }
        },
        "viewType": constants.RADIOGROUP_VIEW_TYPE_ONSCREENWHEEL
    });
    var label118082077326540 = new kony.ui.Label({
        "id": "label118082077326540",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Radiobutton with Toggle view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var radiobuttongroup118082077326558 = new kony.ui.RadioButtonGroup({
        "focusSkin": "radioFocus",
        "id": "radiobuttongroup118082077326558",
        "isVisible": true,
        "masterData": [
            ["Key1", "Value1"],
            ["Key2", "Value2"]
        ],
        "skin": "radioNormal"
    }, {
        "containerWeight": 100,
        "hExpand": true,
        "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_HORIZONTAL,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "groupCells": false,
        "viewConfig": {
            "toggleViewConfig": {
                "enableTintColor": false,
                "equalSegments": true,
                "viewStyle": constants.RADIOGROUP_TOGGLE_VIEW_STYLE_PLAIN
            }
        },
        "viewType": constants.RADIOGROUP_VIEW_TYPE_TOGGLEVIEW
    });
    var label117989725237919 = new kony.ui.Label({
        "id": "label117989725237919",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Radiobutton with background color"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var radiobuttongroup117989725237929 = new kony.ui.RadioButtonGroup({
        "focusSkin": "rdbColorBG",
        "id": "radiobuttongroup117989725237929",
        "isVisible": true,
        "masterData": [
            ["Key1", "Value1"],
            ["Key2", "Value2"]
        ],
        "skin": "rdbColorBG"
    }, {
        "containerWeight": 100,
        "hExpand": true,
        "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_HORIZONTAL,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "groupCells": false,
        "viewConfig": {
            "toggleViewConfig": {
                "enableTintColor": false,
                "equalSegments": true,
                "viewStyle": constants.RADIOGROUP_TOGGLE_VIEW_STYLE_PLAIN
            }
        },
        "viewType": constants.RADIOGROUP_VIEW_TYPE_TABLEVIEW
    });
    var label1180105789135976 = new kony.ui.Label({
        "id": "label1180105789135976",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Ticked and unticked images"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var radiobuttongroup1180105789136012 = new kony.ui.RadioButtonGroup({
        "focusSkin": "radioNormal",
        "id": "radiobuttongroup1180105789136012",
        "isVisible": true,
        "masterData": [
            ["Key1", "Value1"],
            ["Key2", "Value2"]
        ],
        "skin": "radioNormal"
    }, {
        "containerWeight": 100,
        "hExpand": true,
        "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_HORIZONTAL,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "groupCells": false,
        "tickedImage": "radiobtnchkd.png",
        "untickedImage": "radiobtn.png",
        "viewConfig": {
            "toggleViewConfig": {
                "enableTintColor": false,
                "equalSegments": true,
                "viewStyle": constants.RADIOGROUP_TOGGLE_VIEW_STYLE_PLAIN
            }
        },
        "viewType": constants.RADIOGROUP_VIEW_TYPE_TABLEVIEW
    });
    vbox192926642422365.add(label121049260349, radiobuttongroup121049260350, label118082077326502, radiobuttongroup118082077326512, label118082077326522, radiobuttongroup118082077326530, label118082077326540, radiobuttongroup118082077326558, label117989725237919, radiobuttongroup117989725237929, label1180105789135976, radiobuttongroup1180105789136012);
    hbxRadioButtons.add(vbox192926642422365);
    frmRadioButton.add(hbxRadioButtons);
};

function frmRadioButtonGlobals() {
    frmRadioButton = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmRadioButton,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmRadioButton",
        "needAppMenu": true,
        "skin": "frm"
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
    frmRadioButton.info = {
        "kuid": "p2kwiet9745998654260"
    };
};