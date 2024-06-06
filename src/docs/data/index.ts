export type Data = { type: string; required: boolean; default?: string; description?: string };
export type ComponentData = Record<string, Data | string | null> & {
  base: string | null;
};
