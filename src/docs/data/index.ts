export type Base = string | null;
export type Properties = {
  type: string;
  required: boolean;
  default?: string;
  description?: string;
  descriptionAsHTML?: boolean;
  children?: Record<string, Exclude<Properties, 'children'>>;
};
export type SpecificTypes = Record<string, string>;
export type ComponentData = {
  base: Base;
  properties: Record<string, Properties>;
  types?: Record<string, string>;
};
export type ActionData = {
  properties?: Record<string, Properties>;
  returns?: Record<string, Properties>;
  types?: Record<string, string>;
};
