function addWidgetsfrmImgCrop() {
    var labelDesc = new kony.ui.Label({
        "id": "labelDesc",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Image cropped as image size is larger than image widget size"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [12, 18, 12, 15],
        "marginInPixel": true,
        "padding": [5, 0, 5, 5],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var linetop = new kony.ui.Line({
        "id": "linetop",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hboxmain = new kony.ui.Box({
        "id": "hboxmain",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [12, 10, 12, 10],
        "marginInPixel": true,
        "padding": [5, 5, 5, 5],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var imgCrop = new kony.ui.Image2({
        "id": "imgCrop",
        "isVisible": true,
        "src": "koala_250x200.png"
    }, {
        "containerWeight": 40,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_CROP,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 100,
        "referenceWidth": 200,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var labelno = new kony.ui.Label({
        "id": "labelno",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "containerWeight": 60,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    hboxmain.add(imgCrop, labelno);
    var linebottom = new kony.ui.Line({
        "id": "linebottom",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "marginInPixel": false,
        "thickness": 1
    }, {});
    frmImgCrop.add(labelDesc, linetop, hboxmain, linebottom);
};

function frmImgCropGlobals() {
    frmImgCrop = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmImgCrop,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmImgCrop",
        "needAppMenu": true,
        "title": "Crop"
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