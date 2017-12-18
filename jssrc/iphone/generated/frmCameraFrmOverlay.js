function addWidgetsfrmCameraFrmOverlay() {
    var cameraFrmOverLay = new kony.ui.Camera({
        "compressionLevel": 70,
        "focusSkin": "camFocus",
        "id": "cameraFrmOverLay",
        "isVisible": true,
        "onCapture": p2kwiet1288931495565_cameraFrmOverLay_onCapture_seq0,
        "scaleFactor": 80,
        "skin": "camNormal",
        "text": "Capture image"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [12, 12, 12, 6],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_INMEMORY,
        "captureOrientation": constants.CAMERA_CAPTURE_ORIENTATION_DEFAULT,
        "enableOverlay": true,
        "imageFormat": constants.CAMERA_IMAGE_FORMAT_JPEG,
        "nativeUserInterface": true,
        "overlayConfig": {
            "overlayForm": frmCameraOverlaid
        }
    });
    var hbox1927508755138413 = new kony.ui.Box({
        "id": "hbox1927508755138413",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image21927508755138414 = new kony.ui.Image2({
        "id": "image21927508755138414",
        "isVisible": true,
        "src": "frame1.png"
    }, {
        "containerWeight": 31,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [4, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 70,
        "referenceWidth": 100,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var image21927508755138415 = new kony.ui.Image2({
        "id": "image21927508755138415",
        "isVisible": true,
        "src": "frame2.png"
    }, {
        "containerWeight": 34,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [4, 0, 4, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 70,
        "referenceWidth": 100,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var imageFrmCamFrmOverRef = new kony.ui.Image2({
        "id": "imageFrmCamFrmOverRef",
        "isVisible": true
    }, {
        "containerWeight": 35,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [0, 0, 4, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 70,
        "referenceWidth": 100,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    hbox1927508755138413.add(image21927508755138414, image21927508755138415, imageFrmCamFrmOverRef);
    var lblFrmCamOverlay = new kony.ui.Label({
        "id": "lblFrmCamOverlay",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    frmCameraFrmOverlay.add(cameraFrmOverLay, hbox1927508755138413, lblFrmCamOverlay);
};

function frmCameraFrmOverlayGlobals() {
    frmCameraFrmOverlay = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCameraFrmOverlay,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmCameraFrmOverlay",
        "needAppMenu": true,
        "title": "Form Overlay"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "extendBottom": false,
        "extendTop": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": 100,
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "retainScrollPosition": false,
        "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "title",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "none"
        },
        "titleBarSkin": "sknTitleBarSampleApp"
    });
};