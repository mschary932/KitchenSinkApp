function addWidgetsfrmRichText() {
    var richtext121043100817155 = new kony.ui.RichText({
        "id": "richtext121043100817155",
        "isVisible": true,
        "skin": "richNormalSimilar",
        "text": "<b>This is bold text  </b>\n<br/>\n<br/>\n<u>This is underlined text</u>\n<br/>\n<br/>\n <label style=\"color:#F25E22\">This is text with font color</label> \n<br/>\n<br/>\n<i>This is italic text</i>\n<br/>\n<br/>\n<b>This is</b> <sub>Subscript</sub> \n<br/>\n<br/>\n<b>This is</b><sup>Superscript</sup> <br/><br/>\n<font color=\"white\"><a href=\"http://www.kony.com\">This is link (Click to visit kony.com)</a></font>\n<br/><br/>\n<b>Below is an image</b><br/>\n<img src=\"http://www.fordesigner.com/imguploads/Image/cjbc/zcool/png20080525/1211728825.png\" alt=\"image\" height=\"60\" width=\"60\" ></img>"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [12, 12, 12, 12],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    frmRichText.add(richtext121043100817155);
};

function frmRichTextGlobals() {
    frmRichText = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmRichText,
        "enabledForIdleTimeout": false,
        "id": "frmRichText",
        "needAppMenu": true,
        "skin": "frm",
        "title": "RichText"
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
    frmRichText.info = {
        "kuid": "p2kwiet12889314951951"
    };
};