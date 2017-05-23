function addWidgetsfrmURLBasedImage() {
    var labelori = new kony.ui.Label({
        "id": "labelori",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Original image size is 300X300(Pixels)"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [4, 5, 4, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var labelfit = new kony.ui.Label({
        "id": "labelfit",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "FIT TO DIMENTIONS"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [4, 2, 4, 2],
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var labelfitsize = new kony.ui.Label({
        "id": "labelfitsize",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "referenceWidth-200px; referenceHeight-100px"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [4, 1, 4, 2],
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var imgFt = new kony.ui.Image2({
        "id": "imgFt",
        "imageWhenFailed": "error_loading.png",
        "imageWhileDownloading": "download.png",
        "isVisible": true,
        "src": "http://www.fordesigner.com/imguploads/Image/cjbc/zcool/png20080525/1211728825.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [4, 3, 4, 3],
        "marginInPixel": false,
        "paddingInPixel": false,
        "referenceHeight": 100,
        "referenceWidth": 200,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var line1 = new kony.ui.Line({
        "id": "line1",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var labelmain = new kony.ui.Label({
        "id": "labelmain",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "MAINTAIN ASPECT RATIO"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [4, 2, 4, 2],
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var labelmainsize = new kony.ui.Label({
        "id": "labelmainsize",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "referenceWidth-300px; referenceHeight-150px"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [4, 1, 4, 2],
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var imgMt = new kony.ui.Image2({
        "id": "imgMt",
        "imageWhenFailed": "error_loading.png",
        "imageWhileDownloading": "download.png",
        "isVisible": true,
        "src": "http://www.fordesigner.com/imguploads/Image/cjbc/zcool/png20080525/1211728825.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [4, 3, 4, 3],
        "marginInPixel": false,
        "paddingInPixel": false,
        "referenceHeight": 150,
        "referenceWidth": 300,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var line2 = new kony.ui.Line({
        "id": "line2",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var labelcrop = new kony.ui.Label({
        "id": "labelcrop",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "CROP"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [4, 2, 4, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var labelcropsize = new kony.ui.Label({
        "id": "labelcropsize",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "referenceWidth-100px; referenceHeight-100px"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [4, 2, 4, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var imgCp = new kony.ui.Image2({
        "id": "imgCp",
        "imageWhenFailed": "error_loading.png",
        "imageWhileDownloading": "download.png",
        "isVisible": true,
        "src": "http://www.fordesigner.com/imguploads/Image/cjbc/zcool/png20080525/1211728825.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_CROP,
        "margin": [4, 3, 4, 3],
        "marginInPixel": false,
        "paddingInPixel": false,
        "referenceHeight": 100,
        "referenceWidth": 100,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var line3 = new kony.ui.Line({
        "id": "line3",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [0, 2, 0, 2],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    frmURLBasedImage.add(labelori, labelfit, labelfitsize, imgFt, line1, labelmain, labelmainsize, imgMt, line2, labelcrop, labelcropsize, imgCp, line3);
};

function frmURLBasedImageGlobals() {
    frmURLBasedImage = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmURLBasedImage,
        "enabledForIdleTimeout": false,
        "id": "frmURLBasedImage",
        "needAppMenu": true,
        "title": "URL based images"
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
    frmURLBasedImage.info = {
        "kuid": "p2kwiet12889314953302"
    };
};