function addWidgetsfrmSegTableView() {
    var segment2117989725234750 = new kony.ui.SegmentedUI2({
        "data": [{
            "image2117989725234759": "b1.png",
            "label117989725234753": "Boys' Felix Sneakers",
            "label117989725234760": "Online Price:$10.00"
        }, {
            "image2117989725234759": "b2.png",
            "label117989725234753": "Boys DuPont F Sneaker",
            "label117989725234760": "Online Price:$15.00"
        }, {
            "image2117989725234759": "b3.png",
            "label117989725234753": "Women's Matte Slippers",
            "label117989725234760": "Online Price:$8.00"
        }, {
            "image2117989725234759": "b4.png",
            "label117989725234753": "Women's Buckle Boots",
            "label117989725234760": "Online Price:$20.00"
        }],
        "groupCells": true,
        "id": "segment2117989725234750",
        "isVisible": true,
        "needPageIndicator": true,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495249,
        "screenLevelWidget": true,
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
            "hbox117989725234754": "hbox117989725234754",
            "image2117989725234759": "image2117989725234759",
            "label117989725234753": "label117989725234753",
            "label117989725234760": "label117989725234760"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "dockSectionHeaders": false
    });
    frmSegTableView.add(segment2117989725234750);
};

function frmSegTableViewGlobals() {
    frmSegTableView = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegTableView,
        "enabledForIdleTimeout": false,
        "id": "frmSegTableView",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Table view"
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