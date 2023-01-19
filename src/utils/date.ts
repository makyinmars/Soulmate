import dayjs from "dayjs";

// Convert a string "2023-01-21" to a Date object
export const convertStringToDate = (dateString: string): string => {
  const dateObject = dayjs(dateString).toDate();

  // Convert the dateObject to eg: "August 21, 2023"
  const date = dayjs(dateObject).format("MMMM D, YYYY");

  return date;
};
