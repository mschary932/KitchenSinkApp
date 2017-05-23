function addWidgetsfrmFlex() {
    frmFlex.setDefaultUnit(kony.flex.DP);
    var imgFlex = new kony.ui.Image2({
        "enableCache": false,
        "height": "101dp",
        "id": "imgFlex",
        "isVisible": true,
        "left": "-112dp",
        "src": "personbig.png",
        "top": "16dp",
        "width": "100dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblFlexFName = new kony.ui.Label({
        "enableCache": false,
        "height": "26dp",
        "id": "lblFlexFName",
        "isVisible": true,
        "left": "330dp",
        "right": "-178dp",
        "skin": "lblNormalSimilar",
        "text": "First Name : Mark",
        "top": "16dp",
        "width": "300dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblFlexLName = new kony.ui.Label({
        "enableCache": false,
        "height": "26dp",
        "id": "lblFlexLName",
        "isVisible": true,
        "left": "330dp",
        "right": "-178dp",
        "skin": "lblNormalSimilar",
        "text": "Last Name : Taylor",
        "top": "52dp",
        "width": "300dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblFlexCompany = new kony.ui.Label({
        "enableCache": false,
        "height": "26dp",
        "id": "lblFlexCompany",
        "isVisible": true,
        "left": "330dp",
        "right": "-179dp",
        "skin": "lblNormalSimilar",
        "text": "Company : Kony",
        "top": "88dp",
        "width": "300dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblFlexPhoneHome = new kony.ui.Label({
        "enableCache": false,
        "height": "26dp",
        "id": "lblFlexPhoneHome",
        "isVisible": true,
        "left": "12dp",
        "right": "19dp",
        "skin": "lblNormalSimilar",
        "text": "Home : +91987654321",
        "top": "-30dp",
        "width": "500dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblFlexPhoneWork = new kony.ui.Label({
        "enableCache": false,
        "height": "26dp",
        "id": "lblFlexPhoneWork",
        "isVisible": true,
        "left": "12dp",
        "right": "17dp",
        "skin": "lblNormalSimilar",
        "text": "Work : +914080987652",
        "top": "-40dp",
        "width": "500dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblFlexLine = new kony.ui.Label({
        "enableCache": false,
        "height": "1dp",
        "id": "lblFlexLine",
        "isVisible": true,
        "left": "-360dp",
        "right": "320dp",
        "skin": "lblWhiteBG",
        "top": "280dp",
        "width": "500dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblFlexEmail = new kony.ui.Label({
        "enableCache": false,
        "height": "26dp",
        "id": "lblFlexEmail",
        "isVisible": true,
        "left": "12dp",
        "skin": "lblNormalSimilar",
        "text": "Email : mark.taylor@kony.com",
        "top": "500dp",
        "width": "500dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblFlexHomePage = new kony.ui.Label({
        "enableCache": false,
        "height": "26dp",
        "id": "lblFlexHomePage",
        "isVisible": true,
        "left": "12dp",
        "right": "15dp",
        "skin": "lblNormalSimilar",
        "text": "Home Page: http://kony.com",
        "top": "500dp",
        "width": "500dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblFlexAdress = new kony.ui.Label({
        "enableCache": false,
        "height": "26dp",
        "id": "lblFlexAdress",
        "isVisible": true,
        "left": "12dp",
        "skin": "lblNormalSimilar",
        "text": "Address",
        "top": "500dp",
        "width": "500dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblFlexStreet = new kony.ui.Label({
        "enableCache": false,
        "height": "26dp",
        "id": "lblFlexStreet",
        "isVisible": true,
        "left": "12dp",
        "skin": "lblNormalSimilar",
        "text": "Behind Dell office",
        "top": "500dp",
        "width": "500dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblFlexArea = new kony.ui.Label({
        "enableCache": false,
        "height": "26dp",
        "id": "lblFlexArea",
        "isVisible": true,
        "left": "12dp",
        "skin": "lblNormalSimilar",
        "text": "Phoenix infocity",
        "top": "500dp",
        "width": "500dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblFlexCity = new kony.ui.Label({
        "enableCache": false,
        "height": "26dp",
        "id": "lblFlexCity",
        "isVisible": true,
        "left": "12dp",
        "skin": "lblNormalSimilar",
        "text": "Hyderabad - 500081",
        "top": "500dp",
        "width": "500dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblFlexWinTitle = new kony.ui.Label({
        "enableCache": false,
        "height": "60dp",
        "id": "lblFlexWinTitle",
        "isVisible": true,
        "left": "0dp",
        "maxHeight": "1000dp",
        "maxWidth": "1000dp",
        "skin": "lblFlexHeadWin",
        "text": "Flex Form",
        "top": "0dp",
        "width": "500dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmFlex.add(imgFlex, lblFlexFName, lblFlexLName, lblFlexCompany, lblFlexPhoneHome, lblFlexPhoneWork, lblFlexLine, lblFlexEmail, lblFlexHomePage, lblFlexAdress, lblFlexStreet, lblFlexArea, lblFlexCity, lblFlexWinTitle);
};

function frmFlexGlobals() {
    frmFlex = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmFlex,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "enableScrolling": true,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "horizontalScrollIndicator": true,
        "id": "frmFlex",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "pagingEnabled": false,
        "postShow": p2kwiet1288931495983_frmFlex_postshow_seq0,
        "preShow": p2kwiet1288931495983_frmFlex_preshow_seq0,
        "skin": "frm",
        "title": "Flex Form",
        "verticalScrollIndicator": true
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["imgFlex", "lblFlexAdress", "lblFlexArea", "lblFlexCity", "lblFlexCompany", "lblFlexEmail", "lblFlexFName", "lblFlexHomePage", "lblFlexLine", "lblFlexLName", "lblFlexPhoneHome", "lblFlexPhoneWork", "lblFlexStreet", "lblFlexWinTitle"],
        "inTransitionConfig": {
            "transitionSpeed": 0
        },
        "outTransitionConfig": {
            "transitionSpeed": 0
        },
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmFlex.info = {
        "kuid": "p2kwiet1288931495983"
    };
};