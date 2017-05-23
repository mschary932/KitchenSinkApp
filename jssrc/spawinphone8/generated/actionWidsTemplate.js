function initializeactionWidsTemplate() {
    hbxActionTemplate = new kony.ui.Box({
        "id": "hbxActionTemplate",
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
    var imgActionImage = new kony.ui.Image2({
        "id": "imgActionImage",
        "isVisible": true
    }, {
        "containerWeight": 34,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var imgActionLink = new kony.ui.Link({
        "focusSkin": "lnkFocus",
        "id": "imgActionLink",
        "isVisible": true,
        "onClick": p2kwiet12889314956024_imgActionLink_onClick_seq0,
        "skin": "linkImage",
        "text": "Link"
    }, {
        "containerWeight": 39,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var imgActionButton = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "imgActionButton",
        "isVisible": true,
        "onClick": p2kwiet12889314956024_imgActionButton_onClick_seq0,
        "skin": "btnNormal",
        "text": "Button"
    }, {
        "containerWeight": 27,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 1, 2, 1],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbxActionTemplate.add(imgActionImage, imgActionLink, imgActionButton);
}