function addWidgetsfrmDeviceFeatures() {
    var hbox11819528318299 = new kony.ui.Box({
        "id": "hbox11819528318299",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var sbxDevFeaturesCategory = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "sbxDevFeaturesCategory",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "scrollingEvents": {},
        "showScrollbars": true,
        "skin": "sbxWidCatTabletGray"
    }, {
        "containerHeight": 100,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 30,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true
    }, {});
    var segDeviceFeatures = new kony.ui.SegmentedUI2({
        "data": [{
            "lblContainerWidget": "Accelerometer"
        }, {
            "lblContainerWidget": "Camera"
        }, {
            "lblContainerWidget": "Geo location"
        }, {
            "lblContainerWidget": "Email"
        }, {
            "lblContainerWidget": "Address book"
        }, {
            "lblContainerWidget": "Device info"
        }, {
            "lblContainerWidget": "Local storage"
        }, {
            "lblContainerWidget": "Web SQL"
        }, {
            "lblContainerWidget": "Crypto libraries"
        }, {
            "lblContainerWidget": "Asynchronous data access"
        }],
        "groupCells": false,
        "id": "segDeviceFeatures",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet12889314953785_segDeviceFeatures_onRowClick_seq0,
        "retainSelection": true,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495279,
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
            "lblContainerWidget": "lblContainerWidget"
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
    }, {
        "dockSectionHeaders": false
    });
    sbxDevFeaturesCategory.add(segDeviceFeatures);
    var sbxDevFeatureDeatils = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "sbxDevFeatureDeatils",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "scrollingEvents": {},
        "showScrollbars": true
    }, {
        "containerHeight": 100,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 70,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true
    }, {});
    sbxDevFeatureDeatils.add();
    hbox11819528318299.add(sbxDevFeaturesCategory, sbxDevFeatureDeatils);
    frmDeviceFeatures.add(hbox11819528318299);
};

function frmDeviceFeaturesGlobals() {
    frmDeviceFeatures = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDeviceFeatures,
        "enabledForIdleTimeout": false,
        "id": "frmDeviceFeatures",
        "init": p2kwiet12889314953785_frmDeviceFeatures_init_seq0,
        "needAppMenu": true,
        "skin": "frm",
        "title": "Device features"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
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
    frmDeviceFeatures.info = {
        "kuid": "frmDeviceFeaturesAndroid"
    };
};