function addWidgetsfrmAnimations() {
    frmAnimations.add();
};

function frmAnimationsGlobals() {
    frmAnimations = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnimations,
        "enabledForIdleTimeout": false,
        "id": "frmAnimations",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Animations"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["hbxAniTabSPA", "lblAniTabSPA", "segAndriodAni", "segiPadAni", "segSPAAniList"],
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "formTransition": "None"
        },
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp"
    });
    frmAnimations.info = {
        "kuid": "p2kwiet12889314953460"
    };
};