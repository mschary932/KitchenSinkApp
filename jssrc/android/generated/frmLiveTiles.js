function addWidgetsfrmLiveTiles() {
    var button1927359800122731 = new kony.ui.Button({
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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button104465247211227 = new kony.ui.Button({
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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmLiveTiles.add(button1927359800122731, button104465247211227);
};

function frmLiveTilesGlobals() {
    frmLiveTiles = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLiveTiles,
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
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "titleBarAndroid",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmLiveTiles.info = {
        "kuid": "p2kwiet12889314951612"
    };
};