function addWidgetsfrmScrollBoxMenu() {
    var hbxScrbxDemo = new kony.ui.Box({
        "id": "hbxScrbxDemo",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox1927305024579169 = new kony.ui.Box({
        "id": "vbox1927305024579169",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var scrollbox1927305024579170 = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "scrollbox1927305024579170",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "scrollingEvents": {},
        "showScrollbars": true
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [2, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true
    }, {});
    var image21927305024579171 = new kony.ui.Image2({
        "id": "image21927305024579171",
        "isVisible": true,
        "src": "frame8.png"
    }, {
        "containerWeight": 17,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var image21927305024579490 = new kony.ui.Image2({
        "id": "image21927305024579490",
        "isVisible": true,
        "src": "frame7.png"
    }, {
        "containerWeight": 17,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var image21927305024579666 = new kony.ui.Image2({
        "id": "image21927305024579666",
        "isVisible": true,
        "src": "frame2.png"
    }, {
        "containerWeight": 17,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var image21927305024579738 = new kony.ui.Image2({
        "id": "image21927305024579738",
        "isVisible": true,
        "src": "frame3.png"
    }, {
        "containerWeight": 17,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var image21927305024579814 = new kony.ui.Image2({
        "id": "image21927305024579814",
        "isVisible": true,
        "src": "frame4.png"
    }, {
        "containerWeight": 17,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var image21927305024579882 = new kony.ui.Image2({
        "id": "image21927305024579882",
        "isVisible": true,
        "src": "frame5.png"
    }, {
        "containerWeight": 17,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var image21927305024579986 = new kony.ui.Image2({
        "id": "image21927305024579986",
        "isVisible": true,
        "src": "frame6.png"
    }, {
        "containerWeight": 17,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    scrollbox1927305024579170.add(image21927305024579171, image21927305024579490, image21927305024579666, image21927305024579738, image21927305024579814, image21927305024579882, image21927305024579986);
    var hbox1927305024581089 = new kony.ui.Box({
        "id": "hbox1927305024581089",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var scrollbox1927305024581946 = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "scrollbox1927305024581946",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "scrollingEvents": {},
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
    }, {});
    var image21927305024582563 = new kony.ui.Image2({
        "id": "image21927305024582563",
        "isVisible": true,
        "src": "wall.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 950,
        "referenceWidth": 950,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var image21927305024582989 = new kony.ui.Image2({
        "id": "image21927305024582989",
        "isVisible": true,
        "src": "cross.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 950,
        "referenceWidth": 950,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    scrollbox1927305024581946.add(image21927305024582563, image21927305024582989);
    hbox1927305024581089.add(scrollbox1927305024581946);
    vbox1927305024579169.add(scrollbox1927305024579170, hbox1927305024581089);
    hbxScrbxDemo.add(vbox1927305024579169);
    frmScrollBoxMenu.add(hbxScrbxDemo);
};

function frmScrollBoxMenuGlobals() {
    frmScrollBoxMenu = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmScrollBoxMenu,
        "enabledForIdleTimeout": false,
        "id": "frmScrollBoxMenu",
        "init": p2kwiet12889314954476_frmScrollBoxMenu_init_seq0,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "needAppMenu": true,
        "skin": "frm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["hbox1927305024581089", "hbxScrbxDemo", "image21927305024579171", "image21927305024579490", "image21927305024579666", "image21927305024579738", "image21927305024579814", "image21927305024579882", "image21927305024579986", "image21927305024582563", "image21927305024582989", "scrollbox1927305024579170", "scrollbox1927305024581946", "vbox1927305024579169"],
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "formTransition": "None"
        },
        "retainScrollPosition": false,
        "showBackButton": true,
        "titleBar": true
    });
    frmScrollBoxMenu.info = {
        "kuid": "frmScrollBoxMenuWindows8"
    };
};