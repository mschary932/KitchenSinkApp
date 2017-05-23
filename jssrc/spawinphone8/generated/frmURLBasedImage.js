function addWidgetsfrmURLBasedImage() {
    var hbox103994549623663 = new kony.ui.Box({
        "focusSkin": "headBox",
        "id": "hbox103994549623663",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "headBox"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "marginInPixel": false,
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label103994549623664 = new kony.ui.Label({
        "id": "label103994549623664",
        "isVisible": true,
        "skin": "headLabel",
        "text": "URL based images"
    }, {
        "containerWeight": 97,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
    });
    hbox103994549623663.add(label103994549623664);
    var labelori = new kony.ui.Label({
        "id": "labelori",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Original image size is 300X300(Pixels)"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
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
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
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
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
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
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
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
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
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
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
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
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
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
        "marginInPixel": false,
        "thickness": 1
    }, {});
    frmURLBasedImage.add(hbox103994549623663, labelori, labelfit, labelfitsize, imgFt, line1, labelmain, labelmainsize, imgMt, line2, labelcrop, labelcropsize, imgCp, line3);
};

function frmURLBasedImageGlobals() {
    frmURLBasedImage = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmURLBasedImage,
        "enabledForIdleTimeout": false,
        "id": "frmURLBasedImage",
        "needAppMenu": true,
        "title": "URL based images"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "inTransitionConfig": {
            "formTransition": "leftCenter"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        },
        "retainScrollPosition": false
    });
    frmURLBasedImage.info = {
        "kuid": "p2kwiet12889314953302"
    };
};