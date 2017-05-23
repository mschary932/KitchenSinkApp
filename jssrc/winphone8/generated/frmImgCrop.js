function addWidgetsfrmImgCrop() {
    var hboxChkBox = new kony.ui.Box({
        "enableCache": false,
        "id": "hboxChkBox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "headBox"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var labelChkBox = new kony.ui.Label({
        "enableCache": false,
        "id": "labelChkBox",
        "isVisible": true,
        "skin": "headLabel",
        "text": "Crop"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hboxChkBox.add(labelChkBox);
    var labelDesc = new kony.ui.Label({
        "enableCache": false,
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
    }, {});
    var linetop = new kony.ui.Line({
        "enableCache": false,
        "id": "linetop",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hboxmain = new kony.ui.Box({
        "enableCache": false,
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
        "enableCache": false,
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
        "enableCache": false,
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
    }, {});
    hboxmain.add(imgCrop, labelno);
    var linebottom = new kony.ui.Line({
        "enableCache": false,
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
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmImgCrop",
        "needAppMenu": true,
        "title": "Crop"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["hboxChkBox", "hboxmain", "imgCrop", "labelChkBox", "labelDesc", "labelno", "linebottom", "linetop"],
        "inTransitionConfig": {
            "transitionSpeed": 0
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "transitionSpeed": 0
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmImgCrop.info = {
        "kuid": "p2kwiet12889314951352"
    };
};