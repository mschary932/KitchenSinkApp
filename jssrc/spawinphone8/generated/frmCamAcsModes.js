function addWidgetsfrmCamAcsModes() {
    var hbox103994549623663 = new kony.ui.Box({
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
        "marginInPixel": false,
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label103994549623664 = new kony.ui.Label({
        "id": "label103994549623664",
        "isVisible": true,
        "skin": "headLabel",
        "text": "Access modes"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
    });
    hbox103994549623663.add(label103994549623664);
    var hbox1930040990139390 = new kony.ui.Box({
        "id": "hbox1930040990139390",
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
    var img1CamAcc = new kony.ui.Image2({
        "id": "img1CamAcc",
        "isVisible": true
    }, {
        "containerWeight": 32,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 70,
        "referenceWidth": 110,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var img2CamAcc = new kony.ui.Image2({
        "id": "img2CamAcc",
        "isVisible": true
    }, {
        "containerWeight": 33,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 70,
        "referenceWidth": 110,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var img3CamAcc = new kony.ui.Image2({
        "id": "img3CamAcc",
        "isVisible": true
    }, {
        "containerWeight": 35,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 70,
        "referenceWidth": 110,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox1930040990139390.add(img1CamAcc, img2CamAcc, img3CamAcc);
    var lblFrmCamAccessModes = new kony.ui.Label({
        "id": "lblFrmCamAccessModes",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
    });
    frmCamAcsModes.add(hbox103994549623663, hbox1930040990139390, lblFrmCamAccessModes);
};

function frmCamAcsModesGlobals() {
    frmCamAcsModes = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCamAcsModes,
        "enabledForIdleTimeout": false,
        "id": "frmCamAcsModes",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Access modes"
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
    frmCamAcsModes.info = {
        "kuid": "p2kwiet1288931495546"
    };
};