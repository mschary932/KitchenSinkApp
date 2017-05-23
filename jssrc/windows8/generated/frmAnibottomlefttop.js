function addWidgetsfrmAnibottomlefttop() {
    frmAnibottomlefttop.add();
};

function frmAnibottomlefttopGlobals() {
    frmAnibottomlefttop = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnibottomlefttop,
        "enabledForIdleTimeout": false,
        "id": "frmAnibottomlefttop",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "bottomleft-top"
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
    frmAnibottomlefttop.info = {
        "kuid": "p2kwiet12889314953403"
    };
};