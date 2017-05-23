function addWidgetsfrmLstItems() {
    var segFirst = new kony.ui.SegmentedUI2({
        "data": [{
            "image2192822373931794": "arrgrite.png",
            "lblFirst": "ListItem1"
        }, {
            "image2192822373931794": "arrgrite.png",
            "lblFirst": "ListItem2"
        }, {
            "image2192822373931794": "arrgrite.png",
            "lblFirst": "ListItem3"
        }, {
            "image2192822373931794": "arrgrite.png",
            "lblFirst": "ListItem4"
        }, {
            "image2192822373931794": "arrgrite.png",
            "lblFirst": "ListItem5"
        }, {
            "image2192822373931794": "arrgrite.png",
            "lblFirst": "ListItem6"
        }],
        "groupCells": false,
        "id": "segFirst",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495177,
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
            "hbox192822373931793": "hbox192822373931793",
            "image2192822373931794": "image2192822373931794",
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
    frmLstItems.add(segFirst);
};

function frmLstItemsGlobals() {
    frmLstItems = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLstItems,
        "enabledForIdleTimeout": false,
        "id": "frmLstItems",
        "needAppMenu": true,
        "skin": "frm",
        "title": "List"
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
    frmLstItems.info = {
        "kuid": "p2kwiet12889314951818"
    };
};