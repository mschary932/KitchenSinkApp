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
        "inTransitionConfig": {
            "formTransition": "none"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        },
        "retainScrollPosition": false
    });
    frmAnibottomtop.info = {
        "kuid": "p2kwiet1288931495126"
    };
};