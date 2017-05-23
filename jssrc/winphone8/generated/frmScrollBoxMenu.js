function addWidgetsfrmScrollBoxMenu() {
    var sboxGlobalHome = new kony.ui.ScrollBox({
        "enableCache": false,
        "enableScrollByPage": false,
        "id": "sboxGlobalHome",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "scrollingEvents": {},
        "showScrollbars": false
    }, {
        "containerHeight": 100,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true
    }, {});
    var vbox192735980067334 = new kony.ui.Box({
        "enableCache": false,
        "id": "vbox192735980067334",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 80,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbox192735980090519 = new kony.ui.Box({
        "enableCache": false,
        "id": "hbox192735980090519",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var scrollbox192735980090706 = new kony.ui.ScrollBox({
        "enableCache": false,
        "enableScrollByPage": false,
        "id": "scrollbox192735980090706",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "scrollingEvents": {},
        "showScrollbars": false
    }, {
        "containerHeight": 99,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true
    }, {});
    var hbox192735980094497 = new kony.ui.Box({
        "enableCache": false,
        "id": "hbox192735980094497",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var vbox192735980042695 = new kony.ui.Box({
        "enableCache": false,
        "id": "vbox192735980042695",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbox192735980042714 = new kony.ui.Box({
        "enableCache": false,
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
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192735980042722 = new kony.ui.Image2({
        "enableCache": false,
        "id": "image2192735980042722",
        "isVisible": true,
        "src": "person.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192735980042723 = new kony.ui.Label({
        "enableCache": false,
        "id": "label192735980042723",
        "isVisible": true,
        "text": "Alexander"
    }, {
        "containerWeight": 75,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [3, 10, 3, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox192735980042714.add(image2192735980042722, label192735980042723);
    var hbox192735980042779 = new kony.ui.Box({
        "enableCache": false,
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
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lbFavourites = new kony.ui.Label({
        "enableCache": false,
        "id": "lbFavourites",
        "isVisible": true,
        "skin": "lblGray",
        "text": "FAVORITES"
    }, {
        "containerWeight": 99,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [3, 10, 3, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox192735980042779.add(lbFavourites);
    var hbox192735980042797 = new kony.ui.Box({
        "enableCache": false,
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
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192735980042799 = new kony.ui.Image2({
        "enableCache": false,
        "id": "image2192735980042799",
        "isVisible": true,
        "src": "newsfeed.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192735980042801 = new kony.ui.Label({
        "enableCache": false,
        "id": "label192735980042801",
        "isVisible": true,
        "text": "NewsFeed"
    }, {
        "containerWeight": 75,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [3, 10, 3, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox192735980042797.add(image2192735980042799, label192735980042801);
    var hbox192735980042815 = new kony.ui.Box({
        "enableCache": false,
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
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192735980042817 = new kony.ui.Image2({
        "enableCache": false,
        "id": "image2192735980042817",
        "isVisible": true,
        "src": "messages.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192735980042819 = new kony.ui.Label({
        "enableCache": false,
        "id": "label192735980042819",
        "isVisible": true,
        "text": "Messages"
    }, {
        "containerWeight": 75,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [3, 10, 3, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox192735980042815.add(image2192735980042817, label192735980042819);
    var hbox192735980042833 = new kony.ui.Box({
        "enableCache": false,
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
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192735980042835 = new kony.ui.Image2({
        "enableCache": false,
        "id": "image2192735980042835",
        "isVisible": true,
        "src": "nearby.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192735980042837 = new kony.ui.Label({
        "enableCache": false,
        "id": "label192735980042837",
        "isVisible": true,
        "text": "Nearby"
    }, {
        "containerWeight": 75,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [3, 10, 3, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox192735980042833.add(image2192735980042835, label192735980042837);
    var hbox192735980042851 = new kony.ui.Box({
        "enableCache": false,
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
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192735980042853 = new kony.ui.Image2({
        "enableCache": false,
        "id": "image2192735980042853",
        "isVisible": true,
        "src": "events.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192735980042855 = new kony.ui.Label({
        "enableCache": false,
        "id": "label192735980042855",
        "isVisible": true,
        "text": "Events"
    }, {
        "containerWeight": 75,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [3, 10, 3, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox192735980042851.add(image2192735980042853, label192735980042855);
    var hbox192735980042869 = new kony.ui.Box({
        "enableCache": false,
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
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192735980042871 = new kony.ui.Image2({
        "enableCache": false,
        "id": "image2192735980042871",
        "isVisible": true,
        "src": "friends.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192735980042873 = new kony.ui.Label({
        "enableCache": false,
        "id": "label192735980042873",
        "isVisible": true,
        "text": "Friends"
    }, {
        "containerWeight": 75,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [3, 10, 3, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox192735980042869.add(image2192735980042871, label192735980042873);
    var hbox192735980042887 = new kony.ui.Box({
        "enableCache": false,
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
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label192735980042891 = new kony.ui.Label({
        "enableCache": false,
        "id": "label192735980042891",
        "isVisible": true,
        "skin": "lblGray",
        "text": "GROUPS"
    }, {
        "containerWeight": 99,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [3, 10, 3, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox192735980042887.add(label192735980042891);
    var hbox192735980043205 = new kony.ui.Box({
        "enableCache": false,
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
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192735980043207 = new kony.ui.Image2({
        "enableCache": false,
        "id": "image2192735980043207",
        "isVisible": true,
        "src": "groups.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192735980043209 = new kony.ui.Label({
        "enableCache": false,
        "id": "label192735980043209",
        "isVisible": true,
        "text": "Kony"
    }, {
        "containerWeight": 75,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [3, 10, 3, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox192735980043205.add(image2192735980043207, label192735980043209);
    var hbox192735980088345 = new kony.ui.Box({
        "enableCache": false,
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
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192735980088347 = new kony.ui.Image2({
        "enableCache": false,
        "id": "image2192735980088347",
        "isVisible": true,
        "src": "groups.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192735980088349 = new kony.ui.Label({
        "enableCache": false,
        "id": "label192735980088349",
        "isVisible": true,
        "text": "Apple"
    }, {
        "containerWeight": 75,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [3, 10, 3, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox192735980088345.add(image2192735980088347, label192735980088349);
    var hbox1180105789136252 = new kony.ui.Box({
        "enableCache": false,
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox1180105789136252",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image21180105789136254 = new kony.ui.Image2({
        "enableCache": false,
        "id": "image21180105789136254",
        "isVisible": true,
        "src": "groups.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label1180105789136256 = new kony.ui.Label({
        "enableCache": false,
        "id": "label1180105789136256",
        "isVisible": true,
        "text": "Mango"
    }, {
        "containerWeight": 75,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [3, 10, 3, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox1180105789136252.add(image21180105789136254, label1180105789136256);
    var hbox1180105789136270 = new kony.ui.Box({
        "enableCache": false,
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox1180105789136270",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image21180105789136272 = new kony.ui.Image2({
        "enableCache": false,
        "id": "image21180105789136272",
        "isVisible": true,
        "src": "groups.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label1180105789136274 = new kony.ui.Label({
        "enableCache": false,
        "id": "label1180105789136274",
        "isVisible": true,
        "text": "BB"
    }, {
        "containerWeight": 75,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [3, 10, 3, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox1180105789136270.add(image21180105789136272, label1180105789136274);
    var hbox1180105789136288 = new kony.ui.Box({
        "enableCache": false,
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox1180105789136288",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image21180105789136290 = new kony.ui.Image2({
        "enableCache": false,
        "id": "image21180105789136290",
        "isVisible": true,
        "src": "groups.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label1180105789136292 = new kony.ui.Label({
        "enableCache": false,
        "id": "label1180105789136292",
        "isVisible": true,
        "text": "Iphone"
    }, {
        "containerWeight": 75,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [3, 10, 3, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox1180105789136288.add(image21180105789136290, label1180105789136292);
    var hbox120858598330946 = new kony.ui.Box({
        "enableCache": false,
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox120858598330946",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2120858598330948 = new kony.ui.Image2({
        "enableCache": false,
        "id": "image2120858598330948",
        "isVisible": true,
        "src": "groups.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label120858598330950 = new kony.ui.Label({
        "enableCache": false,
        "id": "label120858598330950",
        "isVisible": true,
        "text": "Windows8"
    }, {
        "containerWeight": 75,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [3, 10, 3, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox120858598330946.add(image2120858598330948, label120858598330950);
    var hbox685080434507150 = new kony.ui.Box({
        "enableCache": false,
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox685080434507150",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2685080434507152 = new kony.ui.Image2({
        "enableCache": false,
        "id": "image2685080434507152",
        "isVisible": true,
        "src": "groups.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label685080434507154 = new kony.ui.Label({
        "enableCache": false,
        "id": "label685080434507154",
        "isVisible": true,
        "skin": "lblNormal",
        "text": "MAM"
    }, {
        "containerWeight": 75,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [3, 10, 3, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox685080434507150.add(image2685080434507152, label685080434507154);
    var hbox685080434507330 = new kony.ui.Box({
        "enableCache": false,
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox685080434507330",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2685080434507332 = new kony.ui.Image2({
        "enableCache": false,
        "id": "image2685080434507332",
        "isVisible": true,
        "src": "groups.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label685080434507334 = new kony.ui.Label({
        "enableCache": false,
        "id": "label685080434507334",
        "isVisible": true,
        "skin": "lblNormal",
        "text": "Sync"
    }, {
        "containerWeight": 75,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [3, 10, 3, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox685080434507330.add(image2685080434507332, label685080434507334);
    var hbox685080434502602 = new kony.ui.Box({
        "enableCache": false,
        "focusSkin": "hBoxGrayFocus",
        "id": "hbox685080434502602",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "hBoxGray"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2685080434502604 = new kony.ui.Image2({
        "enableCache": false,
        "id": "image2685080434502604",
        "isVisible": true,
        "src": "groups.png"
    }, {
        "containerWeight": 24,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label685080434502606 = new kony.ui.Label({
        "enableCache": false,
        "id": "label685080434502606",
        "isVisible": true,
        "skin": "lblNormal",
        "text": "MDM"
    }, {
        "containerWeight": 75,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [3, 10, 3, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox685080434502602.add(image2685080434502604, label685080434502606);
    vbox192735980042695.add(hbox192735980042714, hbox192735980042779, hbox192735980042797, hbox192735980042815, hbox192735980042833, hbox192735980042851, hbox192735980042869, hbox192735980042887, hbox192735980043205, hbox192735980088345, hbox1180105789136252, hbox1180105789136270, hbox1180105789136288, hbox120858598330946, hbox685080434507150, hbox685080434507330, hbox685080434502602);
    hbox192735980094497.add(vbox192735980042695);
    scrollbox192735980090706.add(hbox192735980094497);
    hbox192735980090519.add(scrollbox192735980090706);
    vbox192735980067334.add(hbox192735980090519);
    var vbox192735980042697 = new kony.ui.Box({
        "enableCache": false,
        "id": "vbox192735980042697",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var hbox192735980042698 = new kony.ui.Box({
        "enableCache": false,
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
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var btnExpandNCollapse = new kony.ui.Button({
        "enableCache": false,
        "focusSkin": "btnExpand",
        "id": "btnExpandNCollapse",
        "isVisible": true,
        "skin": "btnExpand"
    }, {
        "containerWeight": 16,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [1, 10, 1, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label1927359800122962 = new kony.ui.Label({
        "enableCache": false,
        "id": "label1927359800122962",
        "isVisible": true,
        "skin": "lblTransparent"
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
    }, {});
    hbox192735980042698.add(btnExpandNCollapse, label1927359800122962);
    var hbox1927359800108588 = new kony.ui.Box({
        "enableCache": false,
        "id": "hbox1927359800108588",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var scrollbox1927359800110223 = new kony.ui.ScrollBox({
        "enableCache": false,
        "enableScrollByPage": false,
        "id": "scrollbox1927359800110223",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "scrollingEvents": {},
        "showScrollbars": false
    }, {
        "containerHeight": 90,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true
    }, {});
    var hbox192735980042706 = new kony.ui.Box({
        "enableCache": false,
        "id": "hbox192735980042706",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image2192735980042707 = new kony.ui.Image2({
        "enableCache": false,
        "id": "image2192735980042707",
        "isVisible": true,
        "src": "person.png"
    }, {
        "containerWeight": 23,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 32,
        "referenceWidth": 35,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var label192735980042708 = new kony.ui.Label({
        "enableCache": false,
        "id": "label192735980042708",
        "isVisible": true,
        "skin": "lblBlue",
        "text": "Vikas Malhotra"
    }, {
        "containerWeight": 77,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox192735980042706.add(image2192735980042707, label192735980042708);
    var textarea2192735980042709 = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "enableCache": false,
        "focusSkin": "txtAreaFocus",
        "id": "textarea2192735980042709",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "numberOfVisibleLines": 3,
        "skin": "txtAreaNormal",
        "text": "Only a life lived for others is a life worthwhile. \nAlbert Einstein \n\nDo not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 2, 2, 2],
        "marginInPixel": false,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    var image21927359800107074 = new kony.ui.Image2({
        "enableCache": false,
        "id": "image21927359800107074",
        "isVisible": true,
        "src": "wall.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 480,
        "referenceWidth": 480,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var hbox192735980042710 = new kony.ui.Box({
        "enableCache": false,
        "id": "hbox192735980042710",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [2, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label192735980042711 = new kony.ui.Label({
        "enableCache": false,
        "id": "label192735980042711",
        "isVisible": true,
        "skin": "lblNormal",
        "text": "Like"
    }, {
        "containerWeight": 33,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [3, 10, 3, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var label192735980042712 = new kony.ui.Label({
        "enableCache": false,
        "id": "label192735980042712",
        "isVisible": true,
        "skin": "lblNormal",
        "text": "Comment"
    }, {
        "containerWeight": 33,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [3, 10, 3, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lbShare = new kony.ui.Label({
        "enableCache": false,
        "id": "lbShare",
        "isVisible": true,
        "skin": "lblNormal",
        "text": "Share"
    }, {
        "containerWeight": 34,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [30, 1, 1, 1],
        "marginInPixel": true,
        "padding": [3, 10, 3, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox192735980042710.add(label192735980042711, label192735980042712, lbShare);
    scrollbox1927359800110223.add(hbox192735980042706, textarea2192735980042709, image21927359800107074, hbox192735980042710);
    hbox1927359800108588.add(scrollbox1927359800110223);
    vbox192735980042697.add(hbox192735980042698, hbox1927359800108588);
    sboxGlobalHome.add(vbox192735980067334, vbox192735980042697);
    frmScrollBoxMenu.add(sboxGlobalHome);
};

function frmScrollBoxMenuGlobals() {
    frmScrollBoxMenu = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmScrollBoxMenu,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmScrollBoxMenu",
        "needAppMenu": true,
        "skin": "frm",
        "title": "ScrollBox Menu"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["btnExpandNCollapse", "hbox1180105789136252", "hbox1180105789136270", "hbox1180105789136288", "hbox120858598330946", "hbox1927359800108588", "hbox192735980042698", "hbox192735980042706", "hbox192735980042710", "hbox192735980042714", "hbox192735980042779", "hbox192735980042797", "hbox192735980042815", "hbox192735980042833", "hbox192735980042851", "hbox192735980042869", "hbox192735980042887", "hbox192735980043205", "hbox192735980088345", "hbox192735980090519", "hbox192735980094497", "hbox685080434502602", "hbox685080434507150", "hbox685080434507330", "image21180105789136254", "image21180105789136272", "image21180105789136290", "image2120858598330948", "image21927359800107074", "image2192735980042707", "image2192735980042722", "image2192735980042799", "image2192735980042817", "image2192735980042835", "image2192735980042853", "image2192735980042871", "image2192735980043207", "image2192735980088347", "image2685080434502604", "image2685080434507152", "image2685080434507332", "label1180105789136256", "label1180105789136274", "label1180105789136292", "label120858598330950", "label1927359800122962", "label192735980042708", "label192735980042711", "label192735980042712", "label192735980042723", "label192735980042801", "label192735980042819", "label192735980042837", "label192735980042855", "label192735980042873", "label192735980042891", "label192735980043209", "label192735980088349", "label685080434502606", "label685080434507154", "label685080434507334", "lbFavourites", "lbShare", "sboxGlobalHome", "scrollbox1927359800110223", "scrollbox192735980090706", "textarea2192735980042709", "vbox192735980042695", "vbox192735980042697", "vbox192735980067334"],
        "inTransitionConfig": {
            "transitionSpeed": 0
        },
        "maxAppMenuButtons": 4,
        "outTransitionConfig": {
            "transitionSpeed": 0
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmScrollBoxMenu.info = {
        "kuid": "frmScrollBoxMenuWinPhone8"
    };
};