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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var label117989725237939 = new kony.ui.Label({
        "id": "label117989725237939",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Vertical orientation"
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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    vbox192926642422365.add(label121049260349, radiobuttongroup121049260350, label117989725237919, radiobuttongroup117989725237929, label117989725237939, radiobuttongroup117989725237949);
    hbxRadioButtons.add(vbox192926642422365);
    frmRadioButton.add(hbxRadioButtons);
};

function frmRadioButtonGlobals() {
    frmRadioButton = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmRadioButton,
        "enabledForIdleTimeout": false,
        "id": "frmRadioButton",
        "needAppMenu": true,
        "skin": "frm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "inTransitionConfig": {
            "formTransition": "none"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        },
        "retainScrollPosition": false
    });
    frmRadioButton.info = {
        "kuid": "p2kwiet12889314954260"
    };
};