const kafka = require("kafka-node");
const client = new kafka.KafkaClient({ kafkaHost: process.env.KAFKA_HOST });

const producer = new kafka.Producer(client);
producer.on("ready", () => console.log("Kafka Producer Ready"));
producer.on("error", (err) => console.error(err));

const sendMessage = (topic, message) => {
    const payloads = [{ topic, messages: JSON.stringify(message) }];
    producer.send(payloads, (err, data) => {
        if (err) console.error(err);
        else console.log("Message sent to Kafka:", data);
    });
};

module.exports = { sendMessage };
