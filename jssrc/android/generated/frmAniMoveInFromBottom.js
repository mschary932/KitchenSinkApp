function addWidgetsfrmAniMoveInFromBottom() {
    frmAniMoveInFromBottom.add();
};

function frmAniMoveInFromBottomGlobals() {
    frmAniMoveInFromBottom = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAniMoveInFromBottom,
        "enabledForIdleTimeout": false,
        "id": "frmAniMoveInFromBottom",
        "needAppMenu": true,
        "skin": "frmAniSkin1",
        "title": "MoveInFromBottom"
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
        "titleBarSkin": "sknTitleBarSampleApp",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};