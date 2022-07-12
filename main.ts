koi.koi_onrecttrack(function (x, y, w, h) {
    koi.koi_track_rect(6000)
})
MakerCloud.configRxTxPwbrick(MakerCloud.SerialPorts.PORT1)
MakerCloud.setupWifi("", "")
MakerCloud.connectMakerCloudMQTT()
koi.koi_init_pw(koi.SerialPorts.PORT1)
koi.koi_cloud_tts("Welcome to use HUC!")
basic.forever(function () {
	
})
