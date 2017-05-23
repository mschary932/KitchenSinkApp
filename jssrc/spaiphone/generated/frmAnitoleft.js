function addWidgetsfrmAnitoleft() {
    frmAnitoleft.add();
};

function frmAnitoleftGlobals() {
    frmAnitoleft = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnitoleft,
        "enabledForIdleTimeout": false,
        "id": "frmAnitoleft",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "to left"
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
    frmAnitoleft.info = {
        "kuid": "p2kwiet1288931495216"
    };
};