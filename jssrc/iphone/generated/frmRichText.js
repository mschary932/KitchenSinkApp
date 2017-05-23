function addWidgetsfrmRichText() {
    var richtext121043100817155 = new kony.ui.RichText({
        "id": "richtext121043100817155",
        "isVisible": true,
        "skin": "richNormalSimilar",
        "text": "<b>This is bold text  </b>\n<br/>\n<br/>\n<u>This is underlined text</u>\n<br/>\n<br/>\n <label style=\"color:#F25E22\">This is text with font color</label> \n<br/>\n<br/>\n<i>This is italic text</i>\n<br/>\n<br/>\n<b>This is</b> <sub>Subscript</sub> \n<br/>\n<br/>\n<b>This is</b><sup>Superscript</sup> <br/><br/>\n<font color=\"white\"><a href=\"http://www.kony.com\">This is link (Click to visit kony.com)</a></font>\n<br/><br/>\n<b>Below is an image</b><br/>\n<img src=\"http://www.fordesigner.com/imguploads/Image/cjbc/zcool/png20080525/1211728825.png\" alt=\"image\" height=\"60\" width=\"60\" ></img>"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [12, 15, 12, 12],
        "marginInPixel": true,
        "padding": [2, 2, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    frmRichText.add(richtext121043100817155);
};

function frmRichTextGlobals() {
    frmRichText = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmRichText,
        "bounces": true,
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
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "extendBottom": false,
        "extendTop": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": 100,
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "retainScrollPosition": false,
        "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "title",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "none"
        },
        "titleBarSkin": "sknTitleBarSampleApp"
    });
    frmRichText.info = {
        "kuid": "p2kwiet12889314951951"
    };
};