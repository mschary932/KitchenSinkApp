function addWidgetsfrmGestures() {
    var hbxGestures = new kony.ui.Box({
        "enableCache": false,
        "focusSkin": "headBox",
        "id": "hbxGestures",
        "isVisible": false,
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
    var lblGesturesTitle = new kony.ui.Label({
        "enableCache": false,
        "id": "lblGesturesTitle",
        "isVisible": false,
        "skin": "headLabel",
        "text": "Gestures"
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
    hbxGestures.add(lblGesturesTitle);
    var lblFrmGestures = new kony.ui.Label({
        "enableCache": false,
        "id": "lblFrmGestures",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Perform Double Tap,Swipe and Longpress  gestures in this form and observe corresponding images below."
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 2],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var imgGes = new kony.ui.Image2({
        "enableCache": false,
        "id": "imgGes",
        "isVisible": true
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 150,
        "referenceWidth": 150,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmGestures.add(hbxGestures, lblFrmGestures, imgGes);
};

function frmGesturesGlobals() {
    frmGestures = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmGestures,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "headers": [hBoxTitle],
        "id": "frmGestures",
        "needAppMenu": true,
        "postShow": p2kwiet12889314951233_frmGestures_postshow_seq0,
        "preShow": p2kwiet12889314951233_frmGestures_preshow_seq0,
        "skin": "frm",
        "title": "Gestures"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["hbxGestures", "imgGes", "lblFrmGestures", "lblGesturesTitle"],
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
    frmGestures.info = {
        "kuid": "frmGesturesWinPhone8"
    };
};