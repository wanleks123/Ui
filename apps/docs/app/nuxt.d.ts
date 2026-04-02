declare module '#app' {
  interface PageMeta {
    // Define your custom keys here with their types
    title?: string;
    description?: string;
    links?: {
      title: string;
        href: string;
        external?: boolean;
    }[];
     // Add any other custom meta properties you need
     [key: string]: any; // Allows for arbitrary keys if needed
  }
}