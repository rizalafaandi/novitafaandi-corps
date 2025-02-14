import { parseISO, format } from "date-fns";

type Props = {
  dateString: string | undefined;
};

const DateFormatter = ({ dateString }: Props) => {
  if (dateString) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
  }
  return null;
};

export default DateFormatter;
