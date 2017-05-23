function addWidgetspopFormAnchor() {
    var button1927359800105587 = new kony.ui.Button({
        "focusSkin": "btnSknBlack",
        "id": "button1927359800105587",
        "isVisible": true,
        "onClick": p2kwiet12889314955917_button1927359800105587_onClick_seq0,
        "skin": "btnSknBlack",
        "text": "Clear All"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [7, 4, 7, 4],
        "marginInPixel": true,
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button1927359800105588 = new kony.ui.Button({
        "focusSkin": "btnSknRed",
        "id": "button1927359800105588",
        "isVisible": true,
        "onClick": p2kwiet12889314955917_button1927359800105588_onClick_seq0,
        "skin": "btnSknRed",
        "text": "Cancel"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [7, 4, 7, 4],
        "marginInPixel": true,
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    popFormAnchor.add(button1927359800105587, button1927359800105588);
};

function popFormAnchorGlobals() {
    popFormAnchor = new kony.ui.Popup({
        "addWidgets": addWidgetspopFormAnchor,
        "id": "popFormAnchor",
        "isModal": false,
        "skin": "popGray",
        "transparencyBehindThePopup": 50
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "padding": [0, 2, 0, 2],
        "paddingInPixel": false
    }, {
        "directChildrenIDs": ["button1927359800105587", "button1927359800105588"],
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "mangoMode": true,
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
    popFormAnchor.info = {
        "kuid": "popFormAnchorWindows8"
    };
};