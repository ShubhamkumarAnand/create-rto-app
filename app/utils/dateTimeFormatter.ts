export function formatPrismaDatetime(prismaDatetime: string): string {
  // Parse the Prisma datetime into a JavaScript Date object.
  const dateObject = new Date(prismaDatetime);

  // Get the day of the week, month, day, year, hour, minute, and AM/PM indicator.
  const dayOfWeek = dateObject.toLocaleDateString("en-US", { weekday: "short" });
  const month = dateObject.toLocaleDateString("en-US", { month: "short" });
  const day = dateObject.getDate();
  const year = dateObject.getFullYear();

  // Format the date and time in a more readable format.
  // return `${dayOfWeek}, ${month} ${day}, ${year} at ${hour}:${minute} ${ampm}`;

  // Format the date with day in a more readable format.
  return `${dayOfWeek}, ${day} ${month}, ${year}`;
}
