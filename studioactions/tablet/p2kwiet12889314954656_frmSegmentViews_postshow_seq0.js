function p2kwiet12889314954656_frmSegmentViews_postshow_seq0(eventobject, neworientation) {
    if (kony.os.deviceInfo().name == "Windows" && channel == "tablet") {
        frmSegmentViews.segSegmentViewsCat.separatorThickness = 0;
    }
    segmentViewsSetting.call(this);
}