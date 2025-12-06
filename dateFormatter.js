function formatDate(dateString) {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  return `${date.getFullYear()}-${month.toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
}

formatDate('December 6, 2025'); //"2025-12-06"
formatDate('January 1, 2000');
formatDate('November 11, 1111');
formatDate('September 7, 512');
formatDate('May 4, 1950');
formatDate('February 29, 1992');
