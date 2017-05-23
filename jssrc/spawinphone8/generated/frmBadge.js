function addWidgetsfrmBadge() {
    var label1927359800104093 = new kony.ui.Label({
        "id": "label1927359800104093",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Click the below button to observe Badge on button widget and application icon"
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
    var btnBadge = new kony.ui.Button({
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
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmBadge.add(label1927359800104093, btnBadge);
};

function frmBadgeGlobals() {
    frmBadge = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmBadge,
        "enabledForIdleTimeout": false,
        "id": "frmBadge",
        "needAppMenu": true,
        "preShow": p2kwiet1288931495321_frmBadge_preshow_seq0,
        "skin": "frm",
        "title": "Badge"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
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
    frmBadge.info = {
        "kuid": "p2kwiet1288931495321"
    };
};