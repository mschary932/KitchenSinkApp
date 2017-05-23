function addWidgetsfrmAnitoprightbottom() {
    frmAnitoprightbottom.add();
};

function frmAnitoprightbottomGlobals() {
    frmAnitoprightbottom = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnitoprightbottom,
        "enabledForIdleTimeout": false,
        "id": "frmAnitoprightbottom",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "topright-bottom"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
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
    frmAnitoprightbottom.info = {
        "kuid": "p2kwiet1288931495222"
    };
};