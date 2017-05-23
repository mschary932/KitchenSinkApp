function addWidgetspopFormAnchor() {
    var button1927359800105587 = new kony.ui.Button({
        "focusSkin": "btnRoundFocus",
        "id": "button1927359800105587",
        "isVisible": true,
        "onClick": p2kwiet12889314955909_button1927359800105587_onClick_seq0,
        "skin": "btnSknBlack",
        "text": "Clear All"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "displayText": true,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button1927359800105588 = new kony.ui.Button({
        "focusSkin": "btnRoundFocus",
        "id": "button1927359800105588",
        "isVisible": true,
        "onClick": p2kwiet12889314955909_button1927359800105588_onClick_seq0,
        "skin": "btnSknRed",
        "text": "Cancel"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "displayText": true,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
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
        "paddingInPixel": false
    }, {
        "inTransitionConfig": {
            "popupTransition": "bottomCenter"
        },
        "outTransitionConfig": {
            "popupTransition": "none"
        }
    });
    popFormAnchor.info = {
        "kuid": "p2kwiet12889314955909"
    };
};