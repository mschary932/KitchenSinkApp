function addWidgetsfrmRdo() {
    var label121049260349 = new kony.ui.Label({
        "id": "label121049260349",
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
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false
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
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var label117989725237919 = new kony.ui.Label({
        "id": "label117989725237919",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Radiobutton with background color"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false
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
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var label117989725237939 = new kony.ui.Label({
        "id": "label117989725237939",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Vertical orientation"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false
    });
    var radiobuttongroup117989725237949 = new kony.ui.RadioButtonGroup({
        "focusSkin": "radioFocus",
        "id": "radiobuttongroup117989725237949",
        "isVisible": true,
        "masterData": [
            ["Key1", "Value1"],
            ["Key2", "Value2"]
        ],
        "skin": "radioNormal"
    }, {
        "containerWeight": 100,
        "hExpand": true,
        "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var label1180105789135976 = new kony.ui.Label({
        "id": "label1180105789135976",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Ticked and unticked images"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 4],
        "marginInPixel": true,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false
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
        "margin": [12, 4, 12, 4],
        "marginInPixel": true,
        "padding": [2, 3, 2, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "tickedImage": "chkboxchkd.png",
        "untickedImage": "chkbox.png"
    });
    frmRdo.add(label121049260349, radiobuttongroup121049260350, label117989725237919, radiobuttongroup117989725237929, label117989725237939, radiobuttongroup117989725237949, label1180105789135976, radiobuttongroup1180105789136012);
};

function frmRdoGlobals() {
    frmRdo = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmRdo,
        "enabledForIdleTimeout": false,
        "id": "frmRdo",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Radio Button"
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