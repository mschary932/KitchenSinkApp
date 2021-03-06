function addWidgetsfrmPickerView() {
    var hbxPickerViewTablet = new kony.ui.Box({
        "id": "hbxPickerViewTablet",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox685080434800906 = new kony.ui.Box({
        "id": "vbox685080434800906",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hboxMain = new kony.ui.Box({
        "id": "hboxMain",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 4, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblBrand = new kony.ui.Label({
        "id": "lblBrand",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Brand"
    }, {
        "containerWeight": 33,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [10, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblModel = new kony.ui.Label({
        "id": "lblModel",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Year"
    }, {
        "containerWeight": 33,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [10, 0, 7, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblColour = new kony.ui.Label({
        "id": "lblColour",
        "isVisible": true,
        "skin": "lblSub",
        "text": "Color"
    }, {
        "containerWeight": 34,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 20, 0],
        "marginInPixel": false,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    hboxMain.add(lblBrand, lblModel, lblColour);
    var hbxPickerView = new kony.ui.Box({
        "id": "hbxPickerView",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var pickOne = new kony.ui.PickerView({
        "id": "pickOne",
        "isVisible": true,
        "masterData": [
            [
                ["1", "BMW"],
                ["2", "Chevrolet"],
                ["3", "Aston Martin"],
                ["4", "Ferrari"],
                ["5", "Honda"],
                ["6", "Hyundai"],
                ["7", "Jaguar"],
                ["8", "Jeep"],
                ["9", "Porsche"], 33
            ],
            [
                ["1", "2003"],
                ["2", "2004"],
                ["3", "2005"],
                ["4", "2006"],
                ["5", "2007"],
                ["6", "2008"],
                ["7", "2009"],
                ["8", "2010"],
                ["9", "2011"], 33
            ],
            [
                ["1", "Black"],
                ["2", "Silver"],
                ["3", "White"],
                ["4", "Red"],
                ["5", "Gray"],
                ["6", "Yellow"],
                ["7", "Blue"],
                ["8", "Gold"],
                ["9", "Purple"], 34
            ]
        ],
        "masterDataMap": null,
        "onSelection": p2kwiet12889314954221_pickOne_onSelection_seq0,
        "selectedKeyValues": ["2009", "Jan"]
    }, {
        "containerWeight": 100,
        "hExpand": true,
        "margin": [4, 0, 4, 5],
        "marginInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbxPickerView.add(pickOne);
    var lblOne = new kony.ui.Label({
        "id": "lblOne",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [5, 0, 4, 2],
        "marginInPixel": false,
        "padding": [1, 2, 1, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnAdd = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnAdd",
        "isVisible": true,
        "onClick": p2kwiet12889314954221_btnAdd_onClick_seq0,
        "skin": "btnNormal",
        "text": "Set New Year Range"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [5, 4, 4, 5],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var lblTwo = new kony.ui.Label({
        "id": "lblTwo",
        "isVisible": true,
        "skin": "lblNormalSimilar"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [5, 0, 4, 2],
        "marginInPixel": false,
        "padding": [1, 2, 1, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    vbox685080434800906.add(hboxMain, hbxPickerView, lblOne, btnAdd, lblTwo);
    hbxPickerViewTablet.add(vbox685080434800906);
    frmPickerView.add(hbxPickerViewTablet);
};

function frmPickerViewGlobals() {
    frmPickerView = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmPickerView,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmPickerView",
        "needAppMenu": true,
        "skin": "frm",
        "title": "PickerView"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
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
            "titleBarLeftSideView": "none",
            "titleBarRightSideView": "none"
        },
        "titleBarSkin": "sknTitleBarSampleApp"
    });
    frmPickerView.info = {
        "kuid": "p2kwiet12889314954221"
    };
};