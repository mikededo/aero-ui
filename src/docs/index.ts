export type Base = string | null;
export type Properties = {
  type: string;
  required: boolean;
  default?: string;
  description?: string;
};
export type SpecificTypes = Record<string, string>;
export type ComponentData = {
  base: Base;
  properties: Record<string, Properties>;
  types?: Record<string, string>;
};
