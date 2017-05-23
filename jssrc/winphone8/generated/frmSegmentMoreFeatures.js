function addWidgetsfrmSegmentMoreFeatures() {
    frmSegmentMoreFeatures.add();
};

function frmSegmentMoreFeaturesGlobals() {
    frmSegmentMoreFeatures = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegmentMoreFeatures,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmSegmentMoreFeatures",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Segment"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["button11782289566537", "button11782289566543", "button11782289566549", "button15633488264683"],
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
    frmSegmentMoreFeatures.info = {
        "kuid": "p2kwiet12889314952571"
    };
};