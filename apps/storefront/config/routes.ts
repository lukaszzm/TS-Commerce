export const Route = {
  Home: "/",
  Products: "/products",
  Cart: "/cart",
} as const satisfies Record<string, string>;

export type Route = (typeof Route)[keyof typeof Route];

export const ApiRoute = {
  Categories: "/api/categories",
  Products: "/api/products",
} as const satisfies Record<string, string>;

export type ApiRoute = (typeof ApiRoute)[keyof typeof ApiRoute];
