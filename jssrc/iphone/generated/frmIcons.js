function addWidgetsfrmIcons() {
    var hbox1041822331233 = new kony.ui.Box({
        "id": "hbox1041822331233",
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
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image21041822331234 = new kony.ui.Image2({
        "id": "image21041822331234",
        "isVisible": true,
        "src": "cotiz.png"
    }, {
        "containerWeight": 33,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [1, 3, 0, 3],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 62,
        "referenceWidth": 62,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var image21041822331235 = new kony.ui.Image2({
        "id": "image21041822331235",
        "isVisible": true,
        "src": "emerg.png"
    }, {
        "containerWeight": 35,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [1, 3, 0, 3],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 62,
        "referenceWidth": 62,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var image21041822331236 = new kony.ui.Image2({
        "id": "image21041822331236",
        "isVisible": true,
        "src": "local.png"
    }, {
        "containerWeight": 32,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [1, 3, 0, 3],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 62,
        "referenceWidth": 62,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    hbox1041822331233.add(image21041822331234, image21041822331235, image21041822331236);
    var hbox1041822331237 = new kony.ui.Box({
        "id": "hbox1041822331237",
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
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image21041822331238 = new kony.ui.Image2({
        "id": "image21041822331238",
        "isVisible": true,
        "src": "login.png"
    }, {
        "containerWeight": 33,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 1, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 62,
        "referenceWidth": 62,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var image21041822331239 = new kony.ui.Image2({
        "id": "image21041822331239",
        "isVisible": true,
        "src": "prom.png"
    }, {
        "containerWeight": 35,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 2, 0],
        "marginInPixel": false,
        "padding": [0, 0, 2, 0],
        "paddingInPixel": false,
        "referenceHeight": 62,
        "referenceWidth": 62,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var image21041822331240 = new kony.ui.Image2({
        "id": "image21041822331240",
        "isVisible": true,
        "src": "tarj.png"
    }, {
        "containerWeight": 32,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 62,
        "referenceWidth": 62,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    hbox1041822331237.add(image21041822331238, image21041822331239, image21041822331240);
    frmIcons.add(hbox1041822331233, hbox1041822331237);
};

function frmIconsGlobals() {
    frmIcons = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmIcons,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmIcons",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Icons"
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
};