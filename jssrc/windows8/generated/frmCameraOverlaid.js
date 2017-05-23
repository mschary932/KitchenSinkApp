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
        "animateHeaderFooter": false,
        "directChildrenIDs": ["image21927419382155502"],
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "formTransition": "None"
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmCameraOverlaid.info = {
        "kuid": "p2kwiet12889314953676"
    };
};