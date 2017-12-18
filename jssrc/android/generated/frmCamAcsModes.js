function addWidgetsfrmCamAcsModes() {
    var camera1930040990139330 = new kony.ui.Camera({
        "compressionLevel": 70,
        "focusSkin": "camFocus",
        "id": "camera1930040990139330",
        "isVisible": true,
        "onCapture": p2kwiet1288931495546_camera1930040990139330_onCapture_seq0,
        "scaleFactor": 80,
        "skin": "camNormal",
        "text": "Public mode"
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
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "enableOverlay": false,
        "enablePhotoCropFeature": false,
        "overlayConfig": {
            "tapAnywhere": false
        }
    });
    var camera1930040990139338 = new kony.ui.Camera({
        "compressionLevel": 70,
        "focusSkin": "camFocus",
        "id": "camera1930040990139338",
        "isVisible": true,
        "onCapture": p2kwiet1288931495546_camera1930040990139338_onCapture_seq0,
        "scaleFactor": 80,
        "skin": "camNormal",
        "text": "Private mode"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PRIVATE,
        "enableOverlay": true,
        "enablePhotoCropFeature": false,
        "overlayConfig": {
            "overlayForm": frmDummy,
            "tapAnywhere": false
        }
    });
    var camera1930040990139344 = new kony.ui.Camera({
        "compressionLevel": 70,
        "focusSkin": "camFocus",
        "id": "camera1930040990139344",
        "isVisible": true,
        "onCapture": p2kwiet1288931495546_camera1930040990139344_onCapture_seq0,
        "scaleFactor": 80,
        "skin": "camNormal",
        "text": "In memory mode"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_INMEMORY,
        "enableOverlay": true,
        "enablePhotoCropFeature": false,
        "overlayConfig": {
            "overlayForm": frmDummy,
            "tapAnywhere": false
        }
    });
    var hbox1930040990139390 = new kony.ui.Box({
        "id": "hbox1930040990139390",
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
    var img1CamAcc = new kony.ui.Image2({
        "id": "img1CamAcc",
        "isVisible": true
    }, {
        "containerWeight": 32,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [2, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 70,
        "referenceWidth": 110,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var img2CamAcc = new kony.ui.Image2({
        "id": "img2CamAcc",
        "isVisible": true
    }, {
        "containerWeight": 33,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [2, 0, 2, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 70,
        "referenceWidth": 110,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var img3CamAcc = new kony.ui.Image2({
        "id": "img3CamAcc",
        "isVisible": true
    }, {
        "containerWeight": 35,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [0, 0, 2, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 70,
        "referenceWidth": 110,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox1930040990139390.add(img1CamAcc, img2CamAcc, img3CamAcc);
    var lblFrmCamAccessModes = new kony.ui.Label({
        "id": "lblFrmCamAccessModes",
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
        "textCopyable": false
    });
    frmCamAcsModes.add(camera1930040990139330, camera1930040990139338, camera1930040990139344, hbox1930040990139390, lblFrmCamAccessModes);
};

function frmCamAcsModesGlobals() {
    frmCamAcsModes = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCamAcsModes,
        "enabledForIdleTimeout": false,
        "id": "frmCamAcsModes",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Access modes"
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