import * as icons from "@adaptive-academy/ui-kit-2023"
import { useDarkMode } from "storybook-dark-mode"

export function getTextColorClass() {
  return useDarkMode() ? "text-grey-50" : "text-grey-900"
}
export function getIconColorClass() {
  return useDarkMode() ? "fill-grey-300" : "fill-grey-600"
}
export function getCaptionColorClass() {
  return useDarkMode() ? "text-grey-200 italic" : "text-grey-600 italic"
}

export const purposeText = {
  title: "Purpose",
  description: [
    "Icons are more than decoration. They draw attention and add clarity to areas and actions in our screen designs.",
    "Use them with purpose:",
    "They are a supplement, not a substitute, for onscreen language. Using an icon without a label to go with it should be rare.",
    "Your choice to use an icon, and your choice of icon, should have a specific user or brand goal.",
    "Consistent icon usage can create useful patterns that the user can learn.",
  ],
}

export const colorText = {
  title: "Color",
  description: [
    "Use icon colors with enough color contrast against their backgrounds. The contrast ratio of an icon to its background- must be at least 3:1.",
    "Exception: interactive elements that are disabled.",
    "Use these colors against background colors of Core-Primary-2 or darker.",
    "Use these colors against background colors of Core-Secondary-4 or lighter.",
  ],
}

export const sizingText = {
  title: "Sizing",
  description: [
    "Use icons in approved sizes with enough space around them.",
    "They are sized to take up the central 75% of a square, transparent frame whose pixel dimensions are one of our approved sizing increments of- S, M, L or XL.",
    "The use of S and XL icons will be rare.",
  ],
}

export const withTextText = {
  title: "With text",
  description: [
    "Almost always use icons with accompanying text. When this is impossible, ensure an aria-label that can identify the icon on hover, and which is detectable by screen reader users.",
    "Create a harmonious relationship between the icon and its label with...",
    "Center vertical alignment between text and icon",
    "Consistent pairing of label and icon across the experience",
    "A match-or near-match in height between the text and the icon",
    "Text and icon the same color. -(This will usually mean that you will seek even higher contrast ratios to accomodate the text. That ratio should be -4.5:1-)",
  ],
  doIconsLabelsSizing:
    "Icons and labels are equal or similar in height, consistently applied, with the same color, and center alignment.",
  dontIconsLabelsSizing: [
    "Type noticeably larger than icon.",
    "Type noticeably smaller than icon.",
    "Type has top alignment with icon. Use center alignment.",
    "Type is a different color than icon.",
    "Icon has a different label than it does elsewhere in the experience.",
  ],
  doAddIcon:
    "Use an icon to add special interest to identify a frequent or primary action, or a key piece of information.",
  dontAddIcon:
    "Label every item in a list or menu with unique icons. If every item is special, then no item is special.",
}

export const iconLibraryText = {
  title: "Icon library",
  description: "These are the vectors on which the icon component is based.",
}

// Data Structures
export const iconsAndNames = [
  {
    iconElement: icons.Refresh,
    iconName: "refresh",
  },
  { iconElement: icons.Edit, iconName: "edit" },
  {
    iconElement: icons.Trash,
    iconName: "trash",
  },
  {
    iconElement: icons.Notification,
    iconName: "notification",
  },
  {
    iconElement: icons.ThumbDown,
    iconName: "thumb-down",
  },
  {
    iconElement: icons.Stop,
    iconName: "stop",
  },
  {
    iconElement: icons.Check,
    iconName: "check",
  },
  {
    iconElement: icons.Ban,
    iconName: "ban",
  },
  {
    iconElement: icons.Timer,
    iconName: "timer",
  },
  {
    iconElement: icons.Close,
    iconName: "close",
  },
  {
    iconElement: icons.Calendar,
    iconName: "calendar",
  },
  {
    iconElement: icons.Groups,
    iconName: "groups",
  },
  {
    iconElement: icons.More,
    iconName: "more",
  },
  {
    iconElement: icons.Eye,
    iconName: "eye",
  },
  {
    iconElement: icons.Search,
    iconName: "search",
  },
  {
    iconElement: icons.Filter,
    iconName: "filter",
  },
  {
    iconElement: icons.Settings,
    iconName: "settings",
  },
  {
    iconElement: icons.Cog,
    iconName: "cog",
  },
  {
    iconElement: icons.Plus,
    iconName: "plus",
  },
  {
    iconElement: icons.Lock,
    iconName: "lock",
  },
  {
    iconElement: icons.Download,
    iconName: "download",
  },
  {
    iconElement: icons.Upload,
    iconName: "upload",
  },
  {
    iconElement: icons.AlarmBell,
    iconName: "alarm-bell",
  },
  {
    iconElement: icons.Info,
    iconName: "info",
  },
]
export const iconsGroupsAndNames = [
  {
    iconsName: "arrow",
    iconsElements: [
      icons.ArrowUp,
      icons.ArrowDown,
      icons.ArrowLeft,
      icons.ArrowRight,
    ],
  },
  {
    iconsName: "chevron",
    iconsElements: [
      icons.ChevronUp,
      icons.ChevronDown,
      icons.ChevronLeft,
      icons.ChevronRight,
    ],
  },
  {
    iconsName: "chart(line, candle, bar, more to come)",
    iconsElements: [icons.ChartLine, icons.ChartCandle, icons.ChartBar],
  },
]
