const baseUrl = 'http://192.168.80.77:5000'
let config = {
    mqttConfig: {
        serviceName: 'john1' + Date.now(),
        defaultProtocol: "mqtt",
        configOption: {
            protocol: 'wss',
            ssl: true,
            port: "443",
            url: "test.buildtrack.in",
            credentials: {
                username: 'btmqtt',
                password: 'btmqtt123'
            },
            defaultQos: 1,
            rejectUnauthorized: false,
            reconnectPeriod: 1000 * 1,
            keepalive: 60, //waiting time in sec before device fires disconnect event
            protocolId: 'MQTT',
            protocolVersion: 3,
            clean: false, //true or false. clean session does not store session
            connectTimeout: 30 * 1000,
            will: {
                topic: 'WillMsg',
                payload: 'Connection Closed abnormally..!', // message to be sent on abnormal disconnection
                qos: 0,
                retain: false
            }
        }
    }
}