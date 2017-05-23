function addWidgetsfrmTtlbarBgImg() {
    var labeltitleBack1 = new kony.ui.Label({
        "id": "labeltitleBack1",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Look at the customized look of  titlebar (with background image) above."
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 7, 6, 6],
        "marginInPixel": true,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    frmTtlbarBgImg.add(labeltitleBack1);
};

function frmTtlbarBgImgGlobals() {
    frmTtlbarBgImg = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTtlbarBgImg,
        "enabledForIdleTimeout": false,
        "id": "frmTtlbarBgImg",
        "needAppMenu": true,
        "skin": "frm"
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
        "titleBarSkin": "titleAndroidBg",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmTtlbarBgImg.info = {
        "kuid": "p2kwiet12889314953182"
    };
};