function addWidgetsfrmForm() {
    var hbox103994549623663 = new kony.ui.Box({
        "enableCache": false,
        "focusSkin": "headBox",
        "id": "hbox103994549623663",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "headBox"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label103994549623664 = new kony.ui.Label({
        "enableCache": false,
        "id": "label103994549623664",
        "isVisible": true,
        "skin": "headLabel",
        "text": "Form"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox103994549623663.add(label103994549623664);
    var lblName = new kony.ui.Label({
        "enableCache": false,
        "id": "lblName",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Name"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [7, 7, 7, 7],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var tbxName = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "enableCache": false,
        "focusSkin": "textBoxFocus",
        "id": "tbxName",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Username",
        "secureTextEntry": false,
        "skin": "textBoxNormal",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "marginInPixel": false,
        "padding": [1, 2, 1, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "autoFilter": false
    });
    var lblPasword = new kony.ui.Label({
        "enableCache": false,
        "id": "lblPasword",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Password"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [7, 7, 7, 7],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var tbxPassword = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "enableCache": false,
        "focusSkin": "textBoxFocus",
        "id": "tbxPassword",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Password",
        "secureTextEntry": true,
        "skin": "textBoxNormal",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "marginInPixel": false,
        "padding": [1, 2, 1, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "autoFilter": false
    });
    var lblCountry = new kony.ui.Label({
        "enableCache": false,
        "id": "lblCountry",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Country"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [7, 7, 7, 7],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var hbox121049260343 = new kony.ui.Box({
        "enableCache": false,
        "id": "hbox121049260343",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [3, 0, 3, 0],
        "marginInPixel": false,
        "padding": [1, 2, 1, 2],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var cmbCountry = new kony.ui.ComboBox({
        "enableCache": false,
        "focusSkin": "cboxFocus",
        "id": "cmbCountry",
        "isVisible": true,
        "masterData": [
            ["1", "Please Select.."],
            ["2", "Australia"],
            ["3", "India"],
            ["4", "Japan"],
            ["5", "Singapur"],
            ["6", "United Kingdom"],
            ["7", "United States"]
        ],
        "selectedKey": "1",
        "selectedKeyValue": ["1", "Please Select.."],
        "skin": "cboxNormal"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [1, 2, 1, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW
    });
    hbox121049260343.add(cmbCountry);
    var lblBDate = new kony.ui.Label({
        "enableCache": false,
        "id": "lblBDate",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "BirthDate"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [7, 7, 7, 7],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var calBDate = new kony.ui.Calendar({
        "dateFormat": "dd/MM/yyyy",
        "enableCache": false,
        "focusSkin": "calFocus",
        "id": "calBDate",
        "isVisible": true,
        "skin": "calNormal",
        "viewConfig": {
            "gridConfig": {
                "allowWeekendSelectable": true
            }
        },
        "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 0, 2, 0],
        "marginInPixel": false,
        "padding": [1, 2, 1, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblGender = new kony.ui.Label({
        "enableCache": false,
        "id": "lblGender",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Gender"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [7, 7, 7, 7],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var rbtGender = new kony.ui.RadioButtonGroup({
        "enableCache": false,
        "focusSkin": "radioNormal",
        "id": "rbtGender",
        "isVisible": true,
        "masterData": [
            ["1", "Male"],
            ["2", "Female"]
        ],
        "selectedKey": "1",
        "selectedKeyValue": ["1", "Male"],
        "skin": "radioNormal"
    }, {
        "containerWeight": 100,
        "hExpand": true,
        "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_HORIZONTAL,
        "margin": [2, 0, 3, 0],
        "marginInPixel": false,
        "padding": [0, 2, 1, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var lblTermsNConditions = new kony.ui.Label({
        "enableCache": false,
        "id": "lblTermsNConditions",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Terms & Conditions"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [7, 7, 7, 7],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var rTxTermsNConditions = new kony.ui.RichText({
        "enableCache": false,
        "id": "rTxTermsNConditions",
        "isVisible": true,
        "skin": "richNormal",
        "text": "This is a simple form consists of different widgets including Label, Textbox2, Combobox, Richtext, Calendar, hBox, Checkboxgroup, Radiobutton."
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [12, 6, 12, 12],
        "marginInPixel": true,
        "padding": [4, 4, 4, 4],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var chkAccept = new kony.ui.CheckBoxGroup({
        "enableCache": false,
        "focusSkin": "cbxAccept",
        "id": "chkAccept",
        "isVisible": true,
        "masterData": [
            ["1", "Accept"]
        ],
        "skin": "cbxAccept"
    }, {
        "containerWeight": 100,
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "margin": [2, 1, 2, 3],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "tickedImage": "chkboxchkd.png",
        "untickedImage": "chkbox.png"
    });
    frmForm.add(hbox103994549623663, lblName, tbxName, lblPasword, tbxPassword, lblCountry, hbox121049260343, lblBDate, calBDate, lblGender, rbtGender, lblTermsNConditions, rTxTermsNConditions, chkAccept);
};

function frmFormGlobals() {
    frmForm = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmForm,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmForm",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Form"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["calBDate", "chkAccept", "cmbCountry", "hbox103994549623663", "hbox121049260343", "label103994549623664", "lblBDate", "lblCountry", "lblGender", "lblName", "lblPasword", "lblTermsNConditions", "rbtGender", "rTxTermsNConditions", "tbxName", "tbxPassword"],
        "inTransitionConfig": {
            "transitionSpeed": 0
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "transitionSpeed": 0
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmForm.info = {
        "kuid": "p2kwiet12889314951002"
    };
};