export const MQTT_IP = '172.80.5.222:8083/mqtt'//mqtt地址端口
const MQTT_USERNAME = 'gert'//mqtt用户名
const MQTT_PASSWORD = '123456'//密码

export const MQTT_OPTIONS = {
    connectTimeout: 5000,
    clientId: 'mqtitId-Home',
    username: MQTT_USERNAME,
    password: MQTT_PASSWORD,
    clean: false
}