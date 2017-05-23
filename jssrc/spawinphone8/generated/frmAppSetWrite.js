function addWidgetsfrmAppSetWrite() {
    var hbox1927359800106234 = new kony.ui.Box({
        "id": "hbox1927359800106234",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "marginInPixel": false,
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label1927359800106235 = new kony.ui.Label({
        "id": "label1927359800106235",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Message"
    }, {
        "containerWeight": 45,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
    });
    var txtAppSet = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "textBoxFocus",
        "id": "txtAppSet",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Enter Message",
        "secureTextEntry": false,
        "skin": "textBoxNormal",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 55,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoComplete": false,
        "autoCorrect": false
    });
    hbox1927359800106234.add(label1927359800106235, txtAppSet);
    var hbox1927359800106258 = new kony.ui.Box({
        "id": "hbox1927359800106258",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "marginInPixel": false,
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label1927359800106260 = new kony.ui.Label({
        "id": "label1927359800106260",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "View type"
    }, {
        "containerWeight": 45,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
    });
    var CmbAppSet = new kony.ui.ComboBox({
        "focusSkin": "cboxFocus",
        "id": "CmbAppSet",
        "isVisible": true,
        "masterData": [
            ["Table view", "Table view"],
            ["Page view", "Page view"],
            ["Coverflow view", "Coverflow view"],
            ["Cylinder view", "Cylinder view"],
            ["Linear view", "Linear view"],
            ["Stack view", "Stack view"]
        ],
        "selectedKey": "Table view",
        "selectedKeyValue": ["Table view", "Table view"],
        "skin": "cboxNormal"
    }, {
        "containerWeight": 55,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox1927359800106258.add(label1927359800106260, CmbAppSet);
    var button1927359800106315 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1927359800106315",
        "isVisible": true,
        "onClick": p2kwiet1288931495292_button1927359800106315_onClick_seq0,
        "skin": "btnNormal",
        "text": "Set Appsettings"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label1927359800106905 = new kony.ui.Label({
        "id": "label1927359800106905",
        "isVisible": true,
        "skin": "lblWhite80",
        "text": "* Please open the iOS Settings application from the home screen and observe the new settings for \"KitchenSink UI App\""
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
    });
    var lblAppAfterSet = new kony.ui.Label({
        "id": "lblAppAfterSet",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false
    });
    frmAppSetWrite.add(hbox1927359800106234, hbox1927359800106258, button1927359800106315, label1927359800106905, lblAppAfterSet);
};

function frmAppSetWriteGlobals() {
    frmAppSetWrite = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAppSetWrite,
        "enabledForIdleTimeout": false,
        "id": "frmAppSetWrite",
        "needAppMenu": true,
        "preShow": p2kwiet1288931495292_frmAppSetWrite_preshow_seq0,
        "skin": "frm",
        "title": "App settings"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
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
    frmAppSetWrite.info = {
        "kuid": "p2kwiet1288931495292"
    };
};