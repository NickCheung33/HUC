MakerCloud.on_wifi_disconnected(function () {
    koi.koi_cloud_tts("wifi disconnected")
})
MakerCloud.on_wifi_connected(function () {
    koi.koi_cloud_tts("wifi connected")
})
koi.koi_onrecttrack(function (x, y, w, h) {
    koi.koi_track_rect(6000)
})
MakerCloud_KOI.registerTopicMessageHandler("topic", function (receivedMessage) {
	
})
koi.koi_init_pw(koi.SerialPorts.PORT2)
koi.koi_lcd_direction(koi.LcdDirection.Front)
koi.koi_join_ap("ssid", "password")
basic.pause(1000)
MakerCloud_KOI.connectMakerCloudMQTT()
basic.pause(1000)
MakerCloud_KOI.subscribeTopic("topic")
basic.pause(1000)
basic.forever(function () {
	
})
