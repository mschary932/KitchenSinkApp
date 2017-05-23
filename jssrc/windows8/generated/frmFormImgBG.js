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
        "animateHeaderFooter": false,
        "backButtonSkin": "btnBack",
        "directChildrenIDs": ["hbxFormWidTabSPA", "lblFormWidTabSPA"],
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "formTransition": "None"
        },
        "retainScrollPosition": false,
        "showBackButton": true,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp"
    });
    frmFormImgBG.info = {
        "kuid": "p2kwiet12889314953870"
    };
};