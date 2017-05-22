function addWidgetsfrmImgFitToDimensions() {
    var labelori = new kony.ui.Label({
        "id": "labelori",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Original Image"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [12, 15, 12, 7],
        "marginInPixel": true,
        "padding": [6, 0, 6, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var labelorisize = new kony.ui.Label({
        "id": "labelorisize",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "width=250px ; height=200px"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [12, 7, 12, 7],
        "marginInPixel": true,
        "padding": [6, 0, 6, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var line1 = new kony.ui.Line({
        "id": "line1",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var imgOrignal = new kony.ui.Image2({
        "id": "imgOrignal",
        "isVisible": true,
        "src": "koala_250x200.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [12, 7, 12, 7],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 200,
        "referenceWidth": 250,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var line2 = new kony.ui.Line({
        "id": "line2",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [0, 5, 0, 5],
        "marginInPixel": true,
        "thickness": 1
    }, {});
    var labelimg = new kony.ui.Label({
        "id": "labelimg",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Image squeezed"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [12, 7, 12, 7],
        "marginInPixel": true,
        "padding": [6, 0, 6, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var labelimgsize = new kony.ui.Label({
        "id": "labelimgsize",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "referenceWidth=200px; referenceHeight=100px"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [12, 7, 12, 7],
        "marginInPixel": true,
        "padding": [6, 0, 6, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var line11827272688002 = new kony.ui.Line({
        "id": "line11827272688002",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var imgSqueezed = new kony.ui.Image2({
        "id": "imgSqueezed",
        "isVisible": true,
        "src": "koala_250x200.png"
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
    var line193382457664 = new kony.ui.Line({
        "id": "line193382457664",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [0, 5, 0, 5],
        "marginInPixel": true,
        "thickness": 1
    }, {});
    var labelimgstr = new kony.ui.Label({
        "id": "labelimgstr",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Image stretched"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [12, 7, 12, 7],
        "marginInPixel": true,
        "padding": [6, 0, 6, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var labelimgstrsize = new kony.ui.Label({
        "id": "labelimgstrsize",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "referenceWidth=350px; referenceHeight=300px"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [12, 7, 12, 7],
        "marginInPixel": true,
        "padding": [6, 0, 6, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var line3 = new kony.ui.Line({
        "id": "line3",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var imgStretched = new kony.ui.Image2({
        "id": "imgStretched",
        "isVisible": true,
        "src": "koala_250x200.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [12, 7, 12, 7],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 300,
        "referenceWidth": 300,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var line4 = new kony.ui.Line({
        "id": "line4",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "marginInPixel": false,
        "thickness": 1
    }, {});
    frmImgFitToDimensions.add(labelori, labelorisize, line1, imgOrignal, line2, labelimg, labelimgsize, line11827272688002, imgSqueezed, line193382457664, labelimgstr, labelimgstrsize, line3, imgStretched, line4);
};

function frmImgFitToDimensionsGlobals() {
    frmImgFitToDimensions = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmImgFitToDimensions,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmImgFitToDimensions",
        "needAppMenu": true,
        "title": "Fit to Dimensions"
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
    frmImgFitToDimensions.info = {
        "kuid": "p2kwiet9745998651372"
    };
};