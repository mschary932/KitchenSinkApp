function addWidgetsfrmSwitch() {
    var hbxSwitch = new kony.ui.Box({
        "id": "hbxSwitch",
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
    var hbox11798972525384 = new kony.ui.Box({
        "id": "hbox11798972525384",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label11798972525389 = new kony.ui.Label({
        "id": "label11798972525389",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Default View"
    }, {
        "containerWeight": 80,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
    });
    var switch11798972525390 = new kony.ui.Switch({
        "id": "switch11798972525390",
        "isVisible": true,
        "leftSideText": "ON",
        "rightSideText": "OFF",
        "skin": "swtNormal"
    }, {
        "containerWeight": 20,
        "hExpand": true,
        "margin": [4, 0, 4, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    hbox11798972525384.add(label11798972525389, switch11798972525390);
    var hbox118082077327018 = new kony.ui.Box({
        "id": "hbox118082077327018",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label118082077327020 = new kony.ui.Label({
        "id": "label118082077327020",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Switch with custom color"
    }, {
        "containerWeight": 80,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
    });
    var switch118082077327030 = new kony.ui.Switch({
        "id": "switch118082077327030",
        "isVisible": true,
        "leftSideText": "ON",
        "rightSideText": "OFF",
        "skin": "switchCustomColorBG"
    }, {
        "containerWeight": 20,
        "hExpand": true,
        "margin": [4, 0, 4, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox118082077327018.add(label118082077327020, switch118082077327030);
    var hbox118082077327072 = new kony.ui.Box({
        "id": "hbox118082077327072",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label118082077327074 = new kony.ui.Label({
        "id": "label118082077327074",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "View with Custom text & Font color"
    }, {
        "containerWeight": 80,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
    });
    var switch118082077327084 = new kony.ui.Switch({
        "id": "switch118082077327084",
        "isVisible": true,
        "leftSideText": "Yes",
        "rightSideText": "No",
        "skin": "switchCustomFont"
    }, {
        "containerWeight": 20,
        "hExpand": true,
        "margin": [4, 0, 4, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox118082077327072.add(label118082077327074, switch118082077327084);
    vbox192926642422365.add(hbox11798972525384, hbox118082077327018, hbox118082077327072);
    hbxSwitch.add(vbox192926642422365);
    frmSwitch.add(hbxSwitch);
};

function frmSwitchGlobals() {
    frmSwitch = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSwitch,
        "enabledForIdleTimeout": false,
        "id": "frmSwitch",
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
    frmSwitch.info = {
        "kuid": "p2kwiet12889314954757"
    };
};