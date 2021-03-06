function addWidgetsfrmUInterface() {
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
    var sbxWidgetCategory = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "sbxWidgetCategory",
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
    var hbox192926642421558 = new kony.ui.Box({
        "id": "hbox192926642421558",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hbxTransWithGrayBorder"
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
    var btnContainerWidTab = new kony.ui.Button({
        "focusSkin": "btnUICatTabFoc",
        "id": "btnContainerWidTab",
        "isVisible": true,
        "onClick": p2kwiet12889314954930_btnContainerWidTab_onClick_seq0,
        "skin": "btnUIWidgetsCatTab",
        "text": "Container widgets"
    }, {
        "containerWeight": 82,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var image2192926642421560 = new kony.ui.Image2({
        "id": "image2192926642421560",
        "isVisible": true,
        "src": "tabdown.png"
    }, {
        "containerWeight": 18,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox192926642421558.add(btnContainerWidTab, image2192926642421560);
    var segContainerWidgets = new kony.ui.SegmentedUI2({
        "data": [{
            "lblContainerWidget": "Form"
        }, {
            "lblContainerWidget": "Tabs"
        }, {
            "lblContainerWidget": "ScrollBox"
        }],
        "groupCells": false,
        "id": "segContainerWidgets",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet12889314954930_segContainerWidgets_onRowClick_seq0,
        "retainSelection": true,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495353,
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
    var hbox192926642421598 = new kony.ui.Box({
        "id": "hbox192926642421598",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hbxTransWithGrayBorder"
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
    var btnBasicWidTab = new kony.ui.Button({
        "focusSkin": "btnUICatTabFoc",
        "id": "btnBasicWidTab",
        "isVisible": true,
        "onClick": p2kwiet12889314954930_btnBasicWidTab_onClick_seq0,
        "skin": "btnUIWidgetsCatTab",
        "text": "Basic widgets"
    }, {
        "containerWeight": 82,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var image2192926642421602 = new kony.ui.Image2({
        "id": "image2192926642421602",
        "isVisible": true,
        "src": "tabdown.png"
    }, {
        "containerWeight": 18,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox192926642421598.add(btnBasicWidTab, image2192926642421602);
    var segBasicWidgets = new kony.ui.SegmentedUI2({
        "data": [{
            "lblBasicWidget": "Button"
        }, {
            "lblBasicWidget": "Calendar"
        }, {
            "lblBasicWidget": "CheckBox"
        }, {
            "lblBasicWidget": "ComboBox"
        }, {
            "lblBasicWidget": "DataGrid"
        }, {
            "lblBasicWidget": "Image"
        }, {
            "lblBasicWidget": "Label"
        }, {
            "lblBasicWidget": "Link"
        }, {
            "lblBasicWidget": "ListBox"
        }, {
            "lblBasicWidget": "RadioButtonGroup"
        }, {
            "lblBasicWidget": "RichText"
        }, {
            "lblBasicWidget": "Slider"
        }, {
            "lblBasicWidget": "TextArea"
        }, {
            "lblBasicWidget": "TextBox"
        }, {
            "lblBasicWidget": "Icons"
        }],
        "groupCells": false,
        "id": "segBasicWidgets",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet12889314954930_segBasicWidgets_onRowClick_seq0,
        "retainSelection": true,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495355,
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
            "lblBasicWidget": "lblBasicWidget"
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
    var hbox192926642421742 = new kony.ui.Box({
        "id": "hbox192926642421742",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hbxTransWithGrayBorder"
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
    var btnAdvancedWidTab = new kony.ui.Button({
        "focusSkin": "btnUICatTabFoc",
        "id": "btnAdvancedWidTab",
        "isVisible": true,
        "onClick": p2kwiet12889314954930_btnAdvancedWidTab_onClick_seq0,
        "skin": "btnUIWidgetsCatTab",
        "text": "Advanced widgets"
    }, {
        "containerWeight": 82,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var image2192926642421746 = new kony.ui.Image2({
        "id": "image2192926642421746",
        "isVisible": true,
        "src": "tabdown.png"
    }, {
        "containerWeight": 18,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox192926642421742.add(btnAdvancedWidTab, image2192926642421746);
    var segAdvancedWidgets = new kony.ui.SegmentedUI2({
        "data": [{
            "lblAdvancedWidget": "Segment"
        }, {
            "lblAdvancedWidget": "ImageGallery"
        }, {
            "lblAdvancedWidget": "HzImageStrip"
        }, {
            "lblAdvancedWidget": "Map"
        }, {
            "lblAdvancedWidget": "Browser"
        }],
        "groupCells": false,
        "id": "segAdvancedWidgets",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet12889314954930_segAdvancedWidgets_onRowClick_seq0,
        "retainSelection": true,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "rowTemplate": vbox1288931495357,
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
            "lblAdvancedWidget": "lblAdvancedWidget"
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
    sbxWidgetCategory.add(hbox192926642421558, segContainerWidgets, hbox192926642421598, segBasicWidgets, hbox192926642421742, segAdvancedWidgets);
    var sbxWidgetDetails = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "sbxWidgetDetails",
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
    sbxWidgetDetails.add();
    hbox11819528318299.add(sbxWidgetCategory, sbxWidgetDetails);
    frmUInterface.add(hbox11819528318299);
};

function frmUInterfaceGlobals() {
    frmUInterface = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmUInterface,
        "enabledForIdleTimeout": false,
        "id": "frmUInterface",
        "needAppMenu": true,
        "postShow": p2kwiet12889314954930_frmUInterface_postshow_seq0,
        "preShow": p2kwiet12889314954930_frmUInterface_preshow_seq0,
        "skin": "frm",
        "title": "User interface"
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
    frmUInterface.info = {
        "kuid": "frmUInterfaceAndroid"
    };
};