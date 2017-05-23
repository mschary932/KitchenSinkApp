function addWidgetsfrmRegisterAccelerometer() {
    var hbox193117304862989 = new kony.ui.Box({
        "id": "hbox193117304862989",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [6, 12, 6, 6],
        "marginInPixel": true,
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblEventAndroid = new kony.ui.Label({
        "id": "lblEventAndroid",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox193117304862989.add(lblEventAndroid);
    var hbox10446524724681 = new kony.ui.Box({
        "id": "hbox10446524724681",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [6, 12, 6, 6],
        "marginInPixel": true,
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblEvent1 = new kony.ui.Label({
        "id": "lblEvent1",
        "isVisible": true,
        "skin": "lblSub",
        "text": "No of times device shaked:"
    }, {
        "containerWeight": 82,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var lblEvent3 = new kony.ui.Label({
        "id": "lblEvent3",
        "isVisible": true,
        "skin": "lblSub",
        "text": "0"
    }, {
        "containerWeight": 18,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox10446524724681.add(lblEvent1, lblEvent3);
    frmRegisterAccelerometer.add(hbox193117304862989, hbox10446524724681);
};

function frmRegisterAccelerometerGlobals() {
    frmRegisterAccelerometer = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmRegisterAccelerometer,
        "enabledForIdleTimeout": false,
        "id": "frmRegisterAccelerometer",
        "needAppMenu": true,
        "onHide": p2kwiet12889314951944_frmRegisterAccelerometer_onhide_seq0,
        "title": "Accelerometer"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
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
    frmRegisterAccelerometer.info = {
        "kuid": "p2kwiet12889314951944"
    };
};