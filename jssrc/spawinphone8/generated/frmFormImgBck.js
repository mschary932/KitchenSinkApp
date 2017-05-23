function addWidgetsfrmFormImgBck() {
    var label192735980025608 = new kony.ui.Label({
        "id": "label192735980025608",
        "isVisible": true,
        "skin": "lblBlackBold",
        "text": "This is the form with image background"
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
    frmFormImgBck.add(label192735980025608);
};

function frmFormImgBckGlobals() {
    frmFormImgBck = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmFormImgBck,
        "enabledForIdleTimeout": false,
        "id": "frmFormImgBck",
        "needAppMenu": true,
        "skin": "frmImg",
        "title": "Form"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "inTransitionConfig": {
            "formTransition": "leftCenter"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        },
        "retainScrollPosition": false
    });
    frmFormImgBck.info = {
        "kuid": "p2kwiet12889314951063"
    };
};