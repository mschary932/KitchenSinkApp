function addWidgetsfrmFormImgBG() {
    frmFormImgBG.add();
};

function frmFormImgBGGlobals() {
    frmFormImgBG = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmFormImgBG,
        "enabledForIdleTimeout": false,
        "id": "frmFormImgBG",
        "needAppMenu": true,
        "skin": "frmImg",
        "title": "Image background"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
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
        "titleBarSkin": "titleBarAndroid",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmFormImgBG.info = {
        "kuid": "p2kwiet12889314953870"
    };
};