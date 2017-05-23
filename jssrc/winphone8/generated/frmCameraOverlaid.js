function addWidgetsfrmCameraOverlaid() {
    var hbox19337994629236 = new kony.ui.Box({
        "enableCache": false,
        "id": "hbox19337994629236",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxWhite"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image21927419382155502 = new kony.ui.Image2({
        "enableCache": false,
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
    hbox19337994629236.add(image21927419382155502);
    frmCameraOverlaid.add(hbox19337994629236);
};

function frmCameraOverlaidGlobals() {
    frmCameraOverlaid = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCameraOverlaid,
        "enableCache": false,
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
        "directChildrenIDs": ["hbox19337994629236", "image21927419382155502"],
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
    frmCameraOverlaid.info = {
        "kuid": "p2kwiet1288931495579"
    };
};