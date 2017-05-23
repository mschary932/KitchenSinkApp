function addWidgetsfrmTabDefault() {
    var hboxtabDefault = new kony.ui.Box({
        "enableCache": false,
        "focusSkin": "headBox",
        "id": "hboxtabDefault",
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
    var labeltabDefault = new kony.ui.Label({
        "enableCache": false,
        "id": "labeltabDefault",
        "isVisible": true,
        "skin": "headLabel",
        "text": "Tab"
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
    hboxtabDefault.add(labeltabDefault);
    var tabpaneDefaultTab = new kony.ui.TabPane({
        "activeFocusSkin": "tabFocus",
        "activeSkin": "tabActive",
        "enableCache": false,
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
        "margin": [2, 6, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var tabDefaultTab = new kony.ui.Box({
        "clipBounds": true,
        "enableCache": false,
        "id": "tabDefaultTab",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "tabskin",
        "spacing": 1,
        "tabName": "Tab1"
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 0, 0, 10],
        "paddingInPixel": true
    }, {});
    var richtextDeftab1 = new kony.ui.RichText({
        "enableCache": false,
        "id": "richtextDeftab1",
        "isVisible": true,
        "skin": "rtxBlackFontForTabs",
        "text": "<p>KonyOne provides a world-class development environment and mobile middleware for both business & consumer applications. KonyOne incorporates industry - tested scalability and supports every technology and deployment option available today - including truly native apps on all native OSs, thousands of devices including those with HTML5 capable browser, SPAs,Wrappers, Hybrids, and traditional URL-based applications.</p>"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [0, 0, 0, 25],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    tabDefaultTab.add(richtextDeftab1);
    tabpaneDefaultTab.addTab("tabDefaultTab", "Tab1", null, tabDefaultTab, null);
    var tabDefTab1 = new kony.ui.Box({
        "clipBounds": true,
        "enableCache": false,
        "id": "tabDefTab1",
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
    var richtextDefTab2 = new kony.ui.RichText({
        "enableCache": false,
        "id": "richtextDefTab2",
        "isVisible": true,
        "skin": "rtxBlackFontForTabs",
        "text": "<p>KonyOne's device detection database and heuristics identifies all browser categories from the most basic through different levels of HTML, CSS and JavaScript support, to all of the various HTML5-capable browsers in smartphones, tablets and the desktop. Depending on the type of browser, the user will be served markup, style and/or script appropriate and acceptable to their device, ensuring a solid experience and optimum UI.</p>"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [0, 0, 0, 35],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    tabDefTab1.add(richtextDefTab2);
    tabpaneDefaultTab.addTab("tabDefTab1", "Tab2", null, tabDefTab1, null);
    var tabDefTab2 = new kony.ui.Box({
        "clipBounds": true,
        "enableCache": false,
        "id": "tabDefTab2",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "tabskin",
        "spacing": 1,
        "tabName": "Tab3"
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true
    }, {});
    var richtextDefTab3 = new kony.ui.RichText({
        "enableCache": false,
        "id": "richtextDefTab3",
        "isVisible": true,
        "skin": "rtxBlackFontForTabs",
        "text": "<p>Solutions for your customers, employees, vendors and partners.Configurable,  Extensible with Universal Integration.Stunning User Experience.Support for All Technologies and Devices.\n</p>"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [12, 6, 12, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 180],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    tabDefTab2.add(richtextDefTab3);
    tabpaneDefaultTab.addTab("tabDefTab2", "Tab3", null, tabDefTab2, null);
    frmTabDefault.add(hboxtabDefault, tabpaneDefaultTab);
};

function frmTabDefaultGlobals() {
    frmTabDefault = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTabDefault,
        "enableCache": false,
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
        "animateHeaderFooter": false,
        "directChildrenIDs": ["hboxtabDefault", "labeltabDefault", "tabpaneDefaultTab"],
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
    frmTabDefault.info = {
        "kuid": "p2kwiet12889314952958"
    };
};