const uuid = PubNub.generateUUID();
const pubnub = new PubNub({
  publishKey: "pub-c-8535dacc-6ce1-44f9-aefe-98a41983ec1b",
  subscribeKey: "sub-c-bdd94162-55aa-11eb-b457-5af98b55985e",
  uuid: uuid
});