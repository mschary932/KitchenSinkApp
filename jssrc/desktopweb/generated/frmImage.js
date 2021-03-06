function addWidgetsfrmImage() {
    var hbxFitToDimensions = new kony.ui.Box({
        "id": "hbxFitToDimensions",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxWhite"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 4, 2, 2],
        "marginInPixel": false,
        "padding": [2, 2, 2, 3],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label118290614360772 = new kony.ui.Label({
        "id": "label118290614360772",
        "isVisible": true,
        "skin": "lblSub1",
        "text": "Fit to dimensions :"
    }, {
        "containerWeight": 30,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var vbox192926642422365 = new kony.ui.Box({
        "id": "vbox192926642422365",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "vbxGrayBorder"
    }, {
        "containerWeight": 70,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var labelori = new kony.ui.Label({
        "id": "labelori",
        "isVisible": true,
        "skin": "lblNormalTab",
        "text": "Original Image"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var labelorisize = new kony.ui.Label({
        "id": "labelorisize",
        "isVisible": true,
        "skin": "lblNormalTab",
        "text": "width=250px ; height=200px"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var imgOrignal = new kony.ui.Image2({
        "id": "imgOrignal",
        "isVisible": true,
        "src": "koala_250x200.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 200,
        "referenceWidth": 250,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var line2 = new kony.ui.Line({
        "id": "line2",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var labelimg = new kony.ui.Label({
        "id": "labelimg",
        "isVisible": true,
        "skin": "lblNormalTab",
        "text": "Image squeezed"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var labelimgsize = new kony.ui.Label({
        "id": "labelimgsize",
        "isVisible": true,
        "skin": "lblNormalTab",
        "text": "referenceWidth=200px; referenceHeight=100px"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var imgSqueezed = new kony.ui.Image2({
        "id": "imgSqueezed",
        "isVisible": true,
        "src": "koala_250x200.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 100,
        "referenceWidth": 200,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var line11827272688002 = new kony.ui.Line({
        "id": "line11827272688002",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var labelimgstr = new kony.ui.Label({
        "id": "labelimgstr",
        "isVisible": true,
        "skin": "lblNormalTab",
        "text": "Image stretched"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var labelimgstrsize = new kony.ui.Label({
        "id": "labelimgstrsize",
        "isVisible": true,
        "skin": "lblNormalTab",
        "text": "referenceWidth=350px; referenceHeight=300px"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var imgStretched = new kony.ui.Image2({
        "id": "imgStretched",
        "isVisible": true,
        "src": "koala_250x200.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 300,
        "referenceWidth": 300,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    vbox192926642422365.add(labelori, labelorisize, imgOrignal, line2, labelimg, labelimgsize, imgSqueezed, line11827272688002, labelimgstr, labelimgstrsize, imgStretched);
    hbxFitToDimensions.add(label118290614360772, vbox192926642422365);
    var hbxMaintainAspectRatio = new kony.ui.Box({
        "id": "hbxMaintainAspectRatio",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxWhite"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [2, 2, 2, 3],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label118290614363760 = new kony.ui.Label({
        "id": "label118290614363760",
        "isVisible": true,
        "skin": "lblSub1",
        "text": "Maintain aspect ratio :"
    }, {
        "containerWeight": 30,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var vbox118290614361940 = new kony.ui.Box({
        "id": "vbox118290614361940",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "vbxGrayBorder"
    }, {
        "containerWeight": 70,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label118290614363874 = new kony.ui.Label({
        "id": "label118290614363874",
        "isVisible": true,
        "skin": "lblNormalTab",
        "text": "Image aspect ratio is same as original image where,"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label118290614363876 = new kony.ui.Label({
        "id": "label118290614363876",
        "isVisible": true,
        "skin": "lblNormalTab",
        "text": "original image aspect ratio = 5:4 and"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var labeloriasp = new kony.ui.Label({
        "id": "labeloriasp",
        "isVisible": true,
        "skin": "lblNormalTab",
        "text": "aspect ratio of referenceWidth and referenceHeight = 2:1"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var imgOriginal2 = new kony.ui.Image2({
        "id": "imgOriginal2",
        "isVisible": true,
        "src": "koala_250x200.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "paddingInPixel": false,
        "referenceHeight": 100,
        "referenceWidth": 200,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var line118290614364390 = new kony.ui.Line({
        "id": "line118290614364390",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var labelimgrefwdht = new kony.ui.Label({
        "id": "labelimgrefwdht",
        "isVisible": true,
        "skin": "lblNormalTab",
        "text": "The below image is of size 600x600 without referenceWidth and referenceHeight"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var imgRefWdHt = new kony.ui.Image2({
        "id": "imgRefWdHt",
        "isVisible": true,
        "src": "kolalala.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    vbox118290614361940.add(label118290614363874, label118290614363876, labeloriasp, imgOriginal2, line118290614364390, labelimgrefwdht, imgRefWdHt);
    hbxMaintainAspectRatio.add(label118290614363760, vbox118290614361940);
    var hbxURLBasedImages = new kony.ui.Box({
        "id": "hbxURLBasedImages",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxWhite"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [2, 2, 2, 3],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label118290614367892 = new kony.ui.Label({
        "id": "label118290614367892",
        "isVisible": true,
        "skin": "lblSub1",
        "text": "URL based images :"
    }, {
        "containerWeight": 30,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var vbox118290614367890 = new kony.ui.Box({
        "id": "vbox118290614367890",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "vbxGrayBorder"
    }, {
        "containerWeight": 70,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label118290614367894 = new kony.ui.Label({
        "id": "label118290614367894",
        "isVisible": true,
        "skin": "lblNormalTab",
        "text": "referenceWidth=200px; referenceHeight=100px"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label118290614367896 = new kony.ui.Label({
        "id": "label118290614367896",
        "isVisible": true,
        "skin": "lblNormalTab",
        "text": "FIT TO DIMENTIONS"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var imgFt = new kony.ui.Image2({
        "id": "imgFt",
        "imageWhenFailed": "error_loading.png",
        "imageWhileDownloading": "download.png",
        "isVisible": true,
        "src": "http://www.fordesigner.com/imguploads/Image/cjbc/zcool/png20080525/1211728825.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "paddingInPixel": false,
        "referenceHeight": 100,
        "referenceWidth": 200,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var line118290614367902 = new kony.ui.Line({
        "id": "line118290614367902",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var label118290614367904 = new kony.ui.Label({
        "id": "label118290614367904",
        "isVisible": true,
        "skin": "lblNormalTab",
        "text": "referenceWidth=300px; referenceHeight=150px"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label118290614367906 = new kony.ui.Label({
        "id": "label118290614367906",
        "isVisible": true,
        "skin": "lblNormalTab",
        "text": "MAINTAIN ASPECT RATIO"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var imgMt = new kony.ui.Image2({
        "id": "imgMt",
        "imageWhenFailed": "error_loading.png",
        "imageWhileDownloading": "download.png",
        "isVisible": true,
        "src": "http://www.fordesigner.com/imguploads/Image/cjbc/zcool/png20080525/1211728825.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "paddingInPixel": false,
        "referenceHeight": 150,
        "referenceWidth": 300,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    vbox118290614367890.add(label118290614367894, label118290614367896, imgFt, line118290614367902, label118290614367904, label118290614367906, imgMt);
    hbxURLBasedImages.add(label118290614367892, vbox118290614367890);
    frmImage.add(hbxFitToDimensions, hbxMaintainAspectRatio, hbxURLBasedImages);
};

function frmImageGlobals() {
    frmImage = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmImage,
        "enabledForIdleTimeout": false,
        "id": "frmImage",
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
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
    frmImage.info = {
        "kuid": "p2kwiet12889314955384"
    };
};