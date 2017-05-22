function p2kwiet9745998654656_frmSegmentViews_postshow_seq0(eventobject, neworientation) {
    if (kony.os.deviceInfo().name == "Windows" && channel == "tablet") {
        frmSegmentViews.segSegmentViewsCat.separatorThickness = 0;
    }
    segmentViewsSetting.call(this);
}