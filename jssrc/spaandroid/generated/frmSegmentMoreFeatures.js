function addWidgetsfrmSegmentMoreFeatures() {
    var button11782289566537 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button11782289566537",
        "isVisible": true,
        "onClick": p2kwiet12889314952571_button11782289566537_onClick_seq0,
        "skin": "btnNormal",
        "text": "Icon edit style"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [4, 4, 4, 2],
        "marginInPixel": false,
        "padding": [1, 5, 1, 5],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button11782289566543 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button11782289566543",
        "isVisible": true,
        "onClick": p2kwiet12889314952571_button11782289566543_onClick_seq0,
        "skin": "btnNormal",
        "text": "Swipe to delete"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [4, 2, 4, 2],
        "marginInPixel": false,
        "padding": [1, 5, 1, 5],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button11782289566549 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button11782289566549",
        "isVisible": true,
        "onClick": p2kwiet12889314952571_button11782289566549_onClick_seq0,
        "skin": "btnNormal",
        "text": "Pull to refresh"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [4, 2, 4, 2],
        "marginInPixel": false,
        "padding": [1, 5, 1, 5],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button15633488264683 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button15633488264683",
        "isVisible": true,
        "onClick": p2kwiet12889314952571_button15633488264683_onClick_seq0,
        "skin": "btnNormal",
        "text": "On reach end"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [4, 2, 4, 2],
        "marginInPixel": false,
        "padding": [1, 5, 1, 5],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmSegmentMoreFeatures.add(button11782289566537, button11782289566543, button11782289566549, button15633488264683);
};

function frmSegmentMoreFeaturesGlobals() {
    frmSegmentMoreFeatures = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegmentMoreFeatures,
        "enabledForIdleTimeout": false,
        "id": "frmSegmentMoreFeatures",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Segment"
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
    frmSegmentMoreFeatures.info = {
        "kuid": "p2kwiet12889314952571"
    };
};