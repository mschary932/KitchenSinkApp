function addWidgetsfrmImgGal() {
    var label1210492603276 = new kony.ui.Label({
        "id": "label1210492603276",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Default"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 12, 6, 6],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imagegallery21041822331264 = new kony.ui.ImageGallery2({
        "data": [
            [{
                "iurl": "b1.png"
            }, {
                "iurl": "b2.png"
            }, {
                "iurl": "b3.png"
            }, {
                "iurl": "b4.png"
            }, {
                "iurl": "b5.png"
            }, {
                "iurl": "b6.png"
            }], "iurl"
        ],
        "id": "imagegallery21041822331264",
        "isVisible": true,
        "skin": "imgGalNorma",
        "spaceBetweenImages": 0
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": true,
        "referenceHeight": 100,
        "referenceWidth": 140
    }, {});
    var label1210492603217 = new kony.ui.Label({
        "id": "label1210492603217",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Image Gallery with Background color"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imagegallery21210492603228 = new kony.ui.ImageGallery2({
        "data": [
            [{
                "iurl": "b1.png"
            }, {
                "iurl": "b2.png"
            }, {
                "iurl": "b3.png"
            }, {
                "iurl": "b4.png"
            }, {
                "iurl": "b5.png"
            }, {
                "iurl": "b6.png"
            }], "iurl"
        ],
        "focusSkin": "ImgGalSkin",
        "id": "imagegallery21210492603228",
        "isVisible": true,
        "skin": "ImgGalSkin",
        "spaceBetweenImages": 0
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [12, 0, 12, 0],
        "marginInPixel": true,
        "referenceHeight": 100,
        "referenceWidth": 140
    }, {});
    frmImgGal.add(label1210492603276, imagegallery21041822331264, label1210492603217, imagegallery21210492603228);
};

function frmImgGalGlobals() {
    frmImgGal = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmImgGal,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmImgGal",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Image Gallery"
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
    frmImgGal.info = {
        "kuid": "p2kwiet12889314951381"
    };
};