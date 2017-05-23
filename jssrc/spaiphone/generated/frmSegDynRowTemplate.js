function addWidgetsfrmSegDynRowTemplate() {
    var label117709689852702 = new kony.ui.Label({
        "id": "label117709689852702",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Click on any row to change its row template dynamically."
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 4, 2, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var segDynamicRowTemp = new kony.ui.SegmentedUI2({
        "groupCells": false,
        "id": "segDynamicRowTemp",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet12889314952505_segDynamicRowTemp_onRowClick_seq0,
        "retainSelection": false,
        "rowFocusSkin": "rowFocusSkin",
        "rowSkin": "rowSkin",
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sectionHeaderSkin",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "e9e9e900",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW
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
    frmSegDynRowTemplate.add(label117709689852702, segDynamicRowTemp);
};

function frmSegDynRowTemplateGlobals() {
    frmSegDynRowTemplate = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSegDynRowTemplate,
        "enabledForIdleTimeout": false,
        "id": "frmSegDynRowTemplate",
        "init": p2kwiet12889314952505_frmSegDynRowTemplate_init_seq0,
        "needAppMenu": true,
        "skin": "frm",
        "title": "Row templates"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
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
    frmSegDynRowTemplate.info = {
        "kuid": "p2kwiet12889314952505"
    };
};