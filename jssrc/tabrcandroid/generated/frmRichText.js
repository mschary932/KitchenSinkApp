function addWidgetsfrmRichText() {
    var hbxRichText = new kony.ui.Box({
        "id": "hbxRichText",
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
    var richtext121043100817155 = new kony.ui.RichText({
        "id": "richtext121043100817155",
        "isVisible": true,
        "skin": "richNormalSimilar",
        "text": "<b>This is bold text  </b>\n<br/>\n<br/>\n<u>This is underlined text</u>\n<br/>\n<br/>\n <label style=\"color:#F25E22\">This is text with font color</label> \n<br/>\n<br/>\n<i>This is italic text</i>\n<br/>\n<br/>\n<b>This is</b> <sub>Subscript</sub> \n<br/>\n<br/>\n<b>This is</b><sup>Superscript</sup> <br/><br/>\n<a href=\"http://www.kony.com\"><label style=\"color:#F25E22\">This is link (Click to visit kony.com)</label></a>\n<br/><br/>\n<b>Below is an image</b><br/>\n<img src=\"http://www.fordesigner.com/imguploads/Image/cjbc/zcool/png20080525/1211728825.png\" alt=\"image\" height=\"60\" width=\"60\" ></img>"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    vbox192926642422365.add(richtext121043100817155);
    hbxRichText.add(vbox192926642422365);
    frmRichText.add(hbxRichText);
};

function frmRichTextGlobals() {
    frmRichText = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmRichText,
        "enabledForIdleTimeout": false,
        "id": "frmRichText",
        "needAppMenu": true,
        "skin": "frm"
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
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmRichText.info = {
        "kuid": "p2kwiet12889314954266"
    };
};