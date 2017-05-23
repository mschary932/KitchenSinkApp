function addWidgetsfrmScrollBox() {
    var hbxScrbxDemo = new kony.ui.Box({
        "id": "hbxScrbxDemo",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxWhite"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 4, 2, 2],
        "marginInPixel": false,
        "padding": [2, 2, 2, 3],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox1929296215104979 = new kony.ui.Box({
        "id": "vbox1929296215104979",
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
    var scrollbox1929296215104992 = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "scrollbox1929296215104992",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "showScrollbars": true
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true
    }, {
        "scrollArrowConfig": [null, null, null, null]
    });
    var image21929296215104997 = new kony.ui.Image2({
        "id": "image21929296215104997",
        "isVisible": true,
        "src": "frame1.png"
    }, {
        "containerWeight": 23,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var image21929296215105015 = new kony.ui.Image2({
        "id": "image21929296215105015",
        "isVisible": true,
        "src": "frame2.png"
    }, {
        "containerWeight": 23,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var image21929296215105021 = new kony.ui.Image2({
        "id": "image21929296215105021",
        "isVisible": true,
        "src": "frame3.png"
    }, {
        "containerWeight": 23,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var image21929296215105027 = new kony.ui.Image2({
        "id": "image21929296215105027",
        "isVisible": true,
        "src": "frame4.png"
    }, {
        "containerWeight": 23,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var image21929296215105055 = new kony.ui.Image2({
        "id": "image21929296215105055",
        "isVisible": true,
        "src": "frame5.png"
    }, {
        "containerWeight": 23,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var image21929296215105061 = new kony.ui.Image2({
        "id": "image21929296215105061",
        "isVisible": true,
        "src": "frame6.png"
    }, {
        "containerWeight": 23,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var image21929296215105087 = new kony.ui.Image2({
        "id": "image21929296215105087",
        "isVisible": true,
        "src": "frame7.png"
    }, {
        "containerWeight": 23,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var image21929296215105093 = new kony.ui.Image2({
        "id": "image21929296215105093",
        "isVisible": true,
        "src": "frame8.png"
    }, {
        "containerWeight": 23,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    scrollbox1929296215104992.add(image21929296215104997, image21929296215105015, image21929296215105021, image21929296215105027, image21929296215105055, image21929296215105061, image21929296215105087, image21929296215105093);
    var hbox68508043456323 = new kony.ui.Box({
        "id": "hbox68508043456323",
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
    var vbox68508043456324 = new kony.ui.Box({
        "id": "vbox68508043456324",
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
    var imgVertiScrollWall = new kony.ui.Image2({
        "id": "imgVertiScrollWall",
        "isVisible": true,
        "src": "wall.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 256,
        "referenceWidth": 256,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var imgVertiScrollCylinder = new kony.ui.Image2({
        "id": "imgVertiScrollCylinder",
        "isVisible": true,
        "src": "cross.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 286,
        "referenceWidth": 256,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    vbox68508043456324.add(imgVertiScrollWall, imgVertiScrollCylinder);
    hbox68508043456323.add(vbox68508043456324);
    vbox1929296215104979.add(scrollbox1929296215104992, hbox68508043456323);
    hbxScrbxDemo.add(vbox1929296215104979);
    frmScrollBox.add(hbxScrbxDemo);
};

function frmScrollBoxGlobals() {
    frmScrollBox = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmScrollBox,
        "enabledForIdleTimeout": false,
        "id": "frmScrollBox",
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
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
    frmScrollBox.info = {
        "kuid": "p2kwiet12889314955584"
    };
};