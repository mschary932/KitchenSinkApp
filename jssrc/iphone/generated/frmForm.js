function addWidgetsfrmForm() {
    var lblName = new kony.ui.Label({
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
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var tbxName = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
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
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "autoCorrect": false,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var lblPasword = new kony.ui.Label({
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
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var tbxPassword = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
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
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "autoCorrect": false,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var lblCountry = new kony.ui.Label({
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
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbox121049260343 = new kony.ui.Box({
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
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var cmbCountry = new kony.ui.ComboBox({
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
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "groupCells": false,
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW
    });
    hbox121049260343.add(cmbCountry);
    var lblBDate = new kony.ui.Label({
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
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var calBDate = new kony.ui.Calendar({
        "dateFormat": "dd/MM/yyyy",
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
        "margin": [3, 0, 3, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "mode": constants.CALENDAR_WHEEL_ONLY_DATE
    });
    var lblGender = new kony.ui.Label({
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
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var rbtGender = new kony.ui.RadioButtonGroup({
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
        "margin": [3, 0, 3, 0],
        "marginInPixel": false,
        "padding": [1, 0, 1, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "groupCells": false,
        "viewType": constants.RADIOGROUP_VIEW_TYPE_LISTVIEW
    });
    var lblTermsNConditions = new kony.ui.Label({
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
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var rTxTermsNConditions = new kony.ui.RichText({
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
        "padding": [6, 6, 6, 6],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var chkAccept = new kony.ui.CheckBoxGroup({
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
        "margin": [4, 0, 2, 3],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "groupCells": false,
        "viewType": constants.CHECKBOX_VIEW_TYPE_ONOFFSWITCH
    });
    frmForm.add(lblName, tbxName, lblPasword, tbxPassword, lblCountry, hbox121049260343, lblBDate, calBDate, lblGender, rbtGender, lblTermsNConditions, rTxTermsNConditions, chkAccept);
};

function frmFormGlobals() {
    frmForm = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmForm,
        "bounces": true,
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
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "extendBottom": false,
        "extendTop": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": 100,
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "retainScrollPosition": false,
        "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "title",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "none"
        },
        "titleBarSkin": "sknTitleBarSampleApp"
    });
};