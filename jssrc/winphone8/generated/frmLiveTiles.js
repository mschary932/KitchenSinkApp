function addWidgetsfrmLiveTiles() {
    var hboxListBox = new kony.ui.Box({
        "enableCache": false,
        "focusSkin": "headBox",
        "id": "hboxListBox",
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
    var lblListBox = new kony.ui.Label({
        "enableCache": false,
        "id": "lblListBox",
        "isVisible": true,
        "skin": "headLabel",
        "text": "Live Tile"
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
    hboxListBox.add(lblListBox);
    var button1927359800122731 = new kony.ui.Button({
        "enableCache": false,
        "focusSkin": "btnFocus",
        "id": "button1927359800122731",
        "isVisible": true,
        "onClick": p2kwiet12889314951612_button1927359800122731_onClick_seq0,
        "skin": "btnNormal",
        "text": "Create Secondary Tile"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [4, 4, 4, 4],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button104465247211227 = new kony.ui.Button({
        "enableCache": false,
        "focusSkin": "btnFocus",
        "id": "button104465247211227",
        "isVisible": true,
        "onClick": p2kwiet12889314951612_button104465247211227_onClick_seq0,
        "skin": "btnNormal",
        "text": "Remove Secondary Tile"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [4, 4, 4, 4],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmLiveTiles.add(hboxListBox, button1927359800122731, button104465247211227);
};

function frmLiveTilesGlobals() {
    frmLiveTiles = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLiveTiles,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmLiveTiles",
        "needAppMenu": true,
        "skin": "frm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["button104465247211227", "button1927359800122731", "hboxListBox", "lblListBox"],
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
    frmLiveTiles.info = {
        "kuid": "p2kwiet12889314951612"
    };
};