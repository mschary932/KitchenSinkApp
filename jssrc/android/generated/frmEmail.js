function addWidgetsfrmEmail() {
    var button1930040990146518 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1930040990146518",
        "isVisible": true,
        "onClick": p2kwiet1288931495966_button1930040990146518_onClick_seq0,
        "skin": "btnNormal",
        "text": "Email without attachment"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 12, 12, 6],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button1930040990146529 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1930040990146529",
        "isVisible": true,
        "onClick": p2kwiet1288931495966_button1930040990146529_onClick_seq0,
        "skin": "btnNormal",
        "text": "Email with attachment"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [12, 6, 12, 6],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmEmail.add(button1930040990146518, button1930040990146529);
};

function frmEmailGlobals() {
    frmEmail = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmEmail,
        "enabledForIdleTimeout": false,
        "id": "frmEmail",
        "needAppMenu": true,
        "skin": "frm",
        "title": "Email"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
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
    frmEmail.info = {
        "kuid": "p2kwiet1288931495966"
    };
};