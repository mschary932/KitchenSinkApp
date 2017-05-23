function addWidgetspopFormAnchor() {
    var button1927359800105587 = new kony.ui.Button({
        "enableCache": false,
        "focusSkin": "btnRoundFocus",
        "id": "button1927359800105587",
        "isVisible": true,
        "onClick": p2kwiet12889314955897_button1927359800105587_onClick_seq0,
        "skin": "btnSknRed",
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
        "enableCache": false,
        "focusSkin": "btnRoundFocus",
        "id": "button1927359800105588",
        "isVisible": true,
        "onClick": p2kwiet12889314955897_button1927359800105588_onClick_seq0,
        "skin": "btnSknBlack",
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
        "enableCache": false,
        "id": "popFormAnchor",
        "isModal": false,
        "skin": "popGray",
        "transparencyBehindThePopup": 50
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "paddingInPixel": false
    }, {
        "directChildrenIDs": ["button1927359800105587", "button1927359800105588"],
        "inTransitionConfig": {
            "transitionSpeed": 0
        },
        "mangoMode": true,
        "outTransitionConfig": {
            "transitionSpeed": 0
        }
    });
    popFormAnchor.info = {
        "kuid": "p2kwiet12889314955897"
    };
};