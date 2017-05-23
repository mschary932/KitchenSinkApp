function addWidgetsfrmSlider() {
    var hbxSliders = new kony.ui.Box({
        "id": "hbxSliders",
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
    var label118082077327189 = new kony.ui.Label({
        "id": "label118082077327189",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Default Slider"
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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "thickness": 5
    });
    var label118082077327213 = new kony.ui.Label({
        "id": "label118082077327213",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Slider with custom colors"
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
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var slider192735980026038 = new kony.ui.Slider({
        "id": "slider192735980026038",
        "isVisible": true,
        "max": 100,
        "min": 0,
        "step": 1
    }, {
        "containerWeight": 100,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "thickness": 5
    });
    var label1181029310129359 = new kony.ui.Label({
        "id": "label1181029310129359",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Slider with Min & Max Values"
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
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var slider1181029310129369 = new kony.ui.Slider({
        "id": "slider1181029310129369",
        "isVisible": true,
        "max": 2000,
        "min": 100,
        "selectedValue": 150,
        "step": 1
    }, {
        "containerWeight": 100,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "thickness": 5
    });
    var label1181029310129387 = new kony.ui.Label({
        "id": "label1181029310129387",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Slider with step value :20 "
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
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "thickness": 5
    });
    var label1181029310129456 = new kony.ui.Label({
        "id": "label1181029310129456",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Slider position capture"
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
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var slider192914726036080 = new kony.ui.Slider({
        "id": "slider192914726036080",
        "isVisible": true,
        "max": 100,
        "min": 0,
        "onSelection": p2kwiet12889314954734_slider192914726036080_onSelection_seq0,
        "onSlide": p2kwiet12889314954734_slider192914726036080_onslide_seq0,
        "selectedValue": 0,
        "step": 1
    }, {
        "containerWeight": 100,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "thickness": 5
    });
    var hbox1181029310129489 = new kony.ui.Box({
        "id": "hbox1181029310129489",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
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
        "containerWeight": 37,
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
    var lblSlid = new kony.ui.Label({
        "id": "lblSlid",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "0"
    }, {
        "containerWeight": 63,
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
    vbox192926642422365.add(label118082077327189, slider103994549624243, label118082077327213, slider192735980026038, label1181029310129359, slider1181029310129369, label1181029310129387, slider1181029310129396, label1181029310129456, slider192914726036080, hbox1181029310129489);
    hbxSliders.add(vbox192926642422365);
    frmSlider.add(hbxSliders);
};

function frmSliderGlobals() {
    frmSlider = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSlider,
        "enabledForIdleTimeout": false,
        "id": "frmSlider",
        "needAppMenu": true,
        "skin": "frm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
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
        "kuid": "p2kwiet12889314954734"
    };
};