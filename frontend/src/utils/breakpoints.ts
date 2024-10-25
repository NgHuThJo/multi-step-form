type Breakpoint = "s" | "m" | "l";

export function getBreakpoints() {
  const breakpoints: Record<Breakpoint, number> = {
    s: 480,
    m: 768,
    l: 1280,
  };

  return breakpoints;
}
