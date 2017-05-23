function addWidgetsfrmAnibottomtop() {
    frmAnibottomtop.add();
};

function frmAnibottomtopGlobals() {
    frmAnibottomtop = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnibottomtop,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmAnibottomtop",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "bottom-top"
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
    frmAnibottomtop.info = {
        "kuid": "p2kwiet1288931495126"
    };
};