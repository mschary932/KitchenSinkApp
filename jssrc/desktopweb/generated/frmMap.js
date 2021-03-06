function addWidgetsfrmMap() {
    var hbxMap = new kony.ui.Box({
        "id": "hbxMap",
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
        "padding": [2, 2, 2, 2],
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
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "screenLevelWidget": false
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false
    }, {});
    vbox192926642422365.add(mapNrm);
    hbxMap.add(vbox192926642422365);
    frmMap.add(hbxMap);
};

function frmMapGlobals() {
    frmMap = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmMap,
        "enabledForIdleTimeout": false,
        "id": "frmMap",
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
    frmMap.info = {
        "kuid": "p2kwiet12889314955526"
    };
};