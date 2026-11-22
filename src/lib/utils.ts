import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Teach tailwind-merge that our text styles (text-body-sm, ...) are font sizes,
// so they never get merged away against text colors (text-primary-foreground, ...).
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display-xl", "heading-xl", "heading-lg", "heading-md", "heading-sm", "title-lg", "title-md",
            "body-lg", "body-md", "body-sm", "label-md", "label-sm", "caption", "code-sm",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
