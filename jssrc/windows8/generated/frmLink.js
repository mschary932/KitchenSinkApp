function addWidgetsfrmLink() {
    var hbxLinks = new kony.ui.Box({
        "id": "hbxLinks",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox192926642422365 = new kony.ui.Box({
        "id": "vbox192926642422365",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label1181029310129215 = new kony.ui.Label({
        "id": "label1181029310129215",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Default Link"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var link117709689852615 = new kony.ui.Link({
        "focusSkin": "lnkFocus",
        "id": "link117709689852615",
        "isVisible": true,
        "onClick": p2kwiet12889314954135_link117709689852615_onClick_seq0,
        "skin": "lnkNormal",
        "text": "Welcome to Kony"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var label1181029310129223 = new kony.ui.Label({
        "id": "label1181029310129223",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Link with background color"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var link1181029310129233 = new kony.ui.Link({
        "focusSkin": "linkBckColFoc",
        "id": "link1181029310129233",
        "isVisible": true,
        "onClick": p2kwiet12889314954135_link1181029310129233_onClick_seq0,
        "skin": "linkSkn",
        "text": "Welcome to Kony"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var label1181029310129241 = new kony.ui.Label({
        "id": "label1181029310129241",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Link with vertical gradient"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var link1181029310129249 = new kony.ui.Link({
        "focusSkin": "linkVertiGradFoc",
        "id": "link1181029310129249",
        "isVisible": true,
        "onClick": p2kwiet12889314954135_link1181029310129249_onClick_seq0,
        "skin": "lnkVertiGrad",
        "text": "Welcome to Kony"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var label1181029310129269 = new kony.ui.Label({
        "id": "label1181029310129269",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Link with vertical split"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var link1181029310129279 = new kony.ui.Link({
        "focusSkin": "LinkVertiSplitFoc",
        "id": "link1181029310129279",
        "isVisible": true,
        "onClick": p2kwiet12889314954135_link1181029310129279_onClick_seq0,
        "skin": "lnkVertiSplit",
        "text": "Welcome to Kony"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    vbox192926642422365.add(label1181029310129215, link117709689852615, label1181029310129223, link1181029310129233, label1181029310129241, link1181029310129249, label1181029310129269, link1181029310129279);
    hbxLinks.add(vbox192926642422365);
    frmLink.add(hbxLinks);
};

function frmLinkGlobals() {
    frmLink = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLink,
        "enabledForIdleTimeout": false,
        "id": "frmLink",
        "needAppMenu": true,
        "skin": "frm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["hbxLinks", "label1181029310129215", "label1181029310129223", "label1181029310129241", "label1181029310129269", "label1181029310129287", "link117709689852615", "link1181029310129233", "link1181029310129249", "link1181029310129279", "link1181029310129295", "vbox192926642422365"],
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "formTransition": "None"
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmLink.info = {
        "kuid": "p2kwiet12889314954135"
    };
};