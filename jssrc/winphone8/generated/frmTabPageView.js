function addWidgetsfrmTabPageView() {
    var tabpane117989725218496 = new kony.ui.TabPane({
        "activeFocusSkin": "tabFocus",
        "activeSkin": "tabActive",
        "enableCache": false,
        "id": "tabpane117989725218496",
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
            "panoramaViewConfig": {
                "panoramaImage": "bgpanorama.png",
                "panoramaTitleImage": "konygreenpanorama.png"
            },
            "tabViewConfig": {
                "headerContainerWeight": "50",
                "headerPosition": constants.TAB_HEADER_POSITION_TOP
            },
        },
        "viewType": constants.TABPANE_VIEW_TYPE_PANORAMAVIEW
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "margin": [0, 0, 0, 1],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var tab117989725218498 = new kony.ui.Box({
        "clipBounds": true,
        "enableCache": false,
        "id": "tab117989725218498",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "tabskin",
        "spacing": 0,
        "tabName": "Tab1"
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": true
    }, {});
    var richtext117989725218500 = new kony.ui.RichText({
        "enableCache": false,
        "id": "richtext117989725218500",
        "isVisible": true,
        "text": "<p>KonyOne provides a world-class development environment and mobile middleware for both business & consumer applications. KonyOne incorporates industry - tested scalability and supports every technology and deployment option available today - including truly native apps on all native OSs, thousands of devices including those with HTML5 capable browser, Single Page Applications, Wrappers, Hybrids, and traditional URL-based applications.</p>"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    tab117989725218498.add(richtext117989725218500);
    tabpane117989725218496.addTab("tab117989725218498", "Tab1", null, tab117989725218498, null);
    var tab117989725218502 = new kony.ui.Box({
        "clipBounds": true,
        "enableCache": false,
        "id": "tab117989725218502",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "tabskin",
        "spacing": 0,
        "tabName": "Tab2"
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": true
    }, {});
    var richtext117989725218504 = new kony.ui.RichText({
        "enableCache": false,
        "id": "richtext117989725218504",
        "isVisible": true,
        "text": "<p>KonyOne's device detection database and heuristics identifies all browser categories from the most basic through different levels of HTML, CSS and JavaScript support, to all of the various HTML5-capable browsers in smartphones, tablets and the desktop. Depending on the type of browser, the user will be served markup, style and/or script appropriate and acceptable to their device, ensuring a solid experience and optimum UI.</p>"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    tab117989725218502.add(richtext117989725218504);
    tabpane117989725218496.addTab("tab117989725218502", "Tab2", null, tab117989725218502, null);
    var tab117989725218506 = new kony.ui.Box({
        "clipBounds": true,
        "enableCache": false,
        "id": "tab117989725218506",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "skin": "tabskin",
        "spacing": 0,
        "tabName": "Tab3"
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": true
    }, {});
    var richtext117989725218508 = new kony.ui.RichText({
        "enableCache": false,
        "id": "richtext117989725218508",
        "isVisible": true,
        "text": "<p>Solutions for your customers, employees, vendors and partners.Configurable,  Extensible with Universal Integration.Stunning User Experience.Support for All Technologies and Devices.\n</p>"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    tab117989725218506.add(richtext117989725218508);
    tabpane117989725218496.addTab("tab117989725218506", "Tab3", null, tab117989725218506, null);
    frmTabPageView.add(tabpane117989725218496);
};

function frmTabPageViewGlobals() {
    frmTabPageView = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTabPageView,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmTabPageView",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Tab"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": true,
        "directChildrenIDs": ["tabpane117989725218496"],
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
    frmTabPageView.info = {
        "kuid": "frmTabPageViewWinPhone8"
    };
};