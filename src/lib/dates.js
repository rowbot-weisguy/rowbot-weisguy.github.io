export const getDateStringFromISO = (timestamp) => {
  const instance = new Date(timestamp);
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const date = instance.getDate();
  const month = monthNames[instance.getMonth()];
  const year = instance.getFullYear();

  return `${date} ${month} ${year}`;
};

export const getPostDate = (post) => {
  const date = post.originalPublishDate
    ? post.originalPublishDate
    : post.createdAt;

  return getDateStringFromISO(date);
};

export default {
  getDateStringFromISO,
  getPostDate,
};
