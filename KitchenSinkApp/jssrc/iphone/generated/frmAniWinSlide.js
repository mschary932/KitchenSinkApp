function addWidgetsfrmAniWinSlide() {
    var imgAniWinSlide = new kony.ui.Image2({
        "id": "imgAniWinSlide",
        "isVisible": true,
        "src": "cross.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 650,
        "referenceWidth": 480,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    frmAniWinSlide.add(imgAniWinSlide);
};

function frmAniWinSlideGlobals() {
    frmAniWinSlide = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniWinSlide,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmAniWinSlide",
        "needAppMenu": true,
        "preShow": p2kwiet974599865248_frmAniWinSlide_preshow_seq0,
        "skin": "frmSknTrans",
        "title": "Slide"
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
        "titleBar": true
    });
    frmAniWinSlide.info = {
        "kuid": "p2kwiet974599865248"
    };
};