function addWidgetsfrmCheckbox() {
    var hbxCheckBoxes = new kony.ui.Box({
        "id": "hbxCheckBoxes",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox192926642422365 = new kony.ui.Box({
        "id": "vbox192926642422365",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label11798972525642 = new kony.ui.Label({
        "id": "label11798972525642",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Default view"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
    });
    var checkboxgroup11798972524954 = new kony.ui.CheckBoxGroup({
        "focusSkin": "cbxNormal",
        "id": "checkboxgroup11798972524954",
        "isVisible": true,
        "masterData": [
            ["1", "value1"],
            ["2", "value2"],
            ["3", "value3"]
        ],
        "selectedKeys": ["1"],
        "skin": "cbxNormal"
    }, {
        "containerWeight": 100,
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label117989725237860 = new kony.ui.Label({
        "id": "label117989725237860",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Horizontal orientation"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
    });
    var checkboxgroup192914726024070 = new kony.ui.CheckBoxGroup({
        "focusSkin": "cbxFocus",
        "id": "checkboxgroup192914726024070",
        "isVisible": true,
        "masterData": [
            ["key1", "Value1"],
            ["key2", "Value2"],
            ["key3", "Value3"]
        ],
        "selectedKeys": ["key1"],
        "skin": "cbxNormal"
    }, {
        "containerWeight": 100,
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_HORIZONTAL,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    vbox192926642422365.add(label11798972525642, checkboxgroup11798972524954, label117989725237860, checkboxgroup192914726024070);
    hbxCheckBoxes.add(vbox192926642422365);
    frmCheckbox.add(hbxCheckBoxes);
};

function frmCheckboxGlobals() {
    frmCheckbox = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCheckbox,
        "enabledForIdleTimeout": false,
        "id": "frmCheckbox",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Checkbox"
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
    frmCheckbox.info = {
        "kuid": "p2kwiet12889314953691"
    };
};