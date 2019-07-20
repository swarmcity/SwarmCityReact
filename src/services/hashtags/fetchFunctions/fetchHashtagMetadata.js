export default async function fetchHashtagMetadata({ hash, ipfs }) {
  const metadata = await ipfs.catJSON(ipfs.bytes32ToHash(hash));
  return metadata;
}
