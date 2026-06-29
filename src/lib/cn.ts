type ClassValue = string | number | boolean | null | undefined | ClassValue[];

export function cn(...inputs: ClassValue[]) {
  const classes: string[] = [];

  for (const input of inputs) {
    if (!input) {
      continue;
    }

    if (Array.isArray(input)) {
      const nested = cn(...input);

      if (nested) {
        classes.push(nested);
      }

      continue;
    }

    classes.push(String(input));
  }

  return classes.join(" ");
}
