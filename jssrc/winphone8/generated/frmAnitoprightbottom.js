function addWidgetsfrmAnitoprightbottom() {
    frmAnitoprightbottom.add();
};

function frmAnitoprightbottomGlobals() {
    frmAnitoprightbottom = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnitoprightbottom,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAnitoprightbottom",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "topright-bottom"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "inTransitionConfig": {
            "transitionSpeed": 0
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "transitionSpeed": 0
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmAnitoprightbottom.info = {
        "kuid": "p2kwiet1288931495222"
    };
};