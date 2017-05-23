function addWidgetsfrmSegActionableWidgets() {
    var segment2684597951820494 = new kony.ui.SegmentedUI2({
        "data": [{
            "imgActionButton": "Seller list",
            "imgActionImage": "image1.png",
            "imgActionLink": "Audi"
        }, {
            "imgActionButton": "Seller list",
            "imgActionImage": "image10.png",
            "imgActionLink": "Ford"
        }, {
            "imgActionButton": "Seller list",
            "imgActionImage": "image2.png",
            "imgActionLink": "Skoda"
        }, {
            "imgActionButton": "Seller list",
            "imgActionImage": "image20.png",
            "imgActionLink": "Maruthi"
        }, {
            "imgActionButton": "Seller list",
            "imgActionImage": "image3.png",
            "imgActionLink": "Benz"
        }, {
            "imgActionButton": "Seller list",
            "imgActionImage": "image18.png",
            "imgActionLink": "Rolls royce"
        }],
        "groupCells": false,
        "id": "segment2684597951820494",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet12889314952439_segment2684597951820494_onRowClick_seq0,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": hbxActionTemplate,
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
                "isCircular": true,
                "projectionAngle": 60
            }
        },
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "actionWidsTemplate": "actionWidsTemplate",
            "hbxActionTemplate": "hbxActionTemplate",
            "imgActionButton": "imgActionButton",
            "imgActionImage": "imgActionImage",
            "imgActionLink": "imgActionLink"
        }
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "dockSectionHeaders": false
    });
    frmSegActionableWidgets.add(segment2684597951820494);
};

function frmSegActionableWidgetsGlobals() {
    frmSegActionableWidgets = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegActionableWidgets,
        "enabledForIdleTimeout": false,
        "id": "frmSegActionableWidgets",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Segment with actionable widgets"
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
        "titleBarSkin": "titleBarAndroid",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmSegActionableWidgets.info = {
        "kuid": "p2kwiet12889314952439"
    };
};