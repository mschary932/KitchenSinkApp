function addWidgetsfrmChk() {
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
        "text": "Checkbox"
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
    var label11798972525642 = new kony.ui.Label({
        "enableCache": false,
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
    }, {});
    var checkboxgroup11798972524954 = new kony.ui.CheckBoxGroup({
        "enableCache": false,
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
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "tickedImage": "chkboxchkd.png",
        "untickedImage": "chkbox.png"
    });
    var label1041881913186981 = new kony.ui.Label({
        "enableCache": false,
        "id": "label1041881913186981",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Checkbox with Ticked and Unticked image"
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
    var checkboxgroup117989725237806 = new kony.ui.CheckBoxGroup({
        "enableCache": false,
        "focusSkin": "checkBoxBack",
        "id": "checkboxgroup117989725237806",
        "isVisible": true,
        "masterData": [
            ["1", "value1"],
            ["2", "value2"],
            ["3", "value3"]
        ],
        "selectedKeys": ["1"],
        "skin": "checkBoxBack"
    }, {
        "containerWeight": 100,
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "tickedImage": "chkboxchkd.png",
        "untickedImage": "chkbox.png"
    });
    var label117989725237860 = new kony.ui.Label({
        "enableCache": false,
        "id": "label117989725237860",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Horizontal orientation"
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
    var checkboxgroup117989725237870 = new kony.ui.CheckBoxGroup({
        "enableCache": false,
        "focusSkin": "cbxFocus",
        "id": "checkboxgroup117989725237870",
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
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_HORIZONTAL,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "tickedImage": "chkboxchkd.png",
        "untickedImage": "chkbox.png"
    });
    frmChk.add(hbox103994549623663, label11798972525642, checkboxgroup11798972524954, label1041881913186981, checkboxgroup117989725237806, label117989725237860, checkboxgroup117989725237870);
};

function frmChkGlobals() {
    frmChk = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmChk,
        "enableCache": false,
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
        "animateHeaderFooter": false,
        "directChildrenIDs": ["checkboxgroup117989725237806", "checkboxgroup117989725237870", "checkboxgroup11798972524954", "checkboxgroup11798972525580", "checkboxgroup11798972525616", "hbox103994549623663", "label103994549623664", "label1041881913186981", "label117989725237860", "label11798972525642", "label11798972525660", "label11798972525724"],
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
    frmChk.info = {
        "kuid": "p2kwiet1288931495625"
    };
};