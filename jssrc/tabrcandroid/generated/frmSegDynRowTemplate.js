function addWidgetsfrmSegDynRowTemplate() {
    var lblSegDynRowTemplates = new kony.ui.Label({
        "id": "lblSegDynRowTemplates",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Click on any row to change its row template dynamically."
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var segDynamicRowTemp = new kony.ui.SegmentedUI2({
        "groupCells": false,
        "id": "segDynamicRowTemp",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet12889314954506_segDynamicRowTemp_onRowClick_seq0,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
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
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW
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
    frmSegDynRowTemplate.add(lblSegDynRowTemplates, segDynamicRowTemp);
};

function frmSegDynRowTemplateGlobals() {
    frmSegDynRowTemplate = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegDynRowTemplate,
        "enabledForIdleTimeout": false,
        "id": "frmSegDynRowTemplate",
        "init": p2kwiet12889314954506_frmSegDynRowTemplate_init_seq0,
        "needAppMenu": true,
        "skin": "frm"
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
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmSegDynRowTemplate.info = {
        "kuid": "p2kwiet12889314954506"
    };
};