export type Notification = {
  title: string;
  description: string;
  destructive?: boolean;
};

export const notifications: Notification[] = [
  {
    title: "Notification 1",
    description: "This is the first notification.",
  },
  {
    title: "Notification 2",
    description: "This is the second notification.",
  },
  {
    title: "Notification 3",
    description: "This is the third notification.",
  },
  {
    title: "Notification 4",
    description: "This is the fourth notification.",
    destructive: true,
  },
];
