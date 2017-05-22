function addWidgetsfrmComboBox() {
    var hbxComboBoxes = new kony.ui.Box({
        "id": "hbxComboBoxes",
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
    var label1042716061159768 = new kony.ui.Label({
        "id": "label1042716061159768",
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
    var combobox11798972524560 = new kony.ui.ComboBox({
        "focusSkin": "cboxFocus",
        "id": "combobox11798972524560",
        "isVisible": true,
        "masterData": [
            ["1", "value1"],
            ["2", "value2"],
            ["3", "value3"],
            ["4", "value4"],
            ["5", "value5"]
        ],
        "skin": "cboxNormal"
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
        "groupCells": false,
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW
    });
    var label118082077326835 = new kony.ui.Label({
        "id": "label118082077326835",
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
    var combobox118082077326843 = new kony.ui.ComboBox({
        "focusSkin": "cBoxTableViewFoc",
        "id": "combobox118082077326843",
        "isVisible": true,
        "masterData": [
            ["1", "value1"],
            ["2", "value2"],
            ["3", "value3"],
            ["4", "value4"],
            ["5", "value5"]
        ],
        "skin": "cBoxTableView"
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
        "groupCells": false,
        "viewType": constants.COMBOBOX_VIEW_TYPE_TABLEVIEW
    });
    var label118082077326853 = new kony.ui.Label({
        "id": "label118082077326853",
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
    var combobox118082077326861 = new kony.ui.ComboBox({
        "focusSkin": "cboxFocus",
        "id": "combobox118082077326861",
        "isVisible": true,
        "masterData": [
            ["1", "value1"],
            ["2", "value2"],
            ["3", "value3"],
            ["4", "value4"],
            ["5", "value5"]
        ],
        "skin": "cboxNormal"
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
        "groupCells": false,
        "viewType": constants.COMBOBOX_VIEW_TYPE_ONSCREENWHEEL
    });
    var label118082077326871 = new kony.ui.Label({
        "id": "label118082077326871",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Toggle view"
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
    var combobox118082077326881 = new kony.ui.ComboBox({
        "focusSkin": "cboxFocus",
        "id": "combobox118082077326881",
        "isVisible": true,
        "masterData": [
            ["1", "value1"],
            ["2", "value2"],
            ["3", "value3"]
        ],
        "skin": "cboxNormal"
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
        "groupCells": false,
        "viewConfig": {
            "toggleViewConfig": {
                "enableTintColor": false,
                "equalSegments": true,
                "tintColor": "0000ff00",
                "viewStyle": constants.COMBOBOX_TOGGLE_VIEW_STYLE_PLAIN
            }
        },
        "viewType": constants.COMBOBOX_VIEW_TYPE_TOGGLEVIEW
    });
    var label118082077326889 = new kony.ui.Label({
        "id": "label118082077326889",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Toggle view bordered style"
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
    var combobox118082077326897 = new kony.ui.ComboBox({
        "focusSkin": "cboxFocus",
        "id": "combobox118082077326897",
        "isVisible": true,
        "masterData": [
            ["1", "value1"],
            ["2", "value2"],
            ["3", "value3"]
        ],
        "skin": "cboxNormal"
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
        "groupCells": false,
        "viewConfig": {
            "toggleViewConfig": {
                "enableTintColor": false,
                "equalSegments": true,
                "tintColor": "0000ff00",
                "viewStyle": constants.COMBOBOX_TOGGLE_VIEW_STYLE_BORDERED
            }
        },
        "viewType": constants.COMBOBOX_VIEW_TYPE_TOGGLEVIEW
    });
    var label118082077326907 = new kony.ui.Label({
        "id": "label118082077326907",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Toggle view bar style"
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
    var combobox118082077326917 = new kony.ui.ComboBox({
        "focusSkin": "cboxFocus",
        "id": "combobox118082077326917",
        "isVisible": true,
        "masterData": [
            ["1", "value1"],
            ["2", "value2"],
            ["3", "value3"]
        ],
        "skin": "cboxNormal"
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
        "groupCells": false,
        "viewConfig": {
            "toggleViewConfig": {
                "enableTintColor": false,
                "equalSegments": true,
                "tintColor": "0000ff00",
                "viewStyle": constants.COMBOBOX_TOGGLE_VIEW_STYLE_BAR
            }
        },
        "viewType": constants.COMBOBOX_VIEW_TYPE_TOGGLEVIEW
    });
    var label1042716061159691 = new kony.ui.Label({
        "id": "label1042716061159691",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "ComboBox with color backGround"
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
    var combobox1042716061159707 = new kony.ui.ComboBox({
        "focusSkin": "cboxColorBG",
        "id": "combobox1042716061159707",
        "isVisible": true,
        "masterData": [
            ["1", "value1"],
            ["2", "value2"],
            ["3", "value3"]
        ],
        "skin": "cboxColorBG"
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
        "groupCells": false,
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW
    });
    vbox192926642422365.add(label1042716061159768, combobox11798972524560, label118082077326835, combobox118082077326843, label118082077326853, combobox118082077326861, label118082077326871, combobox118082077326881, label118082077326889, combobox118082077326897, label118082077326907, combobox118082077326917, label1042716061159691, combobox1042716061159707);
    hbxComboBoxes.add(vbox192926642422365);
    frmComboBox.add(hbxComboBoxes);
};

function frmComboBoxGlobals() {
    frmComboBox = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmComboBox,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmComboBox",
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
    frmComboBox.info = {
        "kuid": "p2kwiet9745998653712"
    };
};