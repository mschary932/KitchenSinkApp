function addWidgetsfrmAniWinPop() {
    frmAniWinPop.add();
};

function frmAniWinPopGlobals() {
    frmAniWinPop = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniWinPop,
        "enabledForIdleTimeout": false,
        "headers": [hBoxTitle],
        "id": "frmAniWinPop",
        "needAppMenu": true,
        "preShow": p2kwiet1288931495237_frmAniWinPop_preshow_seq0,
        "skin": "frmAniSkin",
        "title": "Pop"
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
    frmAniWinPop.info = {
        "kuid": "p2kwiet1288931495237"
    };
};