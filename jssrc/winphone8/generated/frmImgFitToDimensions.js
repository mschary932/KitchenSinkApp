function addWidgetsfrmImgFitToDimensions() {
    var hbox103994549623663 = new kony.ui.Box({
        "enableCache": false,
        "focusSkin": "headBox",
        "id": "hbox103994549623663",
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
    var label103994549623664 = new kony.ui.Label({
        "enableCache": false,
        "id": "label103994549623664",
        "isVisible": true,
        "skin": "headLabel",
        "text": "Fit to dimensions"
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
    hbox103994549623663.add(label103994549623664);
    var labelori = new kony.ui.Label({
        "enableCache": false,
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
    }, {});
    var labelorisize = new kony.ui.Label({
        "enableCache": false,
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
    }, {});
    var line1 = new kony.ui.Line({
        "enableCache": false,
        "id": "line1",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var imgOrignal = new kony.ui.Image2({
        "enableCache": false,
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
    }, {});
    var line2 = new kony.ui.Line({
        "enableCache": false,
        "id": "line2",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [0, 5, 0, 5],
        "marginInPixel": true,
        "thickness": 1
    }, {});
    var labelimg = new kony.ui.Label({
        "enableCache": false,
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
    }, {});
    var labelimgsize = new kony.ui.Label({
        "enableCache": false,
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
    }, {});
    var line11827272688002 = new kony.ui.Line({
        "enableCache": false,
        "id": "line11827272688002",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var imgSqueezed = new kony.ui.Image2({
        "enableCache": false,
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
    }, {});
    var line193382457664 = new kony.ui.Line({
        "enableCache": false,
        "id": "line193382457664",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [0, 5, 0, 5],
        "marginInPixel": true,
        "thickness": 1
    }, {});
    var labelimgstr = new kony.ui.Label({
        "enableCache": false,
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
    }, {});
    var labelimgstrsize = new kony.ui.Label({
        "enableCache": false,
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
    }, {});
    var line3 = new kony.ui.Line({
        "enableCache": false,
        "id": "line3",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var imgStretched = new kony.ui.Image2({
        "enableCache": false,
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
    }, {});
    var line4 = new kony.ui.Line({
        "enableCache": false,
        "id": "line4",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "marginInPixel": false,
        "thickness": 1
    }, {});
    frmImgFitToDimensions.add(hbox103994549623663, labelori, labelorisize, line1, imgOrignal, line2, labelimg, labelimgsize, line11827272688002, imgSqueezed, line193382457664, labelimgstr, labelimgstrsize, line3, imgStretched, line4);
};

function frmImgFitToDimensionsGlobals() {
    frmImgFitToDimensions = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmImgFitToDimensions,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmImgFitToDimensions",
        "needAppMenu": true,
        "title": "Fit to Dimensions"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["hbox103994549623663", "imgOrignal", "imgSqueezed", "imgStretched", "label103994549623664", "labelimg", "labelimgsize", "labelimgstr", "labelimgstrsize", "labelori", "labelorisize", "line1", "line11827272688002", "line193382457664", "line2", "line3", "line4"],
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
    frmImgFitToDimensions.info = {
        "kuid": "p2kwiet12889314951372"
    };
};