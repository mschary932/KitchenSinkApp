function addWidgetsfrmScrollBoxMenu() {
    var sboxGlobalHome = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "sboxGlobalHome",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_NONE,
        "scrollingEvents": {},
        "showScrollbars": false
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "percent": true
    }, {});
    var vbox192735980067334 = new kony.ui.Box({
        "id": "vbox192735980067334",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 34,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbox192735980090519 = new kony.ui.Box({
        "id": "hbox192735980090519",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var scrollbox192735980090706 = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "scrollbox192735980090706",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "scrollingEvents": {},
        "showScrollbars": false
    }, {
        "containerHeight": 100,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "percent": true
    }, {});
    var hbox192735980094497 = new kony.ui.Box({
        "id": "hbox192735980094497",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox192735980042695 = new kony.ui.Box({
        "id": "vbox192735980042695",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbox192735980042714 = new kony.ui.Box({
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox192735980042714",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 6, 0, 4],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192735980042722 = new kony.ui.Image2({
        "id": "image2192735980042722",
        "isVisible": true,
        "src": "person.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192735980042723 = new kony.ui.Label({
        "id": "label192735980042723",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Alexander"
    }, {
        "containerWeight": 76,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox192735980042714.add(image2192735980042722, label192735980042723);
    var hbox192735980042779 = new kony.ui.Box({
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox192735980042779",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 4, 0, 4],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label192735980042783 = new kony.ui.Label({
        "id": "label192735980042783",
        "isVisible": true,
        "skin": "lblGray",
        "text": "FAVORITES"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox192735980042779.add(label192735980042783);
    var hbox192735980042797 = new kony.ui.Box({
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox192735980042797",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192735980042799 = new kony.ui.Image2({
        "id": "image2192735980042799",
        "isVisible": true,
        "src": "newsfeed.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192735980042801 = new kony.ui.Label({
        "id": "label192735980042801",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "NewsFeed"
    }, {
        "containerWeight": 76,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox192735980042797.add(image2192735980042799, label192735980042801);
    var hbox192735980042815 = new kony.ui.Box({
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox192735980042815",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192735980042817 = new kony.ui.Image2({
        "id": "image2192735980042817",
        "isVisible": true,
        "src": "messages.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192735980042819 = new kony.ui.Label({
        "id": "label192735980042819",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Messages"
    }, {
        "containerWeight": 76,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox192735980042815.add(image2192735980042817, label192735980042819);
    var hbox192735980042833 = new kony.ui.Box({
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox192735980042833",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192735980042835 = new kony.ui.Image2({
        "id": "image2192735980042835",
        "isVisible": true,
        "src": "nearby.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192735980042837 = new kony.ui.Label({
        "id": "label192735980042837",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Nearby"
    }, {
        "containerWeight": 76,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox192735980042833.add(image2192735980042835, label192735980042837);
    var hbox192735980042851 = new kony.ui.Box({
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox192735980042851",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192735980042853 = new kony.ui.Image2({
        "id": "image2192735980042853",
        "isVisible": true,
        "src": "events.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192735980042855 = new kony.ui.Label({
        "id": "label192735980042855",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Events"
    }, {
        "containerWeight": 76,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox192735980042851.add(image2192735980042853, label192735980042855);
    var hbox192735980042869 = new kony.ui.Box({
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox192735980042869",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192735980042871 = new kony.ui.Image2({
        "id": "image2192735980042871",
        "isVisible": true,
        "src": "friends.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192735980042873 = new kony.ui.Label({
        "id": "label192735980042873",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Friends"
    }, {
        "containerWeight": 76,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox192735980042869.add(image2192735980042871, label192735980042873);
    var hbox192735980042887 = new kony.ui.Box({
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox192735980042887",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 4, 0, 4],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label192735980042891 = new kony.ui.Label({
        "id": "label192735980042891",
        "isVisible": true,
        "skin": "lblGray",
        "text": "GROUPS"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox192735980042887.add(label192735980042891);
    var hbox192735980043205 = new kony.ui.Box({
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox192735980043205",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192735980043207 = new kony.ui.Image2({
        "id": "image2192735980043207",
        "isVisible": true,
        "src": "groups.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192735980043209 = new kony.ui.Label({
        "id": "label192735980043209",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Kony"
    }, {
        "containerWeight": 76,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox192735980043205.add(image2192735980043207, label192735980043209);
    var hbox192911746997651 = new kony.ui.Box({
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox192911746997651",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192911746997653 = new kony.ui.Image2({
        "id": "image2192911746997653",
        "isVisible": true,
        "src": "groups.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192911746997655 = new kony.ui.Label({
        "id": "label192911746997655",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Kony cloud"
    }, {
        "containerWeight": 76,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox192911746997651.add(image2192911746997653, label192911746997655);
    var hbox192911746997729 = new kony.ui.Box({
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox192911746997729",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192911746997731 = new kony.ui.Image2({
        "id": "image2192911746997731",
        "isVisible": true,
        "src": "groups.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192911746997733 = new kony.ui.Label({
        "id": "label192911746997733",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Google"
    }, {
        "containerWeight": 76,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox192911746997729.add(image2192911746997731, label192911746997733);
    var hbox192735980088345 = new kony.ui.Box({
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox192735980088345",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192735980088347 = new kony.ui.Image2({
        "id": "image2192735980088347",
        "isVisible": true,
        "src": "groups.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192735980088349 = new kony.ui.Label({
        "id": "label192735980088349",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Apple"
    }, {
        "containerWeight": 76,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox192735980088345.add(image2192735980088347, label192735980088349);
    var hbox192911746997789 = new kony.ui.Box({
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox192911746997789",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192911746997791 = new kony.ui.Image2({
        "id": "image2192911746997791",
        "isVisible": true,
        "src": "groups.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192911746997793 = new kony.ui.Label({
        "id": "label192911746997793",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "BlackBerry"
    }, {
        "containerWeight": 76,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox192911746997789.add(image2192911746997791, label192911746997793);
    var hbox1178228956140 = new kony.ui.Box({
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox1178228956140",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image21178228956142 = new kony.ui.Image2({
        "id": "image21178228956142",
        "isVisible": true,
        "src": "groups.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label1178228956144 = new kony.ui.Label({
        "id": "label1178228956144",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Sky"
    }, {
        "containerWeight": 76,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox1178228956140.add(image21178228956142, label1178228956144);
    var hbox1178228956158 = new kony.ui.Box({
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox1178228956158",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image21178228956160 = new kony.ui.Image2({
        "id": "image21178228956160",
        "isVisible": true,
        "src": "groups.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label1178228956162 = new kony.ui.Label({
        "id": "label1178228956162",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Android"
    }, {
        "containerWeight": 76,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox1178228956158.add(image21178228956160, label1178228956162);
    var hbox1178228956176 = new kony.ui.Box({
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox1178228956176",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image21178228956178 = new kony.ui.Image2({
        "id": "image21178228956178",
        "isVisible": true,
        "src": "groups.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label1178228956180 = new kony.ui.Label({
        "id": "label1178228956180",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "SPA"
    }, {
        "containerWeight": 76,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox1178228956176.add(image21178228956178, label1178228956180);
    var hbox192911746996457 = new kony.ui.Box({
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox192911746996457",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192911746996459 = new kony.ui.Image2({
        "id": "image2192911746996459",
        "isVisible": true,
        "src": "groups.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192911746996461 = new kony.ui.Label({
        "id": "label192911746996461",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "MAM"
    }, {
        "containerWeight": 76,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox192911746996457.add(image2192911746996459, label192911746996461);
    var hbox192911746996541 = new kony.ui.Box({
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox192911746996541",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192911746996543 = new kony.ui.Image2({
        "id": "image2192911746996543",
        "isVisible": true,
        "src": "groups.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192911746996545 = new kony.ui.Label({
        "id": "label192911746996545",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "MDM"
    }, {
        "containerWeight": 76,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox192911746996541.add(image2192911746996543, label192911746996545);
    var hbox192747896498268 = new kony.ui.Box({
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox192747896498268",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192747896498270 = new kony.ui.Image2({
        "id": "image2192747896498270",
        "isVisible": true,
        "src": "groups.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192747896498272 = new kony.ui.Label({
        "id": "label192747896498272",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "ABC"
    }, {
        "containerWeight": 76,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox192747896498268.add(image2192747896498270, label192747896498272);
    var hbox192747896498286 = new kony.ui.Box({
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox192747896498286",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192747896498288 = new kony.ui.Image2({
        "id": "image2192747896498288",
        "isVisible": true,
        "src": "groups.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192747896498290 = new kony.ui.Label({
        "id": "label192747896498290",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Stanford"
    }, {
        "containerWeight": 76,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox192747896498286.add(image2192747896498288, label192747896498290);
    var hbox192747896498304 = new kony.ui.Box({
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox192747896498304",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192747896498306 = new kony.ui.Image2({
        "id": "image2192747896498306",
        "isVisible": true,
        "src": "groups.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192747896498308 = new kony.ui.Label({
        "id": "label192747896498308",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Citi"
    }, {
        "containerWeight": 76,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox192747896498304.add(image2192747896498306, label192747896498308);
    var hbox192747896498424 = new kony.ui.Box({
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox192747896498424",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192747896498426 = new kony.ui.Image2({
        "id": "image2192747896498426",
        "isVisible": true,
        "src": "groups.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192747896498428 = new kony.ui.Label({
        "id": "label192747896498428",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Toyota"
    }, {
        "containerWeight": 76,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox192747896498424.add(image2192747896498426, label192747896498428);
    var hbox192747896498442 = new kony.ui.Box({
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox192747896498442",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192747896498444 = new kony.ui.Image2({
        "id": "image2192747896498444",
        "isVisible": true,
        "src": "groups.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192747896498446 = new kony.ui.Label({
        "id": "label192747896498446",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Microsoft"
    }, {
        "containerWeight": 76,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox192747896498442.add(image2192747896498444, label192747896498446);
    var hbox192747896498850 = new kony.ui.Box({
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox192747896498850",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192747896498852 = new kony.ui.Image2({
        "id": "image2192747896498852",
        "isVisible": true,
        "src": "groups.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192747896498854 = new kony.ui.Label({
        "id": "label192747896498854",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Vertical apps"
    }, {
        "containerWeight": 76,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox192747896498850.add(image2192747896498852, label192747896498854);
    var hbox192747896498868 = new kony.ui.Box({
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox192747896498868",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192747896498870 = new kony.ui.Image2({
        "id": "image2192747896498870",
        "isVisible": true,
        "src": "groups.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192747896498872 = new kony.ui.Label({
        "id": "label192747896498872",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Product support"
    }, {
        "containerWeight": 76,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox192747896498868.add(image2192747896498870, label192747896498872);
    var hbox192747896498886 = new kony.ui.Box({
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox192747896498886",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192747896498888 = new kony.ui.Image2({
        "id": "image2192747896498888",
        "isVisible": true,
        "src": "groups.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192747896498890 = new kony.ui.Label({
        "id": "label192747896498890",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Testers"
    }, {
        "containerWeight": 76,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox192747896498886.add(image2192747896498888, label192747896498890);
    vbox192735980042695.add(hbox192735980042714, hbox192735980042779, hbox192735980042797, hbox192735980042815, hbox192735980042833, hbox192735980042851, hbox192735980042869, hbox192735980042887, hbox192735980043205, hbox192911746997651, hbox192911746997729, hbox192735980088345, hbox192911746997789, hbox1178228956140, hbox1178228956158, hbox1178228956176, hbox192911746996457, hbox192911746996541, hbox192747896498268, hbox192747896498286, hbox192747896498304, hbox192747896498424, hbox192747896498442, hbox192747896498850, hbox192747896498868, hbox192747896498886);
    hbox192735980094497.add(vbox192735980042695);
    scrollbox192735980090706.add(hbox192735980094497);
    hbox192735980090519.add(scrollbox192735980090706);
    vbox192735980067334.add(hbox192735980090519);
    var vbox192735980042697 = new kony.ui.Box({
        "id": "vbox192735980042697",
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
    var hbox192735980042698 = new kony.ui.Box({
        "id": "hbox192735980042698",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxBlue"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 0, 1],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var button192735980042699 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button192735980042699",
        "isVisible": true,
        "onClick": p2kwiet12889314954442_button192735980042699_onClick_seq0,
        "skin": "btnExpand"
    }, {
        "containerWeight": 6,
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
    var label1927359800122962 = new kony.ui.Label({
        "id": "label1927359800122962",
        "isVisible": true,
        "skin": "lblTransparent"
    }, {
        "containerWeight": 54,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox192735980042698.add(button192735980042699, label1927359800122962);
    var hbox1927359800108588 = new kony.ui.Box({
        "id": "hbox1927359800108588",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "marginInPixel": false,
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var scrollbox1927359800110223 = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "scrollbox1927359800110223",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "scrollingEvents": {},
        "showScrollbars": false
    }, {
        "containerHeight": 96,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 60,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "percent": true
    }, {});
    var hbox192735980042706 = new kony.ui.Box({
        "id": "hbox192735980042706",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 2, 0, 2],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192735980042707 = new kony.ui.Image2({
        "id": "image2192735980042707",
        "isVisible": true,
        "src": "person.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "marginInPixel": false,
        "paddingInPixel": false,
        "referenceHeight": 32,
        "referenceWidth": 35,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var label192735980042708 = new kony.ui.Label({
        "id": "label192735980042708",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Vikas Malhotra"
    }, {
        "containerWeight": 76,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "padding": [4, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox192735980042706.add(image2192735980042707, label192735980042708);
    var richtext118263802475841 = new kony.ui.RichText({
        "id": "richtext118263802475841",
        "isVisible": true,
        "skin": "richNormalSimilar",
        "text": "Please click top left button to observe scrolling towards right.Again click the same button to observe scrolling towards left.Also you can scroll towards top and bottom.\nYou can scroll in vertical direction by swiping your hand bottom to top / top to bottom.\nPlease click top left button to observe scrolling towards right.Again click the same button to observe scrolling towards left.Also you can scroll towards top and bottom.\nYou can scroll in vertical direction by swiping your hand bottom to top / top to bottom."
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 2, 1, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var image21927359800107074 = new kony.ui.Image2({
        "id": "image21927359800107074",
        "isVisible": true,
        "src": "wall.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "marginInPixel": false,
        "paddingInPixel": false,
        "referenceHeight": 850,
        "referenceWidth": 900,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var hbox192735980042710 = new kony.ui.Box({
        "id": "hbox192735980042710",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [5, 2, 0, 2],
        "marginInPixel": false,
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label192735980042711 = new kony.ui.Label({
        "id": "label192735980042711",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Like"
    }, {
        "containerWeight": 34,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var label192735980042712 = new kony.ui.Label({
        "id": "label192735980042712",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Comment"
    }, {
        "containerWeight": 33,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var label192735980042713 = new kony.ui.Label({
        "id": "label192735980042713",
        "isVisible": true,
        "skin": "lblNormalSimilar",
        "text": "Share"
    }, {
        "containerWeight": 33,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "marginInPixel": false,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hbox192735980042710.add(label192735980042711, label192735980042712, label192735980042713);
    scrollbox1927359800110223.add(hbox192735980042706, richtext118263802475841, image21927359800107074, hbox192735980042710);
    hbox1927359800108588.add(scrollbox1927359800110223);
    vbox192735980042697.add(hbox192735980042698, hbox1927359800108588);
    sboxGlobalHome.add(vbox192735980067334, vbox192735980042697);
    frmScrollBoxMenu.add(sboxGlobalHome);
};

function frmScrollBoxMenuGlobals() {
    frmScrollBoxMenu = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmScrollBoxMenu,
        "enabledForIdleTimeout": false,
        "id": "frmScrollBoxMenu",
        "init": p2kwiet12889314954442_frmScrollBoxMenu_init_seq0,
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