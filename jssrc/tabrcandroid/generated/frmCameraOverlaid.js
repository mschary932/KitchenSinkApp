function addWidgetsfrmCameraOverlaid() {
    var image21927419382155502 = new kony.ui.Image2({
        "id": "image21927419382155502",
        "isVisible": true,
        "src": "konylogo.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmCameraOverlaid.add(image21927419382155502);
};

function frmCameraOverlaidGlobals() {
    frmCameraOverlaid = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCameraOverlaid,
        "enabledForIdleTimeout": false,
        "id": "frmCameraOverlaid",
        "needAppMenu": true,
        "skin": "frmSknTrans"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
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
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmCameraOverlaid.info = {
        "kuid": "p2kwiet12889314953676"
    };
};