function addWidgetsfrmImgCrop() {
    var hboxChkBox = new kony.ui.Box({
        "id": "hboxChkBox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "headBox"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [4, 1, 4, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var labelChkBox = new kony.ui.Label({
        "id": "labelChkBox",
        "isVisible": true,
        "skin": "headLabel",
        "text": "Crop"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [4, 6, 4, 5],
        "marginInPixel": false,
        "padding": [2, 4, 2, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    hboxChkBox.add(labelChkBox);
    var labelDesc = new kony.ui.Label({
        "id": "labelDesc",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Image cropped as image size is larger than image widget size"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [4, 6, 4, 5],
        "marginInPixel": false,
        "padding": [2, 0, 2, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
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
        "margin": [4, 4, 4, 4],
        "marginInPixel": false,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
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
    }, {});
    var labelno = new kony.ui.Label({
        "id": "labelno",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "containerWeight": 60,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [2, 4, 2, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
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
    frmImgCrop.add(hboxChkBox, labelDesc, linetop, hboxmain, linebottom);
};

function frmImgCropGlobals() {
    frmImgCrop = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmImgCrop,
        "enabledForIdleTimeout": false,
        "id": "frmImgCrop",
        "needAppMenu": true,
        "title": "Crop"
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
    frmImgCrop.info = {
        "kuid": "p2kwiet12889314951352"
    };
};