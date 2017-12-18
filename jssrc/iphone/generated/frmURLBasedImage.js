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
        "margin": [12, 15, 12, 1],
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "margin": [12, 5, 12, 5],
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "margin": [12, 1, 12, 5],
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "margin": [12, 7, 12, 7],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 100,
        "referenceWidth": 200,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var line1 = new kony.ui.Line({
        "id": "line1",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
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
        "margin": [12, 5, 12, 5],
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "margin": [12, 1, 12, 5],
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "margin": [12, 7, 12, 7],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 150,
        "referenceWidth": 300,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var line2 = new kony.ui.Line({
        "id": "line2",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
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
        "margin": [12, 5, 12, 1],
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "margin": [12, 5, 12, 1],
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "margin": [12, 7, 12, 7],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 100,
        "referenceWidth": 100,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var line3 = new kony.ui.Line({
        "id": "line3",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [0, 4, 0, 4],
        "marginInPixel": true,
        "thickness": 1
    }, {});
    frmURLBasedImage.add(labelori, labelfit, labelfitsize, imgFt, line1, labelmain, labelmainsize, imgMt, line2, labelcrop, labelcropsize, imgCp, line3);
};

function frmURLBasedImageGlobals() {
    frmURLBasedImage = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmURLBasedImage,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmURLBasedImage",
        "needAppMenu": true,
        "title": "URL based images"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
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