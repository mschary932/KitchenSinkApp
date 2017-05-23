function addWidgetsfrmSegSinleSelect() {
    var lblSegMulSelect = new kony.ui.Label({
        "id": "lblSegMulSelect",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "The below segment is having different section header templates & Single select behaviour"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var segSecHdrWidoutTmplate = new kony.ui.SegmentedUI2({
        "groupCells": false,
        "id": "segSecHdrWidoutTmplate",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495245,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
        "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
        "selectionBehaviorConfig": {
            "imageIdentifier": "imgChk",
            "selectedStateImage": "checkboxgreen.png",
            "unselectedStateImage": "checkboxwhite.png"
        },
        "separatorColor": "e9e9e914",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewConfig": {
            "coverflowConfig": {
                "isCircular": true
            }
        },
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "BAccName": "BAccName",
            "CreditLimit": "CreditLimit",
            "WithdrawLimit": "WithdrawLimit",
            "hbox120858598121942": "hbox120858598121942",
            "imgChk": "imgChk"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [2, 4, 2, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "dockSectionHeaders": false
    });
    var btnSegMulSelect = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnSegMulSelect",
        "isVisible": true,
        "onClick": p2kwiet12889314952800_btnSegMulSelect_onClick_seq0,
        "skin": "btnNormal",
        "text": "Click here to get the selected data"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [2, 4, 2, 4],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmSegSinleSelect.add(lblSegMulSelect, segSecHdrWidoutTmplate, btnSegMulSelect);
};

function frmSegSinleSelectGlobals() {
    frmSegSinleSelect = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegSinleSelect,
        "enabledForIdleTimeout": false,
        "id": "frmSegSinleSelect",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Segment"
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
    frmSegSinleSelect.info = {
        "kuid": "p2kwiet12889314952800"
    };
};