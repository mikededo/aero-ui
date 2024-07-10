// See https://kit.svelte.dev/docs/types#app

import type { Theme } from '$lib/components/index.js';

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      colorScheme: Theme;
    }
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
