function addWidgetsfrmAnileft() {
    frmAnileft.add();
};

function frmAnileftGlobals() {
    frmAnileft = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnileft,
        "enabledForIdleTimeout": false,
        "headers": [hbox192735980024418],
        "id": "frmAnileft",
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "left"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "inTransitionConfig": {
            "formTransition": "leftCenter"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        },
        "retainScrollPosition": false
    });
    frmAnileft.info = {
        "kuid": "p2kwiet12889314955068"
    };
};