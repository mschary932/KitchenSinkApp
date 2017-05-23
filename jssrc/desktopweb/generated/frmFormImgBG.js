function addWidgetsfrmFormImgBG() {
    frmFormImgBG.add();
};

function frmFormImgBGGlobals() {
    frmFormImgBG = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmFormImgBG,
        "enabledForIdleTimeout": false,
        "id": "frmFormImgBG",
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "needAppMenu": true,
        "skin": "frmImg",
        "title": "Image background"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 43, 0, 0],
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
    frmFormImgBG.info = {
        "kuid": "p2kwiet12889314955272"
    };
};