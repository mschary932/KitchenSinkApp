function addWidgetsfrmPlatforms() {
    var hbxKonyLogoPFScreen = new kony.ui.Box({
        "id": "hbxKonyLogoPFScreen",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 2, 1, 2],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label118263802476286 = new kony.ui.Label({
        "id": "label118263802476286",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "containerWeight": 84,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var image2118263802476287 = new kony.ui.Image2({
        "id": "image2118263802476287",
        "isVisible": true,
        "src": "kony_logo.png"
    }, {
        "containerWeight": 16,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbxKonyLogoPFScreen.add(label118263802476286, image2118263802476287);
    var lblWelcome = new kony.ui.Label({
        "id": "lblWelcome",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Welcome To The Kony UI Experience"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [12, 24, 12, 12],
        "marginInPixel": true,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var hbxAndNiOSPlatforms = new kony.ui.Box({
        "id": "hbxAndNiOSPlatforms",
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
    var label118263802475257 = new kony.ui.Label({
        "id": "label118263802475257",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "containerWeight": 17,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var btnAndroidPF = new kony.ui.Button({
        "focusSkin": "btnAndPFFoc",
        "id": "btnAndroidPF",
        "isVisible": true,
        "onClick": p2kwiet12889314951896_btnAndroidPF_onClick_seq0,
        "skin": "btnAndPF"
    }, {
        "containerWeight": 22,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label118263802475267 = new kony.ui.Label({
        "id": "label118263802475267",
        "isVisible": true,
        "skin": "lblNormal"
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
        "textCopyable": false
    });
    var btnIOSPF = new kony.ui.Button({
        "focusSkin": "btnIPhonePFFoc",
        "id": "btnIOSPF",
        "isVisible": true,
        "onClick": p2kwiet12889314951896_btnIOSPF_onClick_seq0,
        "skin": "btnIphonePF"
    }, {
        "containerWeight": 22,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label118263802475277 = new kony.ui.Label({
        "id": "label118263802475277",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "containerWeight": 17,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbxAndNiOSPlatforms.add(label118263802475257, btnAndroidPF, label118263802475267, btnIOSPF, label118263802475277);
    var hbxWinNBBplatforms = new kony.ui.Box({
        "id": "hbxWinNBBplatforms",
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
    var label118263802474965 = new kony.ui.Label({
        "id": "label118263802474965",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "containerWeight": 17,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var btnWinPF = new kony.ui.Button({
        "focusSkin": "btnWinPFFoc",
        "id": "btnWinPF",
        "isVisible": true,
        "onClick": p2kwiet12889314951896_btnWinPF_onClick_seq0,
        "skin": "btnWindowsPF"
    }, {
        "containerWeight": 22,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label118263802474969 = new kony.ui.Label({
        "id": "label118263802474969",
        "isVisible": true,
        "skin": "lblNormal"
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
        "textCopyable": false
    });
    var btnBlackberryPF = new kony.ui.Button({
        "focusSkin": "btnBBPFFoc",
        "id": "btnBlackberryPF",
        "isVisible": true,
        "onClick": p2kwiet12889314951896_btnBlackberryPF_onClick_seq0,
        "skin": "btnBBPF"
    }, {
        "containerWeight": 22,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label118263802474973 = new kony.ui.Label({
        "id": "label118263802474973",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "containerWeight": 17,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbxWinNBBplatforms.add(label118263802474965, btnWinPF, label118263802474969, btnBlackberryPF, label118263802474973);
    var hbxHTMLPlatform = new kony.ui.Box({
        "id": "hbxHTMLPlatform",
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
    var label118263802475157 = new kony.ui.Label({
        "id": "label118263802475157",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "containerWeight": 17,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var btnHTMLPF = new kony.ui.Button({
        "focusSkin": "btnHTML5PFFoc",
        "id": "btnHTMLPF",
        "isVisible": true,
        "onClick": p2kwiet12889314951896_btnHTMLPF_onClick_seq0,
        "skin": "btnHTML5PF"
    }, {
        "containerWeight": 22,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label118263802475161 = new kony.ui.Label({
        "id": "label118263802475161",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "containerWeight": 61,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbxHTMLPlatform.add(label118263802475157, btnHTMLPF, label118263802475161);
    var lblClickMsg4User = new kony.ui.Label({
        "id": "lblClickMsg4User",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Click icon above to start"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [12, 24, 12, 12],
        "marginInPixel": true,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    frmPlatforms.add(hbxKonyLogoPFScreen, lblWelcome, hbxAndNiOSPlatforms, hbxWinNBBplatforms, hbxHTMLPlatform, lblClickMsg4User);
};

function frmPlatformsGlobals() {
    frmPlatforms = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmPlatforms,
        "enabledForIdleTimeout": false,
        "id": "frmPlatforms",
        "needAppMenu": false,
        "preShow": p2kwiet12889314951896_frmPlatforms_preshow_seq0,
        "skin": "frm",
        "title": "Home"
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
        "titleBar": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmPlatforms.info = {
        "kuid": "p2kwiet12889314951896"
    };
};