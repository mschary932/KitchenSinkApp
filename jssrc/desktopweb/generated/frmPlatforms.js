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
        "margin": [0, 2, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
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
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var image2118263802476287 = new kony.ui.Image2({
        "id": "image2118263802476287",
        "isVisible": true,
        "src": "kony_logo.png"
    }, {
        "containerWeight": 16,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 2, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
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
        "margin": [4, 2, 4, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var hbxAndNiOSPlatforms = new kony.ui.Box({
        "id": "hbxAndNiOSPlatforms",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [4, 2, 4, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
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
        "margin": [0, 10, 0, 10],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btnAndroidPF = new kony.ui.Button({
        "focusSkin": "btnAndPFFoc",
        "id": "btnAndroidPF",
        "isVisible": true,
        "onClick": p2kwiet12889314955546_btnAndroidPF_onClick_seq0,
        "skin": "btnAndPF"
    }, {
        "containerWeight": 22,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [6, 6, 6, 6],
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
    }, {});
    var btnIOSPF = new kony.ui.Button({
        "focusSkin": "btnIPhonePFFoc",
        "id": "btnIOSPF",
        "isVisible": true,
        "onClick": p2kwiet12889314955546_btnIOSPF_onClick_seq0,
        "skin": "btnIphonePF"
    }, {
        "containerWeight": 22,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [6, 6, 6, 6],
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
    }, {});
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
        "margin": [4, 2, 4, 0],
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
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btnWinPF = new kony.ui.Button({
        "focusSkin": "btnWinPFFoc",
        "id": "btnWinPF",
        "isVisible": true,
        "onClick": p2kwiet12889314955546_btnWinPF_onClick_seq0,
        "skin": "btnWindowsPF"
    }, {
        "containerWeight": 22,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [6, 6, 6, 6],
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
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btnHTMLPF = new kony.ui.Button({
        "focusSkin": "btnHTML5PFFoc",
        "id": "btnHTMLPF",
        "isVisible": true,
        "onClick": p2kwiet12889314955546_btnHTMLPF_onClick_seq0,
        "skin": "btnHTML5PF"
    }, {
        "containerWeight": 22,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [6, 6, 6, 6],
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
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbxWinNBBplatforms.add(label118263802474965, btnWinPF, label118263802474969, btnHTMLPF, label118263802474973);
    var lblClickMsg4User = new kony.ui.Label({
        "id": "lblClickMsg4User",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Click icon above to start"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [4, 2, 4, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmPlatforms.add(hbxKonyLogoPFScreen, lblWelcome, hbxAndNiOSPlatforms, hbxWinNBBplatforms, lblClickMsg4User);
};

function frmPlatformsGlobals() {
    frmPlatforms = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmPlatforms,
        "enabledForIdleTimeout": false,
        "id": "frmPlatforms",
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "needAppMenu": false,
        "preShow": p2kwiet12889314955546_frmPlatforms_preshow_seq0,
        "skin": "frm",
        "title": "Home"
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
    frmPlatforms.info = {
        "kuid": "p2kwiet12889314955546"
    };
};