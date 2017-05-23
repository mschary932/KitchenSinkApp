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
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "titleBarAndroid",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmTabPageView.info = {
        "kuid": "p2kwiet12889314953012"
    };
};