function addWidgetsfrmAniWinRotate3DSingle() {
    var image2685080434508114 = new kony.ui.Image2({
        "id": "image2685080434508114",
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
    frmAniWinRotate3DSingle.add(image2685080434508114);
};

function frmAniWinRotate3DSingleGlobals() {
    frmAniWinRotate3DSingle = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniWinRotate3DSingle,
        "enabledForIdleTimeout": false,
        "id": "frmAniWinRotate3DSingle",
        "needAppMenu": true,
        "preShow": p2kwiet1288931495244_frmAniWinRotate3DSingle_preshow_seq0,
        "skin": "frmSknTrans",
        "title": "Rotate3DSingle"
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
    frmAniWinRotate3DSingle.info = {
        "kuid": "p2kwiet1288931495244"
    };
};