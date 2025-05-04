import slugify from "slugify";

export const makeSlug = (str: string) => {
  return slugify(str, { lower: true });
};
