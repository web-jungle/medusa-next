import { SubscriberArgs, SubscriberConfig } from "@medusajs/medusa";

export default async function eventLoggerHandler({
  event,
}: SubscriberArgs<any>) {
  const eventName = event.name;
  const data = event.data;

  console.log(`📊 ÉVÉNEMENT DÉTECTÉ : ${eventName}`);
  console.log(`📊 DONNÉES : ${JSON.stringify(data, null, 2)}`);
}

export const config: SubscriberConfig = {
  event: ["*"],
};
