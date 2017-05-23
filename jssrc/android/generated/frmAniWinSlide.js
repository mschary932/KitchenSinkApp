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
    }, {});
    frmAniWinSlide.add(imgAniWinSlide);
};

function frmAniWinSlideGlobals() {
    frmAniWinSlide = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniWinSlide,
        "enabledForIdleTimeout": false,
        "id": "frmAniWinSlide",
        "needAppMenu": true,
        "preShow": p2kwiet1288931495248_frmAniWinSlide_preshow_seq0,
        "skin": "frmSknTrans",
        "title": "Slide"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
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
    frmAniWinSlide.info = {
        "kuid": "p2kwiet1288931495248"
    };
};