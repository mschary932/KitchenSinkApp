function addWidgetsfrmTabScreenLevel() {
    var tabpaneDefaultTabFS = new kony.ui.TabPane({
        "activeFocusSkin": "tabFocus",
        "activeSkin": "tabActive",
        "enableCache": false,
        "id": "tabpaneDefaultTabFS",
        "inactiveSkin": "tabInactive",
        "isVisible": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "screenLevelWidget": true,
        "viewConfig": {
            "collapsibleViewConfig": {
                "imagePosition": constants.TABPANE_COLLAPSIBLE_IMAGE_POSITION_RIGHT,
                "tabNameAlignment": constants.TABPANE_COLLAPSIBLE_TABNAME_ALIGNMENT_LEFT,
                "toggleTabs": false
            },
            "pageViewConfig": {
                "needPageIndicator": true
            },
            "tabViewConfig": {
                "headerContainerWeight": "50",
                "headerPosition": constants.TAB_HEADER_POSITION_TOP
            },
        },
        "viewType": constants.TABPANE_VIEW_TYPE_TABVIEW
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "margin": [2, 4, 2, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var tabDefaultTabFS = new kony.ui.Box({
        "clipBounds": true,
        "enableCache": false,
        "id": "tabDefaultTabFS",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "tabskin",
        "spacing": 1,
        "tabName": "Tab1"
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true
    }, {});
    var labelTS = new kony.ui.Label({
        "enableCache": false,
        "id": "labelTS",
        "isVisible": true,
        "skin": "lblNormal",
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
    var textfieldTS1 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "enableCache": false,
        "focusSkin": "textBoxFocus",
        "id": "textfieldTS1",
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
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoFilter": false
    });
    var labelTS1 = new kony.ui.Label({
        "enableCache": false,
        "id": "labelTS1",
        "isVisible": true,
        "skin": "lblNormal",
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
    var textfieldTS2 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "enableCache": false,
        "focusSkin": "textBoxFocus",
        "id": "textfieldTS2",
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
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoFilter": false
    });
    var labelTS2 = new kony.ui.Label({
        "enableCache": false,
        "id": "labelTS2",
        "isVisible": true,
        "skin": "lblNormal",
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
    var hboxTS1 = new kony.ui.Box({
        "enableCache": false,
        "id": "hboxTS1",
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
    var comboboxTS1 = new kony.ui.ComboBox({
        "enableCache": false,
        "focusSkin": "cboxFocus",
        "id": "comboboxTS1",
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
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "viewType": constants.COMBOBOX_VIEW_TYPE_LISTVIEW
    });
    hboxTS1.add(comboboxTS1);
    var labelTS3 = new kony.ui.Label({
        "enableCache": false,
        "id": "labelTS3",
        "isVisible": true,
        "skin": "lblNormal",
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
    var calendarTS1 = new kony.ui.Calendar({
        "dateFormat": "dd/MM/yyyy",
        "enableCache": false,
        "focusSkin": "calFocus",
        "id": "calendarTS1",
        "isVisible": true,
        "skin": "calNormalSimilar",
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
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var labelTS4 = new kony.ui.Label({
        "enableCache": false,
        "id": "labelTS4",
        "isVisible": true,
        "skin": "lblNormal",
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
    var radiobuttongroupTS1 = new kony.ui.RadioButtonGroup({
        "enableCache": false,
        "focusSkin": "radioNormal",
        "id": "radiobuttongroupTS1",
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
        "padding": [1, 0, 1, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var labelTS5 = new kony.ui.Label({
        "enableCache": false,
        "id": "labelTS5",
        "isVisible": true,
        "skin": "lblNormal",
        "text": "Terms&Conditions"
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
    var richtext117709689852316 = new kony.ui.RichText({
        "enableCache": false,
        "id": "richtext117709689852316",
        "isVisible": true,
        "skin": "rtxBlackFontForTabs",
        "text": "This is a tab form consists of different widgets including Label, Textbox2, Combobox, Richtext, Calendar, hBox, Checkboxgroup, Radiobutton."
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 12, 6],
        "marginInPixel": true,
        "padding": [4, 4, 4, 4],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var checkboxgroupTS1 = new kony.ui.CheckBoxGroup({
        "enableCache": false,
        "focusSkin": "cbxAccept",
        "id": "checkboxgroupTS1",
        "isVisible": true,
        "masterData": [
            ["1", "Accept"]
        ],
        "skin": "cbxAccept"
    }, {
        "containerWeight": 100,
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "margin": [2, 0, 2, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "tickedImage": "chkboxchkd.png",
        "untickedImage": "chkbox.png"
    });
    tabDefaultTabFS.add(labelTS, textfieldTS1, labelTS1, textfieldTS2, labelTS2, hboxTS1, labelTS3, calendarTS1, labelTS4, radiobuttongroupTS1, labelTS5, richtext117709689852316, checkboxgroupTS1);
    tabpaneDefaultTabFS.addTab("tabDefaultTabFS", "Tab1", null, tabDefaultTabFS, null);
    var tabDefTab1FS = new kony.ui.Box({
        "clipBounds": true,
        "enableCache": false,
        "id": "tabDefTab1FS",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "tabskin",
        "spacing": 1,
        "tabName": "Tab2"
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true
    }, {});
    var richtextDefTab2FS = new kony.ui.RichText({
        "enableCache": false,
        "id": "richtextDefTab2FS",
        "isVisible": true,
        "skin": "rtxBlackFontForTabs",
        "text": "<p>KonyOne's device detection database and heuristics identifies all browser categories from the most basic through different levels of HTML, CSS and JavaScript support, to all of the various HTML5-capable browsers in smartphones, tablets and the desktop. Depending on the type of browser, the user will be served markup, style and/or script appropriate and acceptable to their device, ensuring a solid experience and optimum UI.</p>"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [4, 4, 0, 2],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var image21181029310130215 = new kony.ui.Image2({
        "enableCache": false,
        "id": "image21181029310130215",
        "isVisible": true,
        "src": "wall.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [16, 1, 15, 1],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 512,
        "referenceWidth": 512,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    tabDefTab1FS.add(richtextDefTab2FS, image21181029310130215);
    tabpaneDefaultTabFS.addTab("tabDefTab1FS", "Tab2", null, tabDefTab1FS, null);
    var tabDefTab2FS = new kony.ui.Box({
        "clipBounds": true,
        "enableCache": false,
        "id": "tabDefTab2FS",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "tabskin",
        "spacing": 1,
        "tabName": "Tab3"
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true
    }, {});
    var richtextDefTab3FS = new kony.ui.RichText({
        "enableCache": false,
        "id": "richtextDefTab3FS",
        "isVisible": true,
        "skin": "rtxBlackFontForTabs",
        "text": "<p>KonyOne provides a world-class development environment and mobile middleware for both business & consumer applications. KonyOne incorporates industry - tested scalability and supports every technology and deployment option available today - including truly native apps on all native OSs, thousands of devices including those with HTML5 capable browser, Single Page Applications, Wrappers, Hybrids, and traditional URL-based applications.</p>"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [4, 4, 0, 2],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var image21181029310130216 = new kony.ui.Image2({
        "enableCache": false,
        "id": "image21181029310130216",
        "isVisible": true,
        "src": "cross.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [15, 1, 22, 1],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 512,
        "referenceWidth": 512,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    tabDefTab2FS.add(richtextDefTab3FS, image21181029310130216);
    tabpaneDefaultTabFS.addTab("tabDefTab2FS", "Tab3", null, tabDefTab2FS, null);
    frmTabScreenLevel.add(tabpaneDefaultTabFS);
};

function frmTabScreenLevelGlobals() {
    frmTabScreenLevel = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTabScreenLevel,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmTabScreenLevel",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Screen level tabpane"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["tabpaneDefaultTabFS"],
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
    frmTabScreenLevel.info = {
        "kuid": "p2kwiet12889314953060"
    };
};