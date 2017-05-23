function addWidgetsfrmAniWinSqueeze() {
    var imgAniWinSqueeze = new kony.ui.Image2({
        "enableCache": false,
        "id": "imgAniWinSqueeze",
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
    frmAniWinSqueeze.add(imgAniWinSqueeze);
};

function frmAniWinSqueezeGlobals() {
    frmAniWinSqueeze = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniWinSqueeze,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "headers": [hBoxTitle],
        "id": "frmAniWinSqueeze",
        "needAppMenu": true,
        "preShow": p2kwiet1288931495252_frmAniWinSqueeze_preshow_seq0,
        "skin": "frmSknTrans",
        "title": "Squeeze"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["imgAniWinSqueeze"],
        "inTransitionConfig": {
            "inTransition": "Squeeze",
            "transitionSpeed": 0
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "transitionSpeed": 0
        },
        "retainScrollPosition": false,
        "titleBar": false
    });
    frmAniWinSqueeze.info = {
        "kuid": "p2kwiet1288931495252"
    };
};