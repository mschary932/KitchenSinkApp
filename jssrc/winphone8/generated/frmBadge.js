function addWidgetsfrmBadge() {
    var label1927359800104093 = new kony.ui.Label({
        "enableCache": false,
        "id": "label1927359800104093",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Click the below button to observe Badge on button widget and application icon"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btnBadge = new kony.ui.Button({
        "enableCache": false,
        "focusSkin": "btnFocus",
        "id": "btnBadge",
        "isVisible": true,
        "onClick": p2kwiet1288931495321_btnBadge_onClick_seq0,
        "skin": "btnNormal",
        "text": "Click to change the badge counter"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [4, 25, 4, 2],
        "marginInPixel": false,
        "padding": [4, 10, 4, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmBadge.add(label1927359800104093, btnBadge);
};

function frmBadgeGlobals() {
    frmBadge = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmBadge,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmBadge",
        "needAppMenu": true,
        "preShow": p2kwiet1288931495321_frmBadge_preshow_seq0,
        "skin": "frm",
        "title": "Badge"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["btnBadge", "label1927359800104093"],
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
    frmBadge.info = {
        "kuid": "p2kwiet1288931495321"
    };
};