function addWidgetsfrmImage() {
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
        "text": "Image"
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
    var label193382457630 = new kony.ui.Label({
        "enableCache": false,
        "id": "label193382457630",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Different scale mode options of image widget"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [12, 15, 12, 10],
        "marginInPixel": true,
        "padding": [5, 5, 5, 5],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btnOne = new kony.ui.Button({
        "enableCache": false,
        "focusSkin": "btnFocus",
        "id": "btnOne",
        "isVisible": true,
        "onClick": p2kwiet12889314951341_btnOne_onClick_seq0,
        "skin": "btnNormal",
        "text": "Fit to dimensions"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btnTwo = new kony.ui.Button({
        "enableCache": false,
        "focusSkin": "btnFocus",
        "id": "btnTwo",
        "isVisible": true,
        "onClick": p2kwiet12889314951341_btnTwo_onClick_seq0,
        "skin": "btnNormal",
        "text": "Maintain aspect ratio"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btnThree = new kony.ui.Button({
        "enableCache": false,
        "focusSkin": "btnFocus",
        "id": "btnThree",
        "isVisible": true,
        "onClick": p2kwiet12889314951341_btnThree_onClick_seq0,
        "skin": "btnNormal",
        "text": "Crop"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button11798972521392 = new kony.ui.Button({
        "enableCache": false,
        "focusSkin": "btnFocus",
        "id": "button11798972521392",
        "isVisible": true,
        "onClick": p2kwiet12889314951341_button11798972521392_onClick_seq0,
        "skin": "btnNormal",
        "text": "URL based image scale modes"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmImage.add(hbox103994549623663, label193382457630, btnOne, btnTwo, btnThree, button11798972521392);
};

function frmImageGlobals() {
    frmImage = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmImage,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmImage",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Image "
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["btnOne", "btnThree", "btnTwo", "button11798972521392", "hbox103994549623663", "label103994549623664", "label193382457630"],
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
    frmImage.info = {
        "kuid": "p2kwiet12889314951341"
    };
};