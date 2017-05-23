function addWidgetsfrmImgStrip() {
    var hbxImgStrips = new kony.ui.Box({
        "id": "hbxImgStrips",
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
    var vbox192926642422365 = new kony.ui.Box({
        "id": "vbox192926642422365",
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
    var label1210492603121 = new kony.ui.Label({
        "id": "label1210492603121",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Default"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "renderAsAnchor": false
    });
    var hisDefault = new kony.ui.HorizontalImageStrip2({
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
        "id": "hisDefault",
        "isVisible": true,
        "onSelection": p2kwiet12889314954090_hisDefault_onSelection_seq0,
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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 120,
        "referenceWidth": 220,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label1210492603210 = new kony.ui.Label({
        "id": "label1210492603210",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Slot View"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "renderAsAnchor": false
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
                "flingVelocity": 1000,
                "flipInterval": 10,
                "scrollDistance": 50
            },
            "stripviewConfig": {
                "enableScrollBounce": true
            },
        },
        "viewType": constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_SLOTVIEW
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 120,
        "referenceWidth": 220,
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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
    });
    var label1181029310124641 = new kony.ui.Label({
        "id": "label1181029310124641",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Strip view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "renderAsAnchor": false
    });
    var himgstrip21181029310124655 = new kony.ui.HorizontalImageStrip2({
        "arrowConfig": {
            "leftArrowFocusImage": "",
            "leftArrowImage": "",
            "rightArrowFocusImage": "",
            "rightArrowImage": ""
        },
        "data": [
            [{
                "iurl": "frame1.png"
            }, {
                "iurl": "frame2.png"
            }, {
                "iurl": "frame3.png"
            }, {
                "iurl": "frame4.png"
            }, {
                "iurl": "frame5.png"
            }, {
                "iurl": "frame6.png"
            }, {
                "iurl": "frame7.png"
            }, {
                "iurl": "frame8.png"
            }], "iurl"
        ],
        "id": "himgstrip21181029310124655",
        "isVisible": true,
        "showArrows": false,
        "showScrollbars": false,
        "skin": "imgGalNormal",
        "spaceBetweenImages": 0,
        "viewConfig": {
            "coverflowConfig": {
                "depth": "20",
                "imageItemRotationAngle": 60,
                "isCircular": false,
                "projectionAngle": 0
            },
            "slotviewConfig": {
                "flingVelocity": 10,
                "flipInterval": 2,
                "scrollDistance": 10
            },
            "stripviewConfig": {
                "enableScrollBounce": true
            },
        },
        "viewType": constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_STRIPVIEW
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "referenceHeight": 0,
        "referenceWidth": 0,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    vbox192926642422365.add(label1210492603121, hisDefault, label1210492603210, himgstrip21210492603182, label117822895619361, label1181029310124641, himgstrip21181029310124655);
    hbxImgStrips.add(vbox192926642422365);
    frmImgStrip.add(hbxImgStrips);
};

function frmImgStripGlobals() {
    frmImgStrip = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmImgStrip,
        "enabledForIdleTimeout": false,
        "id": "frmImgStrip",
        "needAppMenu": true,
        "skin": "frm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "inTransitionConfig": {
            "formTransition": "none"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        },
        "retainScrollPosition": false
    });
    frmImgStrip.info = {
        "kuid": "p2kwiet12889314954090"
    };
};