function addWidgetsfrmAniDoor() {
    frmAniDoor.add();
};

function frmAniDoorGlobals() {
    frmAniDoor = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniDoor,
        "enabledForIdleTimeout": false,
        "id": "frmAniDoor",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "Door"
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
    frmAniDoor.info = {
        "kuid": "p2kwiet1288931495140"
    };
};