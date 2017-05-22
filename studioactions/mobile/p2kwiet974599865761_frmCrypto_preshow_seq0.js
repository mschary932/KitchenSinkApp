function p2kwiet974599865761_frmCrypto_preshow_seq0(eventobject, neworientation) {
    frmCrypto.textEncrypt.text = "";
    frmCrypto.lblEncrypt.text = "";
    frmCrypto.lblDecrypt.text = "";
    if (kony.os.deviceInfo().name != "android") {
        frmCrypto.txtMd2Hash.text = "";
        frmCrypto.lblMD2Hash.text = "";
        frmCrypto.txtMD4Hash.text = "";
        frmCrypto.lblMD4Hash.text = "";
    }
    if (kony.os.deviceInfo().name != "WindowsPhone") {
        frmCrypto.txtMD5Hash.text = "";
        frmCrypto.lblMD5Hash.text = "";
    }
}