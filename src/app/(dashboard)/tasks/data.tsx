import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CheckCircle,
  Circle,
  XCircle,
  Question,
  Timer,
} from "@phosphor-icons/react/dist/ssr";

export const labels = [
  {
    value: "bug",
    label: "Bug",
    variant: "destructive",
  },
  {
    value: "feature",
    label: "Feature",
    variant: "secondary",
  },
  {
    value: "documentation",
    label: "Documentation",
    variant: "accent",
  },
];

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: Question,
  },
  {
    value: "todo",
    label: "Todo",
    icon: Circle,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: Timer,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircle,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: XCircle,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDown,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRight,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUp,
  },
];
