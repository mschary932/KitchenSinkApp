function addWidgetsfrmImgStrip() {
    var label1210492603121 = new kony.ui.Label({
        "id": "label1210492603121",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Default"
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
    var himgstrip21041822331260 = new kony.ui.HorizontalImageStrip2({
        "arrowConfig": {
            "leftArrowFocusImage": "",
            "leftArrowImage": "",
            "rightArrowFocusImage": "",
            "rightArrowImage": ""
        },
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
            }, {
                "iurl": "b7.png"
            }], "iurl"
        ],
        "id": "himgstrip21041822331260",
        "isVisible": true,
        "onSelection": p2kwiet12889314951502_himgstrip21041822331260_onSelection_seq0,
        "showArrows": false,
        "showScrollbars": false,
        "skin": "imgGalNormal",
        "spaceBetweenImages": 0,
        "viewConfig": {
            "coverflowConfig": {
                "depth": "0",
                "imageItemRotationAngle": 0,
                "isCircular": false,
                "projectionAngle": 0
            },
            "slotviewConfig": {
                "flingVelocity": 0,
                "flipInterval": 0,
                "scrollDistance": 0
            },
            "stripviewConfig": {
                "enableScrollBounce": true
            },
        },
        "viewType": constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_STRIPVIEW
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 100,
        "referenceWidth": 200,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblhIS = new kony.ui.Label({
        "id": "lblhIS",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "No Image Selected"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 4, 6, 4],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var label1210492603210 = new kony.ui.Label({
        "id": "label1210492603210",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Slot View"
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
    var himgstrip21210492603182 = new kony.ui.HorizontalImageStrip2({
        "arrowConfig": {
            "leftArrowFocusImage": "",
            "leftArrowImage": "",
            "rightArrowFocusImage": "",
            "rightArrowImage": ""
        },
        "data": [
            [{
                "iurl": "image20.png"
            }, {
                "iurl": "image19.png"
            }, {
                "iurl": "image18.png"
            }, {
                "iurl": "image17.png"
            }, {
                "iurl": "image16.png"
            }, {
                "iurl": "image15.png"
            }, {
                "iurl": "image14.png"
            }, {
                "iurl": "image13.png"
            }, {
                "iurl": "image12.png"
            }, {
                "iurl": "image11.png"
            }, {
                "iurl": "image10.png"
            }, {
                "iurl": "image9.png"
            }, {
                "iurl": "image8.png"
            }, {
                "iurl": "image7.png"
            }, {
                "iurl": "image6.png"
            }, {
                "iurl": "image5.png"
            }, {
                "iurl": "image4.png"
            }, {
                "iurl": "image3.png"
            }, {
                "iurl": "image2.png"
            }, {
                "iurl": "image1.png"
            }], "iurl"
        ],
        "focusSkin": "ImgStripWhite",
        "id": "himgstrip21210492603182",
        "isVisible": true,
        "showArrows": false,
        "showScrollbars": false,
        "skin": "ImgStripWhite",
        "spaceBetweenImages": 0,
        "viewConfig": {
            "coverflowConfig": {
                "depth": "0",
                "imageItemRotationAngle": 0,
                "isCircular": false,
                "projectionAngle": 0
            },
            "slotviewConfig": {
                "flingVelocity": 0,
                "flipInterval": 0,
                "scrollDistance": 0
            },
            "stripviewConfig": {
                "enableScrollBounce": true
            },
        },
        "viewType": constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_SLOTVIEW
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [12, 1, 12, 1],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 100,
        "referenceWidth": 200,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label117822895619361 = new kony.ui.Label({
        "id": "label117822895619361",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Please do left and right swipe on the above image to observe slot view."
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 0, 6, 1],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    frmImgStrip.add(label1210492603121, himgstrip21041822331260, lblhIS, label1210492603210, himgstrip21210492603182, label117822895619361);
};

function frmImgStripGlobals() {
    frmImgStrip = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmImgStrip,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmImgStrip",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Image Strip"
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
    frmImgStrip.info = {
        "kuid": "p2kwiet12889314951502"
    };
};