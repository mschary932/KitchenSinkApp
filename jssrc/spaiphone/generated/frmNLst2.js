function addWidgetsfrmNLst2() {
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
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label103994549623664 = new kony.ui.Label({
        "id": "label103994549623664",
        "isVisible": true,
        "skin": "headLabel",
        "text": "Nested list"
    }, {
        "containerWeight": 97,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "marginInPixel": false,
        "padding": [1, 2, 1, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    hbox103994549623663.add(label103994549623664);
    var segment21041822331231 = new kony.ui.SegmentedUI2({
        "data": [{
            "image2192822373931792": "arrgrite.png",
            "label1041822331232": "NestedListInnerListItem1"
        }, {
            "image2192822373931792": "arrgrite.png",
            "label1041822331232": "NestedListInnerListItem2"
        }, {
            "image2192822373931792": "arrgrite.png",
            "label1041822331232": "NestedListInnerListItem3"
        }, {
            "image2192822373931792": "arrgrite.png",
            "label1041822331232": "NestedListInnerListItem4"
        }, {
            "image2192822373931792": "arrgrite.png",
            "label1041822331232": "NestedListInnerListItem5"
        }, {
            "image2192822373931792": "arrgrite.png",
            "label1041822331232": "NestedListInnerListItem6"
        }, {
            "image2192822373931792": "arrgrite.png",
            "label1041822331232": "NestedListInnerListItem7"
        }],
        "groupCells": false,
        "id": "segment21041822331231",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495181,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "hbox192822373931791": "hbox192822373931791",
            "image2192822373931792": "image2192822373931792",
            "label1041822331232": "label1041822331232"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    frmNLst2.add(hbox103994549623663, segment21041822331231);
};

function frmNLst2Globals() {
    frmNLst2 = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmNLst2,
        "enabledForIdleTimeout": false,
        "id": "frmNLst2",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Nested List"
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
    frmNLst2.info = {
        "kuid": "p2kwiet12889314951846"
    };
};