function addWidgetsfrmPop() {
    var hbox117822895610579 = new kony.ui.Box({
        "id": "hbox117822895610579",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var scrollbox117822895610580 = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "scrollbox117822895610580",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "scrollingEvents": {},
        "showScrollbars": true
    }, {
        "containerHeight": 90,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true
    }, {});
    var segPop = new kony.ui.SegmentedUI({
        "focusSkin": "segFocus",
        "id": "segPop",
        "isVisible": true,
        "navigationSkin": "segNormal",
        "needsectionheaders": true,
        "onClick": p2kwiet12889314955903_segPop_onClick_seq0,
        "rowTemplate": vbox1288931495425,
        "showStatus": true,
        "skin": "seNormal1",
        "widgetDataMap": {
            "lblContact": "lblContact"
        }
    }, {
        "containerWeight": 100,
        "widgetAlignment": 1
    }, {
        "behavior": "default",
        "enableDockHeader": false,
        "groupCells": true,
        "isPageIndicatorNeeded": true,
        "secSkin": "seHeader1",
        "sepColor": "64646400",
        "sepThickness": 1,
        "slw": false,
        "view": "tableview"
    });
    segPop.widgetDataMap = {
        "lblContact": "lblContact"
    };
    segPop.setDataWithSections([
        ["  A", [{
            "lblContact": "Alpha"
        }, {
            "lblContact": "Apple"
        }, {
            "lblContact": "Astro"
        }]],
        ["  B", [{
            "lblContact": "Beta"
        }, {
            "lblContact": "Blaze"
        }, {
            "lblContact": "Bronze"
        }]],
        ["  C", [{
            "lblContact": "Cactus"
        }, {
            "lblContact": "Cape"
        }, {
            "lblContact": "Comic"
        }]],
        ["  D", [{
            "lblContact": "Delta"
        }, {
            "lblContact": "Dome"
        }, {
            "lblContact": "Duck"
        }]],
        ["  E", [{
            "lblContact": "Epsilon"
        }, {
            "lblContact": "Euka"
        }]]
    ]);
    scrollbox117822895610580.add(segPop);
    hbox117822895610579.add(scrollbox117822895610580);
    frmPop.add(hbox117822895610579);
};

function frmPopGlobals() {
    frmPop = new kony.ui.Popup({
        "addWidgets": addWidgetsfrmPop,
        "id": "frmPop",
        "isModal": false,
        "skin": "popUpSkn",
        "transparencyBehindThePopup": 100
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 40,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "inTransitionConfig": {
            "animation": 0
        },
        "outTransitionConfig": {
            "animation": 0
        },
        "windowSoftInputMode": constants.POPUP_ADJUST_RESIZE
    });
};