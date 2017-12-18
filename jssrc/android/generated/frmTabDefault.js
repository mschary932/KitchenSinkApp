function addWidgetsfrmTabDefault() {
    var tabpaneDefaultTab = new kony.ui.TabPane({
        "activeFocusSkin": "tabFocus",
        "activeSkin": "tabActive",
        "id": "tabpaneDefaultTab",
        "inactiveSkin": "tabInactive",
        "isVisible": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "screenLevelWidget": false,
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
        "margin": [2, 4, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "tabHeaderHeight": 64
    });
    var tabDefaultTab = new kony.ui.Box({
        "clipBounds": true,
        "id": "tabDefaultTab",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "tabskin",
        "spacing": 1,
        "tabName": "Tab1"
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var richtextDeftab1 = new kony.ui.RichText({
        "id": "richtextDeftab1",
        "isVisible": true,
        "skin": "rtxBlackFontForTabs",
        "text": "<p>KonyOne provides a world-class development environment and mobile middleware for both business & consumer applications. KonyOne incorporates industry - tested scalability and supports every technology and deployment option available today - including truly native apps on all native OSs, thousands of devices including those with HTML5 capable browser, SPAs,Wrappers, Hybrids, and traditional URL-based applications.</p>"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": true,
        "padding": [2, 2, 2, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    tabDefaultTab.add(richtextDeftab1);
    tabpaneDefaultTab.addTab("tabDefaultTab", "Tab1", null, tabDefaultTab, null);
    var tabDefTab1 = new kony.ui.Box({
        "clipBounds": true,
        "id": "tabDefTab1",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "tabskin",
        "spacing": 1,
        "tabName": "Tab2"
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var richtextDefTab2 = new kony.ui.RichText({
        "id": "richtextDefTab2",
        "isVisible": true,
        "skin": "rtxBlackFontForTabs",
        "text": "<p>KonyOne's device detection database and heuristics identifies all browser categories from the most basic through different levels of HTML, CSS and JavaScript support, to all of the various HTML5-capable browsers in smartphones, tablets and the desktop. Depending on the type of browser, the user will be served markup, style and/or script appropriate and acceptable to their device, ensuring a solid experience and optimum UI.</p>"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": true,
        "padding": [2, 2, 2, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    tabDefTab1.add(richtextDefTab2);
    tabpaneDefaultTab.addTab("tabDefTab1", "Tab2", null, tabDefTab1, null);
    var tabDefTab2 = new kony.ui.Box({
        "clipBounds": true,
        "id": "tabDefTab2",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "tabskin",
        "spacing": 1,
        "tabName": "Tab3"
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var richtextDefTab3 = new kony.ui.RichText({
        "id": "richtextDefTab3",
        "isVisible": true,
        "skin": "rtxBlackFontForTabs",
        "text": "<p>Solutions for your customers, employees, vendors and partners.Configurable,  Extensible with Universal Integration.Stunning User Experience.Support for All Technologies and Devices.\n</p>"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": true,
        "padding": [2, 2, 2, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    tabDefTab2.add(richtextDefTab3);
    tabpaneDefaultTab.addTab("tabDefTab2", "Tab3", null, tabDefTab2, null);
    frmTabDefault.add(tabpaneDefaultTab);
};

function frmTabDefaultGlobals() {
    frmTabDefault = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTabDefault,
        "enabledForIdleTimeout": false,
        "id": "frmTabDefault",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Default view"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
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