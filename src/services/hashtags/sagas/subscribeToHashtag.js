import { eventChannel } from "redux-saga";
import handleHashtagEvents from "./handleHashtagEvents";
import { take, takeEvery } from "redux-saga/effects";

export default function* hashtagSubscription({ hashtagContract }) {
  try {
    // Create the event channel, pipe the web3 subscription to redux-saga's emitter
    const hashtagSubscriptionChannel = eventChannel(emitter => {
      const subscription = hashtagContract.events
        .allEvents()
        .on("data", emitter);
      return () =>
        subscription.unsubscribe((err, success) => {
          if (err) console.log(`Error unsubscribing from hashtag: ${err}`);
          else if (success) console.log("Successfully unsubscribed!");
        });
    });

    yield takeEvery(hashtagSubscriptionChannel, handleHashtagEvents);
    yield take("CANCEL_WATCH");
    hashtagSubscriptionChannel.close();
  } finally {
    console.log(`hashtagSubscription terminated`);
  }
}
