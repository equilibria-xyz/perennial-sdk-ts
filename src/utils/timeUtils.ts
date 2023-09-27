import { formatDistanceToNowStrict, subDays } from "date-fns";

export const Second = BigInt(1);
export const Minute = Second * BigInt(60);
export const Hour = Minute * BigInt(60);
export const Day = Hour * BigInt(24);
export const Year = Day * BigInt(365);

export const nowSeconds = () => Math.floor(Date.now() / 1000);

export const last24hrBounds = () => {
  const now = new Date();
  const yesterday = new Date(new Date().setDate(now.getDate() - 1));

  const to = Math.floor(now.setUTCHours(now.getUTCHours(), 59, 59, 999) / 1000);
  const from = Math.floor(
    yesterday.setUTCHours(yesterday.getUTCHours(), 0, 0, 0) / 1000
  );

  return { to, from };
};

export const last7dBounds = () => {
  const end = new Date();
  const start = subDays(end, 7);

  const to = Math.floor(end.setUTCHours(end.getUTCHours(), 59, 59, 999) / 1000);
  const from = Math.floor(
    start.setUTCHours(start.getUTCHours(), 0, 0, 0) / 1000
  );

  return { to, from };
};

export const formatDateRelative = (date: Date) => {
  const formatted = formatDistanceToNowStrict(date, { addSuffix: true });

  const shortFormMap: { [key: string]: string } = {
    second: "s",
    seconds: "s",

    minute: "m",
    minutes: "m",

    hour: "h",
    hours: "h",

    day: "d",
    days: "d",

    month: "mo",
    months: "mo",

    year: "yr",
    years: "yr",
  };

  return formatted.replace(
    / (seconds|second|minutes|minute|hours|hour|days|day|months|month|years|year)/g,
    (match) => shortFormMap[match.trim()]
  );
};
