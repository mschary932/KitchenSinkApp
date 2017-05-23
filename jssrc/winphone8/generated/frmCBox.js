function addWidgetsfrmCBox() {
    var hbox103994549623663 = new kony.ui.Box({
        "enableCache": false,
        "focusSkin": "headBox",
        "id": "hbox103994549623663",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "headBox"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label103994549623664 = new kony.ui.Label({
        "enableCache": false,
        "id": "label103994549623664",
        "isVisible": true,
        "skin": "headLabel",
        "text": "Combobox"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox103994549623663.add(label103994549623664);
    var label118082077326819 = new kony.ui.Label({
        "enableCache": false,
        "id": "label118082077326819",
        "isVisible": true,
        "skin": "lblSub",
        "text": "List view"
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
    }, {});
    var combobox11798972524560 = new kony.ui.ComboBox({
        "enableCache": false,
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
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW
    });
    var label118082077327153 = new kony.ui.Label({
        "enableCache": false,
        "id": "label118082077327153",
        "isVisible": true,
        "skin": "lblSub",
        "text": "ComboBox with image background"
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
    }, {});
    var combobox118082077327167 = new kony.ui.ComboBox({
        "enableCache": false,
        "focusSkin": "comboBoxImg",
        "id": "combobox118082077327167",
        "isVisible": true,
        "masterData": [
            ["1", "value1"],
            ["2", "value2"],
            ["3", "value3"],
            ["4", "value4"],
            ["5", "value5"]
        ],
        "skin": "comboBoxImg"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW
    });
    frmCBox.add(hbox103994549623663, label118082077326819, combobox11798972524560, label118082077327153, combobox118082077327167);
};

function frmCBoxGlobals() {
    frmCBox = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCBox,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmCBox",
        "needAppMenu": true,
        "skin": "frm",
        "title": "ComboBox"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["combobox1042716061159707", "combobox11798972524560", "combobox118082077326843", "combobox118082077326861", "combobox118082077326881", "combobox118082077326897", "combobox118082077326917", "combobox118082077327167", "hbox103994549623663", "label103994549623664", "label1042716061159691", "label1042716061159768", "label118082077326819", "label118082077326835", "label118082077326853", "label118082077326871", "label118082077326889", "label118082077326907", "label118082077327153"],
        "inTransitionConfig": {
            "transitionSpeed": 0
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "transitionSpeed": 0
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmCBox.info = {
        "kuid": "p2kwiet1288931495610"
    };
};