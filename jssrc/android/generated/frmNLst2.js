function addWidgetsfrmNLst2() {
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
        "viewConfig": {
            "coverflowConfig": {
                "isCircular": true
            }
        },
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
        "marginInPixel": false,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "dockSectionHeaders": false
    });
    frmNLst2.add(segment21041822331231);
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
};