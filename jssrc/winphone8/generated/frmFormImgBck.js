function addWidgetsfrmFormImgBck() {
    var label192735980025608 = new kony.ui.Label({
        "enableCache": false,
        "id": "label192735980025608",
        "isVisible": true,
        "skin": "lblBlackBold",
        "text": "This is the form with image background"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 5, 6, 2],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmFormImgBck.add(label192735980025608);
};

function frmFormImgBckGlobals() {
    frmFormImgBck = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmFormImgBck,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmFormImgBck",
        "needAppMenu": true,
        "skin": "frmImg",
        "title": "Form"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["label192735980025608"],
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
    frmFormImgBck.info = {
        "kuid": "p2kwiet12889314951063"
    };
};