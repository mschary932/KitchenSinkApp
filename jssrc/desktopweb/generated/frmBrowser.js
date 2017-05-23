function addWidgetsfrmBrowser() {
    var brwDemo = new kony.ui.Browser({
        "detectTelNumber": true,
        "enableZoom": false,
        "id": "brwDemo",
        "isVisible": true,
        "screenLevelWidget": false,
        "text": "Browser"
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "margin": [2, 4, 2, 2],
        "marginInPixel": false
    }, {});
    frmBrowser.add(brwDemo);
};

function frmBrowserGlobals() {
    frmBrowser = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmBrowser,
        "enabledForIdleTimeout": false,
        "headers": [hbox192735980024418],
        "id": "frmBrowser",
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "needAppMenu": true,
        "skin": "frm",
        "title": "Browser"
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
    frmBrowser.info = {
        "kuid": "p2kwiet12889314955092"
    };
};