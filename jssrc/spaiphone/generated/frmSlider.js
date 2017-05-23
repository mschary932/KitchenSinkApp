function addWidgetsfrmSlider() {
    var hbox103994549623663 = new kony.ui.Box({
        "focusSkin": "headBox",
        "id": "hbox103994549623663",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "headBox"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label103994549623664 = new kony.ui.Label({
        "id": "label103994549623664",
        "isVisible": true,
        "skin": "headLabel",
        "text": "Slider"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [2, 4, 2, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    hbox103994549623663.add(label103994549623664);
    var label118082077327189 = new kony.ui.Label({
        "id": "label118082077327189",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Default Slider"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [2, 4, 2, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
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
        "margin": [4, 4, 4, 0],
        "marginInPixel": false,
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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [2, 4, 2, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
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
        "margin": [4, 4, 4, 0],
        "marginInPixel": false,
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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [2, 4, 2, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
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
        "margin": [4, 4, 4, 0],
        "marginInPixel": false,
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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [2, 4, 2, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
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
        "margin": [4, 4, 4, 0],
        "marginInPixel": false,
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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    hbox1181029310129489.add(label1181029310129490, lblSlid);
    frmSlider.add(hbox103994549623663, label118082077327189, slider103994549624243, label118082077327213, slider192735980026038, label1181029310129387, slider1181029310129396, label1181029310129456, slidPos, hbox1181029310129489);
};

function frmSliderGlobals() {
    frmSlider = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSlider,
        "enabledForIdleTimeout": false,
        "id": "frmSlider",
        "needAppMenu": true,
        "preShow": p2kwiet12889314952901_frmSlider_preshow_seq0,
        "skin": "frm",
        "title": "Slider"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "inTransitionConfig": {
            "formTransition": "none"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        },
        "retainScrollPosition": false
    });
    frmSlider.info = {
        "kuid": "p2kwiet12889314952901"
    };
};