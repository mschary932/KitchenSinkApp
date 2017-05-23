function addWidgetsfrm3DObj() {
    var label118082077326662 = new kony.ui.Label({
        "id": "label118082077326662",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Click and hold on the selected item to enter walk-through mode"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    frm3DObj.add(label118082077326662);
};

function frm3DObjGlobals() {
    frm3DObj = new kony.ui.Form2({
        "addWidgets": addWidgetsfrm3DObj,
        "enabledForIdleTimeout": false,
        "id": "frm3DObj",
        "needAppMenu": true,
        "skin": "frm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
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
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frm3DObj.info = {
        "kuid": "p2kwiet12889314958"
    };
};