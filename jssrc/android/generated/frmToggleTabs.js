function addWidgetsfrmToggleTabs() {
    var tabpane1181029310125057 = new kony.ui.TabPane({
        "activeFocusSkin": "tabFocus",
        "activeSkin": "tabActive",
        "id": "tabpane1181029310125057",
        "inactiveSkin": "tabInactive",
        "isVisible": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "screenLevelWidget": false,
        "viewConfig": {
            "collapsibleViewConfig": {
                "collapsedImage": "tabup.png",
                "expandedImage": "tabdown.png",
                "imagePosition": constants.TABPANE_COLLAPSIBLE_IMAGE_POSITION_LEFT,
                "tabNameAlignment": constants.TABPANE_COLLAPSIBLE_TABNAME_ALIGNMENT_LEFT,
                "toggleTabs": true
            },
            "pageViewConfig": {
                "needPageIndicator": true
            },
            "tabViewConfig": {
                "headerContainerWeight": "50",
                "headerPosition": constants.TAB_HEADER_POSITION_TOP
            },
        },
        "viewType": constants.TABPANE_VIEW_TYPE_COLLAPSIBLEVIEW
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "margin": [2, 4, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "tabHeaderHeight": 64
    });
    var tab1181029310125059 = new kony.ui.Box({
        "clipBounds": true,
        "id": "tab1181029310125059",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "tabskin",
        "spacing": 1,
        "tabName": "Tab1"
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var richtext1181029310125061 = new kony.ui.RichText({
        "id": "richtext1181029310125061",
        "isVisible": true,
        "skin": "rtxBlackFontForTabs",
        "text": "<p>KonyOne provides a world-class development environment and mobile middleware for both business & consumer applications. KonyOne incorporates industry - tested scalability and supports every technology and deployment option available today - including truly native apps on all native OSs, thousands of devices including those with HTML5 capable browser, Single Page Applications, Wrappers, Hybrids, and traditional URL-based applications.</p>"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 1, 2, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    tab1181029310125059.add(richtext1181029310125061);
    tabpane1181029310125057.addTab("tab1181029310125059", "Tab1", null, tab1181029310125059, null);
    var tab1181029310125063 = new kony.ui.Box({
        "clipBounds": true,
        "id": "tab1181029310125063",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "tabskin",
        "spacing": 1,
        "tabName": "Tab2"
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var richtext1181029310125065 = new kony.ui.RichText({
        "id": "richtext1181029310125065",
        "isVisible": true,
        "skin": "rtxBlackFontForTabs",
        "text": "<p>KonyOne's device detection database and heuristics identifies all browser categories from the most basic through different levels of HTML, CSS and JavaScript support, to all of the various HTML5-capable browsers in smartphones, tablets and the desktop. Depending on the type of browser, the user will be served markup, style and/or script appropriate and acceptable to their device, ensuring a solid experience and optimum UI.</p>"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 1, 2, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    tab1181029310125063.add(richtext1181029310125065);
    tabpane1181029310125057.addTab("tab1181029310125063", "Tab2", null, tab1181029310125063, null);
    var tab1181029310125067 = new kony.ui.Box({
        "clipBounds": true,
        "id": "tab1181029310125067",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "tabskin",
        "spacing": 1,
        "tabName": "Tab3"
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var richtext1181029310125069 = new kony.ui.RichText({
        "id": "richtext1181029310125069",
        "isVisible": true,
        "skin": "rtxBlackFontForTabs",
        "text": "<p>Solutions for your customers, employees, vendors and partners.Configurable,  Extensible with Universal Integration.Stunning User Experience.Support for All Technologies and Devices.\n</p>"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 1, 2, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    tab1181029310125067.add(richtext1181029310125069);
    tabpane1181029310125057.addTab("tab1181029310125067", "Tab3", null, tab1181029310125067, null);
    frmToggleTabs.add(tabpane1181029310125057);
};

function frmToggleTabsGlobals() {
    frmToggleTabs = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmToggleTabs,
        "enabledForIdleTimeout": false,
        "id": "frmToggleTabs",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Toggle Tabs"
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
};