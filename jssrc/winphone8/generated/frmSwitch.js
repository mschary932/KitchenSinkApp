function addWidgetsfrmSwitch() {
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
        "text": "Switch"
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
    var hbox685080434801701 = new kony.ui.Box({
        "enableCache": false,
        "id": "hbox685080434801701",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [12, 24, 12, 6],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label685080434801703 = new kony.ui.Label({
        "enableCache": false,
        "id": "label685080434801703",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Default View"
    }, {
        "containerWeight": 50,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var switch685080434801705 = new kony.ui.Switch({
        "enableCache": false,
        "id": "switch685080434801705",
        "isVisible": true,
        "leftSideText": "ON",
        "rightSideText": "OFF",
        "skin": "swtNormal"
    }, {
        "containerWeight": 50,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 5],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    hbox685080434801701.add(label685080434801703, switch685080434801705);
    var hbox192920684268093 = new kony.ui.Box({
        "enableCache": false,
        "id": "hbox192920684268093",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label192920684268095 = new kony.ui.Label({
        "enableCache": false,
        "id": "label192920684268095",
        "isVisible": true,
        "skin": "lblNormal",
        "text": "View with Custom text"
    }, {
        "containerWeight": 50,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var switch192920684268097 = new kony.ui.Switch({
        "enableCache": false,
        "id": "switch192920684268097",
        "isVisible": true,
        "leftSideText": "Yes",
        "rightSideText": "No"
    }, {
        "containerWeight": 50,
        "hExpand": true,
        "marginInPixel": false,
        "padding": [0, 0, 0, 5],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox192920684268093.add(label192920684268095, switch192920684268097);
    frmSwitch.add(hbox103994549623663, hbox685080434801701, hbox192920684268093);
};

function frmSwitchGlobals() {
    frmSwitch = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSwitch,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmSwitch",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Switch"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["hbox103994549623663", "hbox11798972525384", "hbox118082077327018", "hbox118082077327072", "hbox1927359800103842", "hbox1927359800103920", "hbox192920684268093", "hbox685080434801701", "label103994549623664", "label11798972525389", "label118082077327020", "label118082077327074", "label1927359800103844", "label1927359800103922", "label192920684268095", "label685080434801703", "switch11798972525390", "switch118082077327030", "switch118082077327084", "switch1927359800103846", "switch1927359800103924", "switch192920684268097", "switch685080434801705"],
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
    frmSwitch.info = {
        "kuid": "p2kwiet12889314952934"
    };
};