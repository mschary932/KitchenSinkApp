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
    var hbox1930135169596592 = new kony.ui.Box({
        "id": "hbox1930135169596592",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 2, 0, 2],
        "marginInPixel": false,
        "padding": [1, 1, 0, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label1930135169596594 = new kony.ui.Label({
        "id": "label1930135169596594",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Default View"
    }, {
        "containerWeight": 60,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var switch1930135169596596 = new kony.ui.Switch({
        "id": "switch1930135169596596",
        "isVisible": true,
        "leftSideText": "ON",
        "rightSideText": "OFF",
        "skin": "swtNormal"
    }, {
        "containerWeight": 40,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    hbox1930135169596592.add(label1930135169596594, switch1930135169596596);
    var hbox1930135169597324 = new kony.ui.Box({
        "id": "hbox1930135169597324",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 2, 0, 2],
        "marginInPixel": false,
        "padding": [1, 1, 0, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label1930135169597326 = new kony.ui.Label({
        "id": "label1930135169597326",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Switch with custom color"
    }, {
        "containerWeight": 60,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var switch1930135169597328 = new kony.ui.Switch({
        "id": "switch1930135169597328",
        "isVisible": true,
        "leftSideText": "ON",
        "rightSideText": "OFF",
        "skin": "switchCustomColorBG"
    }, {
        "containerWeight": 40,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox1930135169597324.add(label1930135169597326, switch1930135169597328);
    var hbox1930135169601296 = new kony.ui.Box({
        "id": "hbox1930135169601296",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 2, 0, 2],
        "marginInPixel": false,
        "padding": [1, 1, 0, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label1930135169601298 = new kony.ui.Label({
        "id": "label1930135169601298",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "View with Custom text & Font color"
    }, {
        "containerWeight": 60,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var switch1930135169601300 = new kony.ui.Switch({
        "id": "switch1930135169601300",
        "isVisible": true,
        "leftSideText": "Yes",
        "rightSideText": "No",
        "skin": "switchCustomFont"
    }, {
        "containerWeight": 40,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox1930135169601296.add(label1930135169601298, switch1930135169601300);
    vbox192926642422365.add(hbox1930135169596592, hbox1930135169597324, hbox1930135169601296);
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
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["hbox11798972525384", "hbox118082077327018", "hbox118082077327072", "hbox1930135169596592", "hbox1930135169597324", "hbox1930135169601296", "hbxSwitch", "label11798972525389", "label118082077327020", "label118082077327074", "label1930135169596594", "label1930135169597326", "label1930135169601298", "switch11798972525390", "switch118082077327030", "switch118082077327084", "switch1930135169596596", "switch1930135169597328", "switch1930135169601300", "vbox192926642422365"],
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "formTransition": "None"
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmSwitch.info = {
        "kuid": "p2kwiet12889314954757"
    };
};