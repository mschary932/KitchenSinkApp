function addWidgetsfrmHdrFooter() {
    var label192735980025497 = new kony.ui.Label({
        "enableCache": false,
        "id": "label192735980025497",
        "isVisible": true,
        "skin": "lblSub1",
        "text": "Kony Logo which is shown above is the fixed header"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192735980025507 = new kony.ui.Label({
        "enableCache": false,
        "id": "label192735980025507",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "When you want the same information to be displayed across all the forms in the application, you have the ability to add headers or footers to the application from KonyOne Studio. When you want the same information to be displayed across all the forms in the application, you have the ability to add headers or footers to the application from KonyOne Studio. When you want the same information to be displayed across all the forms in the application, you have the ability to add headers or footers to the application from KonyOne Studio. When you want the same information to be displayed across all the forms in the application, you have the ability to add headers or footers to the application from KonyOne Studio. When you want the same information to be displayed across all the forms in the application, you have the ability to add headers or footers to the application from KonyOne Studio. When you want the same information to be displayed across all the forms in the application, you have the ability to add headers or footers to the application from KonyOne Studio. "
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192735980025549 = new kony.ui.Label({
        "enableCache": false,
        "id": "label192735980025549",
        "isVisible": true,
        "skin": "lblSub1",
        "text": "Copyright which is shown below is the fixed footer"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmHdrFooter.add(label192735980025497, label192735980025507, label192735980025549);
};

function frmHdrFooterGlobals() {
    frmHdrFooter = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHdrFooter,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "footers": [hbox192735980024368],
        "headers": [hbox1180105789135330],
        "id": "frmHdrFooter",
        "needAppMenu": true,
        "skin": "frmBlue1",
        "title": "Form"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["label192735980025497", "label192735980025507", "label192735980025549"],
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
    frmHdrFooter.info = {
        "kuid": "p2kwiet12889314951263"
    };
};