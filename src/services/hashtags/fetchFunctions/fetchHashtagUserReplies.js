export default async function getHashtagUserReplies({
  userAddress,
  hashtagContract,
  fromBlock
}) {
  const replyItemEvents = await hashtagContract.getPastEvents("ReplyItem", {
    filter: {
      replier: userAddress
    },
    fromBlock: fromBlock || 0,
    toBlock: "latest"
  });
  return replyItemEvents.map(event => ({
    itemId: event.returnValues.itemId,
    replyMetadataHash: event.returnValues.replyMetadataHash
  }));
}
