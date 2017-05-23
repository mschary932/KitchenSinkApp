function addWidgetsfrmAnibottom() {
    frmAnibottom.add();
};

function frmAnibottomGlobals() {
    frmAnibottom = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnibottom,
        "enabledForIdleTimeout": false,
        "headers": [hbox192735980024418],
        "id": "frmAnibottom",
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "bottom"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "inTransitionConfig": {
            "formTransition": "bottomCenter"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        },
        "retainScrollPosition": false
    });
    frmAnibottom.info = {
        "kuid": "p2kwiet12889314955065"
    };
};