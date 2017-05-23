function addWidgetsfrmGeoCurrentNWatch() {
    var hboxformOptions123 = new kony.ui.Box({
        "enableCache": false,
        "focusSkin": "headBox",
        "id": "hboxformOptions123",
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
    var labelFormOptions123 = new kony.ui.Label({
        "enableCache": false,
        "id": "labelFormOptions123",
        "isVisible": true,
        "skin": "headLabel",
        "text": "GeoLocation"
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
    hboxformOptions123.add(labelFormOptions123);
    var hbox1930040990139805 = new kony.ui.Box({
        "enableCache": false,
        "id": "hbox1930040990139805",
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
    var vbox1930040990139808 = new kony.ui.Box({
        "enableCache": false,
        "id": "vbox1930040990139808",
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
    var hbox1930040990139811 = new kony.ui.Box({
        "enableCache": false,
        "id": "hbox1930040990139811",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label1930040990139834 = new kony.ui.Label({
        "enableCache": false,
        "id": "label1930040990139834",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Latitude"
    }, {
        "containerWeight": 35,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblFrmGeoLat = new kony.ui.Label({
        "enableCache": false,
        "id": "lblFrmGeoLat",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 65,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox1930040990139811.add(label1930040990139834, lblFrmGeoLat);
    var hbox1930040990139929 = new kony.ui.Box({
        "enableCache": false,
        "id": "hbox1930040990139929",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label1930040990139931 = new kony.ui.Label({
        "enableCache": false,
        "id": "label1930040990139931",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Longitude"
    }, {
        "containerWeight": 35,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblFrmGeoLon = new kony.ui.Label({
        "enableCache": false,
        "id": "lblFrmGeoLon",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 65,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox1930040990139929.add(label1930040990139931, lblFrmGeoLon);
    var hbox1930040990139947 = new kony.ui.Box({
        "enableCache": false,
        "id": "hbox1930040990139947",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label1930040990139949 = new kony.ui.Label({
        "enableCache": false,
        "id": "label1930040990139949",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Altitude"
    }, {
        "containerWeight": 35,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblFrmGeoAlt = new kony.ui.Label({
        "enableCache": false,
        "id": "lblFrmGeoAlt",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 65,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox1930040990139947.add(label1930040990139949, lblFrmGeoAlt);
    var hbox1930040990139965 = new kony.ui.Box({
        "enableCache": false,
        "id": "hbox1930040990139965",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label1930040990139967 = new kony.ui.Label({
        "enableCache": false,
        "id": "label1930040990139967",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Accuracy"
    }, {
        "containerWeight": 35,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblFrmGeoAccur = new kony.ui.Label({
        "enableCache": false,
        "id": "lblFrmGeoAccur",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 65,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox1930040990139965.add(label1930040990139967, lblFrmGeoAccur);
    var hbox1930040990140001 = new kony.ui.Box({
        "enableCache": false,
        "id": "hbox1930040990140001",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label1930040990140003 = new kony.ui.Label({
        "enableCache": false,
        "id": "label1930040990140003",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Heading"
    }, {
        "containerWeight": 35,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblFrmGeoHead = new kony.ui.Label({
        "enableCache": false,
        "id": "lblFrmGeoHead",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 65,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox1930040990140001.add(label1930040990140003, lblFrmGeoHead);
    var hbox1930040990140031 = new kony.ui.Box({
        "enableCache": false,
        "id": "hbox1930040990140031",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label1930040990140033 = new kony.ui.Label({
        "enableCache": false,
        "id": "label1930040990140033",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Speeding"
    }, {
        "containerWeight": 35,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblFrmGeoSpeed = new kony.ui.Label({
        "enableCache": false,
        "id": "lblFrmGeoSpeed",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 65,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox1930040990140031.add(label1930040990140033, lblFrmGeoSpeed);
    var hbox1930040990140049 = new kony.ui.Box({
        "enableCache": false,
        "id": "hbox1930040990140049",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label1930040990140051 = new kony.ui.Label({
        "enableCache": false,
        "id": "label1930040990140051",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Timestamp"
    }, {
        "containerWeight": 35,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblFrmGeoTimeStamp = new kony.ui.Label({
        "enableCache": false,
        "id": "lblFrmGeoTimeStamp",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 65,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox1930040990140049.add(label1930040990140051, lblFrmGeoTimeStamp);
    vbox1930040990139808.add(hbox1930040990139811, hbox1930040990139929, hbox1930040990139947, hbox1930040990139965, hbox1930040990140001, hbox1930040990140031, hbox1930040990140049);
    hbox1930040990139805.add(vbox1930040990139808);
    var button1930040990150304 = new kony.ui.Button({
        "enableCache": false,
        "focusSkin": "btnFocus",
        "id": "button1930040990150304",
        "isVisible": true,
        "onClick": p2kwiet12889314951129_button1930040990150304_onClick_seq0,
        "skin": "btnNormal",
        "text": "Get current adress"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 12, 12, 12],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblGeoAdress = new kony.ui.Label({
        "enableCache": false,
        "id": "lblGeoAdress",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmGeoCurrentNWatch.add(hboxformOptions123, hbox1930040990139805, button1930040990150304, lblGeoAdress);
};

function frmGeoCurrentNWatchGlobals() {
    frmGeoCurrentNWatch = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmGeoCurrentNWatch,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmGeoCurrentNWatch",
        "needAppMenu": true,
        "preShow": p2kwiet12889314951129_frmGeoCurrentNWatch_preshow_seq0,
        "skin": "frm",
        "title": "Current Position"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["button1930040990150304", "hbox1930040990139805", "hbox1930040990139811", "hbox1930040990139929", "hbox1930040990139947", "hbox1930040990139965", "hbox1930040990140001", "hbox1930040990140031", "hbox1930040990140049", "hboxformOptions123", "label1930040990139834", "label1930040990139931", "label1930040990139949", "label1930040990139967", "label1930040990140003", "label1930040990140033", "label1930040990140051", "labelFormOptions123", "lblFrmGeoAccur", "lblFrmGeoAlt", "lblFrmGeoHead", "lblFrmGeoLat", "lblFrmGeoLon", "lblFrmGeoSpeed", "lblFrmGeoTimeStamp", "lblGeoAdress", "vbox1930040990139808"],
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
    frmGeoCurrentNWatch.info = {
        "kuid": "p2kwiet12889314951129"
    };
};