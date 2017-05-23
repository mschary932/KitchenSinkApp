function addWidgetsfrmRdo() {
    var hbox103994549623663 = new kony.ui.Box({
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
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label103994549623664 = new kony.ui.Label({
        "id": "label103994549623664",
        "isVisible": true,
        "skin": "headLabel",
        "text": "Radio button"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "marginInPixel": false,
        "padding": [1, 2, 1, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    hbox103994549623663.add(label103994549623664);
    var label121049260349 = new kony.ui.Label({
        "id": "label121049260349",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Default view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [2, 4, 2, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "renderAsAnchor": false,
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
        "margin": [4, 2, 4, 2],
        "marginInPixel": false,
        "padding": [2, 2, 2, 2],
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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [2, 4, 2, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "renderAsAnchor": false,
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
        "margin": [4, 2, 4, 2],
        "marginInPixel": false,
        "padding": [2, 2, 2, 2],
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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [2, 4, 2, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "renderAsAnchor": false,
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
        "margin": [4, 2, 4, 2],
        "marginInPixel": false,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    frmRdo.add(hbox103994549623663, label121049260349, radiobuttongroup121049260350, label117989725237919, radiobuttongroup117989725237929, label117989725237939, radiobuttongroup117989725237949);
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
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "inTransitionConfig": {
            "formTransition": "leftCenter"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        },
        "retainScrollPosition": false
    });
    frmRdo.info = {
        "kuid": "p2kwiet12889314951930"
    };
};