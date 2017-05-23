function addWidgetsfrmDatagrid() {
    var hbxDatagrids = new kony.ui.Box({
        "id": "hbxDatagrids",
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
    var hbox68508043412156 = new kony.ui.Box({
        "id": "hbox68508043412156",
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
    var label68508043412164 = new kony.ui.Label({
        "id": "label68508043412164",
        "isVisible": true,
        "skin": "lblNormalTab",
        "text": "Default datagrid :"
    }, {
        "containerWeight": 30,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var datagrid68508043412254 = new kony.ui.DataGrid({
        "columnHeadersConfig": [{
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "FIRST",
            "columnID": "a",
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "SECOND",
            "columnID": "b",
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "THIRD",
            "columnID": "c",
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, ],
        "data": [{
            "a": "A",
            "b": "E",
            "c": "HELLO"
        }, {
            "a": "B",
            "b": "D",
            "c": "WORLD"
        }, {
            "a": "C",
            "b": "C",
            "c": "HELLO"
        }, {
            "a": "D",
            "b": "B",
            "c": "WORLD"
        }, {
            "a": "E",
            "b": "A",
            "c": "HELLO"
        }],
        "gridlineColor": "5c115c",
        "headerSkin": "dgHead",
        "id": "datagrid68508043412254",
        "isMultiSelect": false,
        "isVisible": true,
        "rowAlternateSkin": "dgRow",
        "rowCount": 4,
        "rowFocusSkin": "dgFocus",
        "rowNormalSkin": "dgRow",
        "showColumnHeaders": true
    }, {
        "containerWeight": 70,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "dockingHeader": false,
        "enableScrollBar": constants.DATAGRID_SCROLLBAR_NONE
    });
    hbox68508043412156.add(label68508043412164, datagrid68508043412254);
    var hbox68508043412701 = new kony.ui.Box({
        "id": "hbox68508043412701",
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
    var label118085056438537 = new kony.ui.Label({
        "id": "label118085056438537",
        "isVisible": true,
        "skin": "lblNormalTab",
        "text": "Datagrid with images :"
    }, {
        "containerWeight": 30,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var datagrid118085056438159 = new kony.ui.DataGrid({
        "columnHeadersConfig": [{
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "Audi",
            "columnID": "Audi",
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "Ford",
            "columnID": "Ford",
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "Skoda",
            "columnID": "Skoda",
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, ],
        "data": [{
            "Audi": "audi.png",
            "Ford": "ford.png",
            "Skoda": "skoda.png"
        }, {
            "Audi": "audi.png",
            "Ford": "ford.png",
            "Skoda": "skoda.png"
        }, {
            "Audi": "audi.png",
            "Ford": "ford.png",
            "Skoda": "skoda.png"
        }, {
            "Audi": "audi.png",
            "Ford": "ford.png",
            "Skoda": "skoda.png"
        }],
        "gridlineColor": "5c115c",
        "headerSkin": "dgHead",
        "id": "datagrid118085056438159",
        "isMultiSelect": false,
        "isVisible": true,
        "rowAlternateSkin": "dgRow",
        "rowCount": 4,
        "rowFocusSkin": "dgFocus",
        "rowNormalSkin": "dgRow",
        "showColumnHeaders": true
    }, {
        "containerWeight": 70,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "dockingHeader": false,
        "enableScrollBar": constants.DATAGRID_SCROLLBAR_NONE
    });
    hbox68508043412701.add(label118085056438537, datagrid118085056438159);
    var hbox68508043413050 = new kony.ui.Box({
        "id": "hbox68508043413050",
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
    var label118085056439129 = new kony.ui.Label({
        "id": "label118085056439129",
        "isVisible": true,
        "skin": "lblNormalTab",
        "text": "Datagrid with Row skins :"
    }, {
        "containerWeight": 30,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var datagrid118085056439309 = new kony.ui.DataGrid({
        "columnHeadersConfig": [{
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "Audi",
            "columnID": "Audi",
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "Ford",
            "columnID": "Ford",
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "Skoda",
            "columnID": "Skoda",
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, ],
        "data": [{
            "Audi": "audi.png",
            "Ford": "ford.png",
            "Skoda": "skoda.png"
        }, {
            "Audi": "audi.png",
            "Ford": "ford.png",
            "Skoda": "skoda.png"
        }, {
            "Audi": "audi.png",
            "Ford": "ford.png",
            "Skoda": "skoda.png"
        }, {
            "Audi": "audi.png",
            "Ford": "ford.png",
            "Skoda": "skoda.png"
        }],
        "gridlineColor": "5c115c",
        "headerSkin": "dgHead",
        "id": "datagrid118085056439309",
        "isMultiSelect": false,
        "isVisible": true,
        "rowAlternateSkin": "dGridRowNormal",
        "rowCount": 4,
        "rowFocusSkin": "dgFocus",
        "rowNormalSkin": "dGridRowNormal",
        "showColumnHeaders": true
    }, {
        "containerWeight": 70,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "dockingHeader": false,
        "enableScrollBar": constants.DATAGRID_SCROLLBAR_NONE
    });
    hbox68508043413050.add(label118085056439129, datagrid118085056439309);
    var hbox68508043413369 = new kony.ui.Box({
        "id": "hbox68508043413369",
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
    var label118085056439396 = new kony.ui.Label({
        "id": "label118085056439396",
        "isVisible": true,
        "skin": "lblNormalTab",
        "text": "Datagrid with Row alternate skins :"
    }, {
        "containerWeight": 30,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "hExpand": true,
        "margin": [0, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var datagrid118085056439441 = new kony.ui.DataGrid({
        "columnHeadersConfig": [{
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "Audi",
            "columnID": "Audi",
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "Ford",
            "columnID": "Ford",
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "Skoda",
            "columnID": "Skoda",
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, ],
        "data": [{
            "Audi": "audi.png",
            "Ford": "ford.png",
            "Skoda": "skoda.png"
        }, {
            "Audi": "audi.png",
            "Ford": "ford.png",
            "Skoda": "skoda.png"
        }, {
            "Audi": "audi.png",
            "Ford": "ford.png",
            "Skoda": "skoda.png"
        }, {
            "Audi": "audi.png",
            "Ford": "ford.png",
            "Skoda": "skoda.png"
        }],
        "gridlineColor": "5c115c",
        "headerSkin": "dgHead",
        "id": "datagrid118085056439441",
        "isMultiSelect": false,
        "isVisible": true,
        "rowAlternateSkin": "dGridRowNormal",
        "rowCount": 4,
        "rowFocusSkin": "dgFocus",
        "rowNormalSkin": "dgRow",
        "showColumnHeaders": true
    }, {
        "containerWeight": 70,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "dockingHeader": false,
        "enableScrollBar": constants.DATAGRID_SCROLLBAR_NONE
    });
    hbox68508043413369.add(label118085056439396, datagrid118085056439441);
    var hbox68508043413588 = new kony.ui.Box({
        "id": "hbox68508043413588",
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
    var label1181029310128738 = new kony.ui.Label({
        "id": "label1181029310128738",
        "isVisible": true,
        "skin": "lblNormalTab",
        "text": "Datagrid with Text and Image :"
    }, {
        "containerWeight": 30,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "hExpand": true,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var datagrid1181029310128779 = new kony.ui.DataGrid({
        "columnHeadersConfig": [{
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "Audi",
            "columnID": "Audi",
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "Ford",
            "columnID": "Ford",
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnHeaderText": "Skoda",
            "columnID": "Skoda",
            "columnType": constants.DATAGRID_COLUMN_TYPE_IMAGE,
            "columnWidthInPercentage": 33,
            "isColumnSortable": false
        }, ],
        "data": [{
            "Audi": "A",
            "Ford": "F",
            "Skoda": "skoda.png"
        }, {
            "Audi": "A",
            "Ford": "F",
            "Skoda": "skoda.png"
        }, {
            "Audi": "A",
            "Ford": "F",
            "Skoda": "skoda.png"
        }, {
            "Audi": "A",
            "Ford": "F",
            "Skoda": "skoda.png"
        }],
        "gridlineColor": "5c115c",
        "headerSkin": "dgHead",
        "id": "datagrid1181029310128779",
        "isMultiSelect": false,
        "isVisible": true,
        "rowAlternateSkin": "dgRow",
        "rowCount": 4,
        "rowFocusSkin": "dgFocus",
        "rowNormalSkin": "dgRow",
        "showColumnHeaders": true
    }, {
        "containerWeight": 70,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "margin": [2, 2, 2, 2],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "dockingHeader": false,
        "enableScrollBar": constants.DATAGRID_SCROLLBAR_NONE
    });
    hbox68508043413588.add(label1181029310128738, datagrid1181029310128779);
    vbox192926642422365.add(hbox68508043412156, hbox68508043412701, hbox68508043413050, hbox68508043413369, hbox68508043413588);
    hbxDatagrids.add(vbox192926642422365);
    frmDatagrid.add(hbxDatagrids);
};

function frmDatagridGlobals() {
    frmDatagrid = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDatagrid,
        "enabledForIdleTimeout": false,
        "id": "frmDatagrid",
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
    frmDatagrid.info = {
        "kuid": "p2kwiet12889314955204"
    };
};