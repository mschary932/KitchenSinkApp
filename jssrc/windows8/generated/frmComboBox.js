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
    }, {});
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
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW
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
    }, {});
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
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW
    });
    vbox192926642422365.add(label1042716061159768, combobox11798972524560, label1042716061159691, combobox1042716061159707);
    hbxComboBoxes.add(vbox192926642422365);
    frmComboBox.add(hbxComboBoxes);
};

function frmComboBoxGlobals() {
    frmComboBox = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmComboBox,
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
        "animateHeaderFooter": false,
        "directChildrenIDs": ["combobox1042716061159707", "combobox11798972524560", "combobox118082077326843", "combobox118082077326861", "combobox118082077326881", "combobox118082077326897", "combobox118082077326917", "combobox118082077327167", "hbxComboBoxes", "label1042716061159691", "label1042716061159768", "label118082077326835", "label118082077326853", "label118082077326871", "label118082077326889", "label118082077326907", "label118082077327153", "vbox192926642422365"],
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "formTransition": "None"
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmComboBox.info = {
        "kuid": "p2kwiet12889314953712"
    };
};