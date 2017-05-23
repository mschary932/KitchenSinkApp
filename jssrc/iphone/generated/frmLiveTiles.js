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
        "margin": [4, 4, 4, 4],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
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
        "margin": [4, 4, 4, 4],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    frmLiveTiles.add(button1927359800122731, button104465247211227);
};

function frmLiveTilesGlobals() {
    frmLiveTiles = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLiveTiles,
        "bounces": true,
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
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "extendBottom": false,
        "extendTop": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": 100,
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "retainScrollPosition": false,
        "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "title",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "none"
        }
    });
    frmLiveTiles.info = {
        "kuid": "p2kwiet12889314951612"
    };
};