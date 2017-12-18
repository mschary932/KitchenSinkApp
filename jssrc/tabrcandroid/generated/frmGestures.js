function addWidgetsfrmGestures() {
    var lblFrmGestures = new kony.ui.Label({
        "id": "lblFrmGestures",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Perform Double Tap,Swipe and Longpress  gestures in this form and observe corresponding images below."
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var imgGes = new kony.ui.Image2({
        "id": "imgGes",
        "isVisible": false
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "referenceHeight": 150,
        "referenceWidth": 150,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblGestureInfo = new kony.ui.Label({
        "id": "lblGestureInfo",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    frmGestures.add(lblFrmGestures, imgGes, lblGestureInfo);
};

function frmGesturesGlobals() {
    frmGestures = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmGestures,
        "enabledForIdleTimeout": false,
        "id": "frmGestures",
        "needAppMenu": true,
        "postShow": p2kwiet12889314953920_frmGestures_postshow_seq0,
        "skin": "frm",
        "title": "Gestures"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
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
};