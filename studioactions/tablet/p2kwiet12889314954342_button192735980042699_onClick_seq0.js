function p2kwiet12889314954342_button192735980042699_onClick_seq0(eventobject) {
    if ((glbScrollBegining == false)) {
        kony.print("Entered True");
        glbScrollBegining = true
        frmScrollBoxMenu.sboxGlobalHome.scrollToBeginning()
    } else {
        kony.print("Entered False");
        glbScrollBegining = false
        frmScrollBoxMenu.sboxGlobalHome.scrollToEnd()
    }
}