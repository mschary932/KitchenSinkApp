function addWidgetsfrmTabPageView() {
    frmTabPageView.add();
};

function frmTabPageViewGlobals() {
    frmTabPageView = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTabPageView,
        "enabledForIdleTimeout": false,
        "id": "frmTabPageView",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Page view"
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
    frmTabPageView.info = {
        "kuid": "p2kwiet12889314953012"
    };
};