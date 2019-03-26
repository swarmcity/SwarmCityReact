const itemStatusEnum = [
  "open",
  "funded",
  "done",
  "disputed",
  "resolved",
  "cancelled"
];
export default function parseItemStatus(statusId) {
  return itemStatusEnum[statusId];
}
