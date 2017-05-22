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
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "screenLevelWidget": true
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true
    }, {
        "mode": constants.MAP_VIEW_MODE_NORMAL,
        "showCurrentLocation": constants.MAP_VIEW_SHOW_CURRENT_LOCATION_AS_PIN,
        "zoomLevel": 14
    });
    frmMap.add(mapNrm);
};

function frmMapGlobals() {
    frmMap = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmMap,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmMap",
        "needAppMenu": true,
        "preShow": p2kwiet9745998651826_frmMap_preshow_seq0,
        "skin": "frm",
        "title": "Map"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "paddingInPixel": false
    }, {
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "extendBottom": false,
        "extendTop": false,
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
            "titleBarLeftSideView": "title",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "none"
        },
        "titleBarSkin": "sknTitleBarSampleApp"
    });
    frmMap.info = {
        "kuid": "p2kwiet9745998651826"
    };
};