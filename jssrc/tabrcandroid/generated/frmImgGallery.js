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
        "textCopyable": false
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
        "spaceBetweenImages": 90
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 2, 0, 2],
        "marginInPixel": false,
        "referenceHeight": 120,
        "referenceWidth": 175
    }, {});
    vbox192926642422365.add(label1210492603276, imagegallery21041822331264);
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
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
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
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};