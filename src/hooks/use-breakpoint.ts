import { useMediaQuery } from "react-responsive";
import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);
const breakpoints = fullConfig.theme.screens;

export function useBreakpoint<K extends string>(breakpointKey: K) {
  const breakpointValue =
    breakpoints[breakpointKey as keyof typeof breakpoints];
  const bool = useMediaQuery({
    query: `(max-width: ${breakpointValue})`,
  });
  const capitalizedKey =
    breakpointKey[0]!.toUpperCase() + breakpointKey.substring(1);

  type KeyAbove = `isAbove${Capitalize<K>}`;
  type KeyBelow = `isBelow${Capitalize<K>}`;

  return {
    [breakpointKey]: Number(String(breakpointValue).replace(/[^0-9]/g, "")),
    [`isAbove${capitalizedKey}`]: !bool,
    [`isBelow${capitalizedKey}`]: bool,
  } as Record<K, number> & Record<KeyAbove | KeyBelow, boolean>;
}
