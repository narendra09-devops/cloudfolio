export const colors = {
  background: "#09090B",
  surface: "#18181B",
  primary: "#2563EB",
  secondary: "#0EA5E9",
  success: "#22C55E",
  text: "#FAFAFA",
  muted: "#A1A1AA",
  border: "#27272A",
} as const;

export type ColorToken = keyof typeof colors;
