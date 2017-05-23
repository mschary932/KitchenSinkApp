function addWidgetsfrmImgGallery() {
    var hbxImgGallery = new kony.ui.Box({
        "id": "hbxImgGallery",
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
    var label1210492603276 = new kony.ui.Label({
        "id": "label1210492603276",
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
        "margin": [0, 2, 0, 2],
        "marginInPixel": false,
        "referenceHeight": 120,
        "referenceWidth": 175
    }, {});
    var label1210492603217 = new kony.ui.Label({
        "id": "label1210492603217",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Image Gallery with Background color"
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
    var hbox1928377500551117 = new kony.ui.Box({
        "focusSkin": "hBoxBlue",
        "id": "hbox1928377500551117",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxBlue"
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
    var imagegallery21928377500551127 = new kony.ui.ImageGallery2({
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
        "id": "imagegallery21928377500551127",
        "isVisible": true,
        "skin": "ImgGalSkin",
        "spaceBetweenImages": 0
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "referenceHeight": 120,
        "referenceWidth": 180
    }, {});
    hbox1928377500551117.add(imagegallery21928377500551127);
    vbox192926642422365.add(label1210492603276, imagegallery21041822331264, label1210492603217, hbox1928377500551117);
    hbxImgGallery.add(vbox192926642422365);
    frmImgGallery.add(hbxImgGallery);
};

function frmImgGalleryGlobals() {
    frmImgGallery = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmImgGallery,
        "enabledForIdleTimeout": false,
        "id": "frmImgGallery",
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
    frmImgGallery.info = {
        "kuid": "p2kwiet12889314954077"
    };
};