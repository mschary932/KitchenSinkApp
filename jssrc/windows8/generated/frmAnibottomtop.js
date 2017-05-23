function addWidgetsfrmAnibottomtop() {
    frmAnibottomtop.add();
};

function frmAnibottomtopGlobals() {
    frmAnibottomtop = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnibottomtop,
        "enabledForIdleTimeout": false,
        "id": "frmAnibottomtop",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "bottom-top"
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
    frmAnibottomtop.info = {
        "kuid": "p2kwiet12889314953406"
    };
};