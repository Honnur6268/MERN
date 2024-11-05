export const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

export const isoDateRegex = new RegExp(
  /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)((-(\d{2}):(\d{2})|Z)?)$/,
);

export const isAlpha = new RegExp(/^[a-zA-Z\s]*$/);

export const isAlphanumeric = new RegExp(/^[a-zA-Z0-9]*$/);