import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

const TimeZone = ({ timezone, input }) => {
  return dayjs
    .unix(input)
    .utc()
    .utcOffset(timezone / 3600)
    .format("h : mm A");
};

export default TimeZone;
