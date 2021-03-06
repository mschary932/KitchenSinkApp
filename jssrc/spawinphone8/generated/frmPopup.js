function addWidgetsfrmPopup() {
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
        "text": "Popup"
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
    var label1927359800105346 = new kony.ui.Label({
        "id": "label1927359800105346",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Click the below button to observe the Popup anchoring from bottom of the form"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 12, 6, 12],
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
    });
    var label1042716061159611 = new kony.ui.Label({
        "id": "label1042716061159611",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Click the below button to observe the Popup"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
    });
    var btnShowPopup = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnShowPopup",
        "isVisible": true,
        "onClick": p2kwiet12889314951904_btnShowPopup_onClick_seq0,
        "skin": "btnNormal",
        "text": "Click here"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmPopup.add(hbox103994549623663, label1927359800105346, label1042716061159611, btnShowPopup);
};

function frmPopupGlobals() {
    frmPopup = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmPopup,
        "enabledForIdleTimeout": false,
        "id": "frmPopup",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Popup"
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
    frmPopup.info = {
        "kuid": "p2kwiet12889314951904"
    };
};