function addWidgetsfrmMap() {
    var mapNrm = new kony.ui.Map({
        "calloutWidth": 80,
        "id": "mapNrm",
        "isVisible": true,
        "locationData": [{
            "desc": "Phoenix infocity, Gachibowli",
            "lat": "17.447326",
            "lon": "78.371358",
            "name": "KonyLabs(New)"
        }, {
            "desc": "Mindspace, Hitech City",
            "lat": "17.441839",
            "lon": "78.380928",
            "name": "KonyLabs(Old)"
        }, {
            "desc": "Jaihind Enclave, Madhapur",
            "lat": "17.450378",
            "lon": "78.388398",
            "name": "My Residence"
        }],
        "mapKey": "0YW7LQ_ON4_GfRt4bYcgXO-kkSrxlOyipmMN7CA",
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "screenLevelWidget": true
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "marginInPixel": false
    }, {
        "mode": constants.MAP_VIEW_MODE_NORMAL,
        "showZoomControl": true,
        "zoomLevel": 15
    });
    frmMap.add(mapNrm);
};

function frmMapGlobals() {
    frmMap = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmMap,
        "enabledForIdleTimeout": false,
        "id": "frmMap",
        "needAppMenu": true,
        "preShow": p2kwiet12889314951826_frmMap_preshow_seq0,
        "skin": "frm",
        "title": "Map"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
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
        "titleBarSkin": "titleBarAndroid",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};