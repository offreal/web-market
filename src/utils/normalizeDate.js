export const normalizeDate = (dateString) =>
  dateString ? new Date(dateString).toLocaleDateString() : dateString
