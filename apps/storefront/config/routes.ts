export const ApiRoute = {
  Status: "/status",
} as const satisfies Record<string, string>;

export type ApiRoute = (typeof ApiRoute)[keyof typeof ApiRoute];
