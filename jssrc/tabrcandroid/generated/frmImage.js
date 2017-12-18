function addWidgetsfrmImage() {
    var hbxFitToDimensions = new kony.ui.Box({
        "id": "hbxFitToDimensions",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxRoundBorder"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 2, 2, 2],
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
    var label118290614360772 = new kony.ui.Label({
        "id": "label118290614360772",
        "isVisible": true,
        "skin": "lblSub1",
        "text": "Fit to dimensions"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var line1 = new kony.ui.Line({
        "id": "line1",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var labelori = new kony.ui.Label({
        "id": "labelori",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Original Image"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 0, 1, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var labelorisize = new kony.ui.Label({
        "id": "labelorisize",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "width=250px ; height=200px"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
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
        "skin": "lblNormalSimilar",
        "text": "Image squeezed"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var labelimgsize = new kony.ui.Label({
        "id": "labelimgsize",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "referenceWidth=200px; referenceHeight=100px"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
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
        "skin": "lblNormalSimilar",
        "text": "Image stretched"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var labelimgstrsize = new kony.ui.Label({
        "id": "labelimgstrsize",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "referenceWidth=350px; referenceHeight=300px"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
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
    vbox192926642422365.add(label118290614360772, line1, labelori, labelorisize, imgOrignal, line2, labelimg, labelimgsize, imgSqueezed, line11827272688002, labelimgstr, labelimgstrsize, imgStretched);
    hbxFitToDimensions.add(vbox192926642422365);
    var hbxMaintainAspectRatio = new kony.ui.Box({
        "id": "hbxMaintainAspectRatio",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxRoundBorder"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox118290614361940 = new kony.ui.Box({
        "id": "vbox118290614361940",
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
    var label118290614363760 = new kony.ui.Label({
        "id": "label118290614363760",
        "isVisible": true,
        "skin": "lblSub1",
        "text": "Maintain aspect ratio"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var line118290614363792 = new kony.ui.Line({
        "id": "line118290614363792",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var label118290614363874 = new kony.ui.Label({
        "id": "label118290614363874",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Image aspect ratio is same as original image where,"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var label118290614363876 = new kony.ui.Label({
        "id": "label118290614363876",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "original image aspect ratio = 5:4 and"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var labeloriasp = new kony.ui.Label({
        "id": "labeloriasp",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "aspect ratio of referenceWidth and referenceHeight = 2:1"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
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
        "skin": "lblNormalSimilar",
        "text": "The below image is of size 600x600 without referenceWidth and referenceHeight"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
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
    vbox118290614361940.add(label118290614363760, line118290614363792, label118290614363874, label118290614363876, labeloriasp, imgOriginal2, line118290614364390, labelimgrefwdht, imgRefWdHt);
    hbxMaintainAspectRatio.add(vbox118290614361940);
    var hbxCrop = new kony.ui.Box({
        "id": "hbxCrop",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxRoundBorder"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox118290614365720 = new kony.ui.Box({
        "id": "vbox118290614365720",
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
    var label118290614365722 = new kony.ui.Label({
        "id": "label118290614365722",
        "isVisible": true,
        "skin": "lblSub1",
        "text": "Crop"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var line118290614365724 = new kony.ui.Line({
        "id": "line118290614365724",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var label118290614365726 = new kony.ui.Label({
        "id": "label118290614365726",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Image cropped as image size is larger than image widget size"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var imgCrop = new kony.ui.Image2({
        "id": "imgCrop",
        "isVisible": true,
        "src": "koala_250x200.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_CROP,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "referenceHeight": 100,
        "referenceWidth": 200,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    vbox118290614365720.add(label118290614365722, line118290614365724, label118290614365726, imgCrop);
    hbxCrop.add(vbox118290614365720);
    var hbxURLBasedImages = new kony.ui.Box({
        "id": "hbxURLBasedImages",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxRoundBorder"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox118290614367890 = new kony.ui.Box({
        "id": "vbox118290614367890",
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
    var label118290614367892 = new kony.ui.Label({
        "id": "label118290614367892",
        "isVisible": true,
        "skin": "lblSub1",
        "text": "URL based images"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var line118290614367900 = new kony.ui.Line({
        "id": "line118290614367900",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var label118290614367894 = new kony.ui.Label({
        "id": "label118290614367894",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "referenceWidth=200px; referenceHeight=100px"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var label118290614367896 = new kony.ui.Label({
        "id": "label118290614367896",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "FIT TO DIMENTIONS"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var imgFt = new kony.ui.Image2({
        "id": "imgFt",
        "imageWhenFailed": "error_loading.png",
        "imageWhileDownloading": "download.png",
        "isVisible": true,
        "src": "1211728825.png"
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
        "skin": "lblNormalSimilar",
        "text": "referenceWidth=300px; referenceHeight=150px"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var label118290614367906 = new kony.ui.Label({
        "id": "label118290614367906",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "MAINTAIN ASPECT RATIO"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var imgMt = new kony.ui.Image2({
        "id": "imgMt",
        "imageWhenFailed": "error_loading.png",
        "imageWhileDownloading": "download.png",
        "isVisible": true,
        "src": "1211728825.png"
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
    var line118290614367910 = new kony.ui.Line({
        "id": "line118290614367910",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var label118290614367912 = new kony.ui.Label({
        "id": "label118290614367912",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "referenceWidth=100px; referenceHeight=100px"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var label118290614367914 = new kony.ui.Label({
        "id": "label118290614367914",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "CROP"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var imgCp = new kony.ui.Image2({
        "id": "imgCp",
        "imageWhenFailed": "error_loading.png",
        "imageWhileDownloading": "download.png",
        "isVisible": true,
        "src": "1211728825.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_CROP,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "paddingInPixel": false,
        "referenceHeight": 100,
        "referenceWidth": 100,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    vbox118290614367890.add(label118290614367892, line118290614367900, label118290614367894, label118290614367896, imgFt, line118290614367902, label118290614367904, label118290614367906, imgMt, line118290614367910, label118290614367912, label118290614367914, imgCp);
    hbxURLBasedImages.add(vbox118290614367890);
    frmImage.add(hbxFitToDimensions, hbxMaintainAspectRatio, hbxCrop, hbxURLBasedImages);
};

function frmImageGlobals() {
    frmImage = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmImage,
        "enabledForIdleTimeout": false,
        "id": "frmImage",
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
};