function addWidgetsfrmAniWinPop() {
    frmAniWinPop.add();
};

function frmAniWinPopGlobals() {
    frmAniWinPop = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniWinPop,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "headers": [hBoxTitle],
        "id": "frmAniWinPop",
        "needAppMenu": true,
        "preShow": p2kwiet1288931495237_frmAniWinPop_preshow_seq0,
        "skin": "frmAniSkin",
        "title": "Pop"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "inTransitionConfig": {
            "inTransition": "popin",
            "transitionSpeed": 0
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "outTransition": "popout",
            "transitionSpeed": 0
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmAniWinPop.info = {
        "kuid": "p2kwiet1288931495237"
    };
};