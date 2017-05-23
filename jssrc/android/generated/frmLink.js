function addWidgetsfrmLink() {
    var label1181029310129215 = new kony.ui.Label({
        "id": "label1181029310129215",
        "isVisible": true,
        "skin": "lblSub1",
        "text": "Default Link"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 0, 6, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var link117709689852615 = new kony.ui.Link({
        "focusSkin": "lnkNormal",
        "id": "link117709689852615",
        "isVisible": true,
        "onClick": p2kwiet12889314951605_link117709689852615_onClick_seq0,
        "skin": "lnkNormal",
        "text": "Welcome to Kony"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var label1181029310129223 = new kony.ui.Label({
        "id": "label1181029310129223",
        "isVisible": true,
        "skin": "lblSub1",
        "text": "Link with background color"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 0, 6, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var link1181029310129233 = new kony.ui.Link({
        "focusSkin": "linkBckColFoc",
        "id": "link1181029310129233",
        "isVisible": true,
        "onClick": p2kwiet12889314951605_link1181029310129233_onClick_seq0,
        "skin": "linkSkn",
        "text": "Welcome to Kony"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var label1181029310129241 = new kony.ui.Label({
        "id": "label1181029310129241",
        "isVisible": true,
        "skin": "lblSub1",
        "text": "Link with vertical gradient"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 0, 6, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var link1181029310129249 = new kony.ui.Link({
        "focusSkin": "linkVertiGradFoc",
        "id": "link1181029310129249",
        "isVisible": true,
        "onClick": p2kwiet12889314951605_link1181029310129249_onClick_seq0,
        "skin": "lnkVertiGrad",
        "text": "Welcome to Kony"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var label1181029310129269 = new kony.ui.Label({
        "id": "label1181029310129269",
        "isVisible": true,
        "skin": "lblSub1",
        "text": "Link with vertical split"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 0, 6, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var link1181029310129279 = new kony.ui.Link({
        "focusSkin": "LinkVertiSplitFoc",
        "id": "link1181029310129279",
        "isVisible": true,
        "onClick": p2kwiet12889314951605_link1181029310129279_onClick_seq0,
        "skin": "lnkVertiSplit",
        "text": "Welcome to Kony"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [3, 12, 3, 12],
        "paddingInPixel": true,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    frmLink.add(label1181029310129215, link117709689852615, label1181029310129223, link1181029310129233, label1181029310129241, link1181029310129249, label1181029310129269, link1181029310129279);
};

function frmLinkGlobals() {
    frmLink = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLink,
        "enabledForIdleTimeout": false,
        "id": "frmLink",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Link"
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
    frmLink.info = {
        "kuid": "p2kwiet12889314951605"
    };
};