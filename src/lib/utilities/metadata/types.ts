export type Metadata = {
  // Fill the metadata type
  title: string;
  description: string;
  locale?: string;
  og: {
    title?: string;
    description?: string;
    url: string;
    siteName: string;
    image: string;
    type: string;
  };
  /** If undefined, will use og data */
  twitter?: {
    title: string;
    description: string;
    card: string;
    image: string;
  };
  canonical: string;
  alternates?: {
    /** Language code to URL */
    [lang: string]: string;
  };
};
