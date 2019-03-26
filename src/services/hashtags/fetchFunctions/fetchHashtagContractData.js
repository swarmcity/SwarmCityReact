import toLowercase from "./toLowercase";

export default async function fetchHashtagContractData(hashtagContract) {
  const methods = [
    "payoutAddress",
    "hashtagName",
    "hashtagMetadataHash",
    "hashtagFee",
    "deployBlock",
    "getItemCount"
  ];
  const res = {};
  await Promise.all(
    methods.map(async method => {
      res[method] = await hashtagContract.methods[method]().call();
    })
  );

  return {
    maintainerAddress: toLowercase(res.payoutAddress),
    name: res.hashtagName,
    metadataHash: res.hashtagMetadataHash,
    fee: res.hashtagFee,
    deployBlock: res.deployBlock,
    itemCount: res.getItemCount,
    // Extra, to ease fetching latter
    address: hashtagContract._address
  };
}
