function addWidgetsfrmSecHdrWidoutTemplates() {
    var hbox103994549623663 = new kony.ui.Box({
        "focusSkin": "headBox",
        "id": "hbox103994549623663",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "headBox"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "marginInPixel": false,
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label103994549623664 = new kony.ui.Label({
        "id": "label103994549623664",
        "isVisible": true,
        "skin": "headLabel",
        "text": "Section header templates"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
    });
    hbox103994549623663.add(label103994549623664);
    var lblSegMulSelect = new kony.ui.Label({
        "id": "lblSegMulSelect",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "The below segment is having different section header templates & Multi select behaviour"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
    });
    var segSecHdrWidoutTmplate = new kony.ui.SegmentedUI2({
        "groupCells": false,
        "id": "segSecHdrWidoutTmplate",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495193,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
        "selectionBehavior": constants.SEGUI_MULTI_SELECT_BEHAVIOR,
        "selectionBehaviorConfig": {
            "imageIdentifier": "imgChk",
            "selectedStateImage": "checkboxgreen.png",
            "unselectedStateImage": "checkboxwhite.png"
        },
        "separatorColor": "e9e9e914",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
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
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var btnSegMulSelect = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnSegMulSelect",
        "isVisible": true,
        "onClick": p2kwiet12889314952433_btnSegMulSelect_onClick_seq0,
        "skin": "btnNormal",
        "text": "Click here to get the selected data"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmSecHdrWidoutTemplates.add(hbox103994549623663, lblSegMulSelect, segSecHdrWidoutTmplate, btnSegMulSelect);
};

function frmSecHdrWidoutTemplatesGlobals() {
    frmSecHdrWidoutTemplates = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSecHdrWidoutTemplates,
        "enabledForIdleTimeout": false,
        "id": "frmSecHdrWidoutTemplates",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Segment"
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
    frmSecHdrWidoutTemplates.info = {
        "kuid": "p2kwiet12889314952433"
    };
};