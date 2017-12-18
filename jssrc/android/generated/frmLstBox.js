function addWidgetsfrmLstBox() {
    var label118082077326662 = new kony.ui.Label({
        "id": "label118082077326662",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Default view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var listbox11798972524359 = new kony.ui.ListBox({
        "focusSkin": "listFoc",
        "id": "listbox11798972524359",
        "isVisible": true,
        "masterData": [
            ["1", "value1"],
            ["2", "value2"],
            ["3", "value3"],
            ["4", "value4"],
            ["5", "value5"]
        ],
        "selectedKey": "1",
        "selectedKeyValue": ["1", "value1"],
        "skin": "listNor"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "applySkinsToPopup": true,
        "popupTitle": "Please Select",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var label118082077326799 = new kony.ui.Label({
        "id": "label118082077326799",
        "isVisible": true,
        "skin": "lblSub",
        "text": "List Box with Image background"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var listbox118082077326807 = new kony.ui.ListBox({
        "focusSkin": "ListBoxImg",
        "id": "listbox118082077326807",
        "isVisible": true,
        "masterData": [
            ["1", "value1"],
            ["2", "value2"],
            ["3", "value3"],
            ["4", "value4"],
            ["5", "value5"]
        ],
        "selectedKey": "1",
        "selectedKeyValue": ["1", "value1"],
        "skin": "ListBoxImg"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "applySkinsToPopup": true,
        "dropDownImage": "dropdown.png",
        "popupTitle": "Please Select",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var label117989725236234 = new kony.ui.Label({
        "id": "label117989725236234",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Toggle view Spinner view style"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var listbox117989725236244 = new kony.ui.ListBox({
        "focusSkin": "listFoc",
        "id": "listbox117989725236244",
        "isVisible": true,
        "masterData": [
            ["1", "value1"],
            ["2", "value2"],
            ["3", "value3"],
            ["4", "value4"],
            ["5", "value5"]
        ],
        "selectedKey": "1",
        "selectedKeyValue": ["1", "value1"],
        "skin": "listNor"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "applySkinsToPopup": true,
        "popupTitle": "Please Select",
        "viewType": constants.LISTBOX_VIEW_TYPE_SPINNER
    });
    frmLstBox.add(label118082077326662, listbox11798972524359, label118082077326799, listbox118082077326807, label117989725236234, listbox117989725236244);
};

function frmLstBoxGlobals() {
    frmLstBox = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLstBox,
        "enabledForIdleTimeout": false,
        "id": "frmLstBox",
        "needAppMenu": true,
        "skin": "frm",
        "title": "List Box"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "titleBarAndroid",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};