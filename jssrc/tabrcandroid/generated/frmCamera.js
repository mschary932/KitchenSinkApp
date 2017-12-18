function addWidgetsfrmCamera() {
    var hbxCameraBasic = new kony.ui.Box({
        "id": "hbxCameraBasic",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxRoundBorder"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox118085056482217 = new kony.ui.Box({
        "id": "vbox118085056482217",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label118085056482218 = new kony.ui.Label({
        "id": "label118085056482218",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Basic camera"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
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
    var camBasic = new kony.ui.Camera({
        "compressionLevel": 70,
        "focusSkin": "camFocus",
        "id": "camBasic",
        "isVisible": true,
        "onCapture": p2kwiet12889314953672_camBasic_onCapture_seq0,
        "scaleFactor": 80,
        "skin": "camNormal",
        "text": "Capture image"
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
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "enableOverlay": false,
        "enablePhotoCropFeature": false,
        "overlayConfig": {
            "tapAnywhere": false
        }
    });
    var imageCamBasic = new kony.ui.Image2({
        "id": "imageCamBasic",
        "isVisible": true
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 600,
        "referenceWidth": 600,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    vbox118085056482217.add(label118085056482218, camBasic, imageCamBasic);
    hbxCameraBasic.add(vbox118085056482217);
    var hbxFrmOverlay = new kony.ui.Box({
        "id": "hbxFrmOverlay",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxRoundBorder"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox118085056482304 = new kony.ui.Box({
        "id": "vbox118085056482304",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label118085056482306 = new kony.ui.Label({
        "id": "label118085056482306",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Form overlay"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
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
    var camFrmOverlay = new kony.ui.Camera({
        "compressionLevel": 70,
        "focusSkin": "camFocus",
        "id": "camFrmOverlay",
        "isVisible": true,
        "onCapture": p2kwiet12889314953672_camFrmOverlay_onCapture_seq0,
        "scaleFactor": 80,
        "skin": "camNormal",
        "text": "Capture image"
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
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_INMEMORY,
        "enableOverlay": true,
        "enablePhotoCropFeature": false,
        "overlayConfig": {
            "tapAnywhere": false
        }
    });
    var imageFrmCamFrmOverRef = new kony.ui.Image2({
        "id": "imageFrmCamFrmOverRef",
        "isVisible": true
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 600,
        "referenceWidth": 600,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    vbox118085056482304.add(label118085056482306, camFrmOverlay, imageFrmCamFrmOverRef);
    hbxFrmOverlay.add(vbox118085056482304);
    var hbxCameraAccessModes = new kony.ui.Box({
        "id": "hbxCameraAccessModes",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxRoundBorder"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox118085056482363 = new kony.ui.Box({
        "id": "vbox118085056482363",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label118085056482373 = new kony.ui.Label({
        "id": "label118085056482373",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Camera access modes"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
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
    var camera118085056482412 = new kony.ui.Camera({
        "compressionLevel": 0,
        "focusSkin": "camFocus",
        "id": "camera118085056482412",
        "isVisible": true,
        "onCapture": p2kwiet12889314953672_camera118085056482412_onCapture_seq0,
        "scaleFactor": 80,
        "skin": "camNormal",
        "text": "Public mode"
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
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "enableOverlay": false,
        "enablePhotoCropFeature": false,
        "overlayConfig": {
            "tapAnywhere": false
        }
    });
    var imgPublicMode = new kony.ui.Image2({
        "id": "imgPublicMode",
        "isVisible": true
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 600,
        "referenceWidth": 600,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var camera118085056482432 = new kony.ui.Camera({
        "compressionLevel": 0,
        "focusSkin": "camFocus",
        "id": "camera118085056482432",
        "isVisible": true,
        "onCapture": p2kwiet12889314953672_camera118085056482432_onCapture_seq0,
        "scaleFactor": 80,
        "skin": "camNormal",
        "text": "Private mode"
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
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PRIVATE,
        "enableOverlay": false,
        "enablePhotoCropFeature": false,
        "overlayConfig": {
            "overlayForm": frmDummy,
            "tapAnywhere": false
        }
    });
    var imgPrivateMode = new kony.ui.Image2({
        "id": "imgPrivateMode",
        "isVisible": true
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 600,
        "referenceWidth": 600,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var camera118085056482452 = new kony.ui.Camera({
        "compressionLevel": 0,
        "focusSkin": "camFocus",
        "id": "camera118085056482452",
        "isVisible": true,
        "onCapture": p2kwiet12889314953672_camera118085056482452_onCapture_seq0,
        "scaleFactor": 80,
        "skin": "camNormal",
        "text": "In memory mode"
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
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "enableOverlay": false,
        "enablePhotoCropFeature": false,
        "overlayConfig": {
            "overlayForm": frmDummy,
            "tapAnywhere": false
        }
    });
    var imgInMemMode = new kony.ui.Image2({
        "id": "imgInMemMode",
        "isVisible": true
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 600,
        "referenceWidth": 600,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    vbox118085056482363.add(label118085056482373, camera118085056482412, imgPublicMode, camera118085056482432, imgPrivateMode, camera118085056482452, imgInMemMode);
    hbxCameraAccessModes.add(vbox118085056482363);
    var hbxCamOrientationMode = new kony.ui.Box({
        "id": "hbxCamOrientationMode",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxRoundBorder"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox118085056482470 = new kony.ui.Box({
        "id": "vbox118085056482470",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label118085056482480 = new kony.ui.Label({
        "id": "label118085056482480",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Camera orientation"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
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
    var camera118085056482493 = new kony.ui.Camera({
        "compressionLevel": 0,
        "focusSkin": "camFocus",
        "id": "camera118085056482493",
        "isVisible": true,
        "onCapture": p2kwiet12889314953672_camera118085056482493_onCapture_seq0,
        "scaleFactor": 80,
        "skin": "camNormal",
        "text": "Portrait"
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
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "enableOverlay": false,
        "enablePhotoCropFeature": false,
        "overlayConfig": {
            "tapAnywhere": false
        }
    });
    var imgPortrait = new kony.ui.Image2({
        "id": "imgPortrait",
        "isVisible": true
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 600,
        "referenceWidth": 600,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var camera118085056482513 = new kony.ui.Camera({
        "compressionLevel": 0,
        "focusSkin": "camFocus",
        "id": "camera118085056482513",
        "isVisible": true,
        "onCapture": p2kwiet12889314953672_camera118085056482513_onCapture_seq0,
        "scaleFactor": 80,
        "skin": "camNormal",
        "text": "Landscape"
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
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "enableOverlay": false,
        "enablePhotoCropFeature": false,
        "overlayConfig": {
            "tapAnywhere": false
        }
    });
    var imgLandscape = new kony.ui.Image2({
        "id": "imgLandscape",
        "isVisible": true
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 600,
        "referenceWidth": 600,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    vbox118085056482470.add(label118085056482480, camera118085056482493, imgPortrait, camera118085056482513, imgLandscape);
    hbxCamOrientationMode.add(vbox118085056482470);
    frmCamera.add(hbxCameraBasic, hbxFrmOverlay, hbxCameraAccessModes, hbxCamOrientationMode);
};

function frmCameraGlobals() {
    frmCamera = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCamera,
        "enabledForIdleTimeout": false,
        "id": "frmCamera",
        "needAppMenu": true,
        "skin": "frm"
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
};