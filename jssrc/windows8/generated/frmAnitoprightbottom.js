function addWidgetsfrmAnitoprightbottom() {
    frmAnitoprightbottom.add();
};

function frmAnitoprightbottomGlobals() {
    frmAnitoprightbottom = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnitoprightbottom,
        "enabledForIdleTimeout": false,
        "id": "frmAnitoprightbottom",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "topright-bottom"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "formTransition": "None"
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmAnitoprightbottom.info = {
        "kuid": "p2kwiet12889314953510"
    };
};