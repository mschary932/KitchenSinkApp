function addWidgetsfrmContact() {
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
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label103994549623664 = new kony.ui.Label({
        "id": "label103994549623664",
        "isVisible": true,
        "skin": "headLabel",
        "text": "Address book"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
    });
    hbox103994549623663.add(label103994549623664);
    var button1930040990148062 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1930040990148062",
        "isVisible": true,
        "onClick": p2kwiet1288931495721_button1930040990148062_onClick_seq0,
        "skin": "btnNormal",
        "text": "Add contact"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button1930040990148072 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1930040990148072",
        "isVisible": true,
        "onClick": p2kwiet1288931495721_button1930040990148072_onClick_seq0,
        "skin": "btnNormal",
        "text": "Find contact"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button1930040990148078 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1930040990148078",
        "isVisible": true,
        "onClick": p2kwiet1288931495721_button1930040990148078_onClick_seq0,
        "skin": "btnNormal",
        "text": "Remove contact"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblDevContact = new kony.ui.Label({
        "id": "lblDevContact",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
    });
    frmContact.add(hbox103994549623663, button1930040990148062, button1930040990148072, button1930040990148078, lblDevContact);
};

function frmContactGlobals() {
    frmContact = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmContact,
        "enabledForIdleTimeout": false,
        "id": "frmContact",
        "needAppMenu": true,
        "preShow": p2kwiet1288931495721_frmContact_preshow_seq0,
        "skin": "frm",
        "title": "Address book"
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
    frmContact.info = {
        "kuid": "p2kwiet1288931495721"
    };
};