function addWidgetsfrmSlider() {
    var label118082077327189 = new kony.ui.Label({
        "id": "label118082077327189",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Default Slider"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var slider103994549624243 = new kony.ui.Slider({
        "id": "slider103994549624243",
        "isVisible": true,
        "max": 100,
        "min": 0,
        "step": 1
    }, {
        "containerWeight": 100,
        "hExpand": true,
        "margin": [12, 10, 12, 0],
        "marginInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label118082077327213 = new kony.ui.Label({
        "id": "label118082077327213",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Slider with custom colors"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var slider192735980026038 = new kony.ui.Slider({
        "id": "slider192735980026038",
        "isVisible": true,
        "leftSkin": "sliderLeft",
        "max": 100,
        "min": 0,
        "rightSkin": "sliderRight",
        "step": 1
    }, {
        "containerWeight": 100,
        "hExpand": true,
        "margin": [12, 10, 12, 0],
        "marginInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label1181029310129387 = new kony.ui.Label({
        "id": "label1181029310129387",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Slider with step value :20 "
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var slider1181029310129396 = new kony.ui.Slider({
        "id": "slider1181029310129396",
        "isVisible": true,
        "max": 100,
        "min": 0,
        "selectedValue": 20,
        "step": 20
    }, {
        "containerWeight": 100,
        "hExpand": true,
        "margin": [12, 10, 12, 0],
        "marginInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label1181029310129456 = new kony.ui.Label({
        "id": "label1181029310129456",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Slider position capture"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var slidPos = new kony.ui.Slider({
        "id": "slidPos",
        "isVisible": true,
        "max": 100,
        "min": 0,
        "onSelection": p2kwiet12889314952901_slidPos_onSelection_seq0,
        "selectedValue": 0,
        "step": 1
    }, {
        "containerWeight": 100,
        "hExpand": true,
        "margin": [12, 10, 12, 0],
        "marginInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var hbox1181029310129489 = new kony.ui.Box({
        "id": "hbox1181029310129489",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 4],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label1181029310129490 = new kony.ui.Label({
        "id": "label1181029310129490",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Selected value is :"
    }, {
        "containerWeight": 78,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": true,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblSlid = new kony.ui.Label({
        "id": "lblSlid",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "0"
    }, {
        "containerWeight": 22,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    hbox1181029310129489.add(label1181029310129490, lblSlid);
    frmSlider.add(label118082077327189, slider103994549624243, label118082077327213, slider192735980026038, label1181029310129387, slider1181029310129396, label1181029310129456, slidPos, hbox1181029310129489);
};

function frmSliderGlobals() {
    frmSlider = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSlider,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmSlider",
        "needAppMenu": true,
        "preShow": p2kwiet12889314952901_frmSlider_preshow_seq0,
        "skin": "frm",
        "title": "Slider"
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
        "titleBarAttributes": {
            "barStyle": constants.BAR_STYLE_DEAFULT,
            "navigationBarHidden": false,
            "translucent": true,
            "tintColor": "4e4e4eff",
            "hidesBackButton": true,
            "prompt": "",
            "leftItemsSupplementBackButton": true,
            "leftBarButtonItems": [{
                "titleBarLeftSideView": "title",
                "labelLeftSideView": "Back"
            }],
            "rightBarButtonItems": []
        },
        "titleBarSkin": "sknTitleBarSampleApp"
    });
};