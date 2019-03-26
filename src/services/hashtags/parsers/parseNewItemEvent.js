import toLowercase from "./toLowercase";

export default function parseNewItemEvent(event, newItem) {
  return {
    blockNumber: event.blockNumber,
    hashtagFee: event.returnValues.hashtagFee,
    itemMetadataHash: event.returnValues.itemMetadataHash,
    itemHash: event.returnValues.itemHash,
    itemValue: event.returnValues.itemValue,
    seekerAddress: toLowercase(event.returnValues.owner), // owner => seeker
    seekerRep: event.returnValues.seekerRep,
    hashtagAddress: toLowercase(event.address), // MUST be here, needed for subsequent fetches
    // If the item is new the status is 0 and the timestamp is the current
    ...(newItem
      ? {
          status: 0,
          timestamp: Math.floor(Date.now() / 1000)
        }
      : {})
  };
}
