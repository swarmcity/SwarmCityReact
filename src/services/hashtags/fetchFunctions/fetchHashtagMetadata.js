export default async function fetchHashtagMetadata({ hash, ipfs }) {
  const metadata = await ipfs.cat(hash);
  return metadata;
}
