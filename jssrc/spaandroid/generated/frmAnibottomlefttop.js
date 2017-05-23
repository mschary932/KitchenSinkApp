function addWidgetsfrmAnibottomlefttop() {
    frmAnibottomlefttop.add();
};

function frmAnibottomlefttopGlobals() {
    frmAnibottomlefttop = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnibottomlefttop,
        "enabledForIdleTimeout": false,
        "id": "frmAnibottomlefttop",
        "needAppMenu": true,
        "skin": "frmAniSkin",
        "title": "bottomleft-top"
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
    frmAnibottomlefttop.info = {
        "kuid": "p2kwiet1288931495123"
    };
};