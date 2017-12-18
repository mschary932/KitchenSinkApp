function addWidgetsfrmNList() {
    var segFirst = new kony.ui.SegmentedUI2({
        "data": [{
            "image2192822373931790": "arrgrite.png",
            "lblFirst": "NestedListBox1"
        }, {
            "image2192822373931790": "arrgrite.png",
            "lblFirst": "NestedListBox2"
        }, {
            "image2192822373931790": "arrgrite.png",
            "lblFirst": "NestedListBox3"
        }, {
            "image2192822373931790": "arrgrite.png",
            "lblFirst": "NestedListBox4"
        }, {
            "image2192822373931790": "arrgrite.png",
            "lblFirst": "NestedListBox4"
        }, {
            "image2192822373931790": "arrgrite.png",
            "lblFirst": "NestedListBox6"
        }],
        "groupCells": false,
        "id": "segFirst",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet12889314951835_segFirst_onRowClick_seq0,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495179,
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
            "hbox192822373931789": "hbox192822373931789",
            "image2192822373931790": "image2192822373931790",
            "lblFirst": "lblFirst"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "dockSectionHeaders": false
    });
    frmNList.add(segFirst);
};

function frmNListGlobals() {
    frmNList = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmNList,
        "enabledForIdleTimeout": false,
        "id": "frmNList",
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