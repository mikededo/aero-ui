// Temporary redirect
import type { Handle } from '@sveltejs/kit';

const Redirects: Record<string, string> = {
  '/': '/docs/introduction',
  '/docs': '/docs/introduction'
};

import { PUBLIC_THEME_MODE_COOKIE } from '$env/static/public';
import type { Theme } from '$lib/components/index.js';

export const handle: Handle = async ({ event, resolve }) => {
  const redirect = Redirects[event.url.pathname];
  if (redirect) {
    return new Response(null, { status: 302, headers: { location: redirect } });
  }

  event.locals.colorScheme = (event.cookies.get(PUBLIC_THEME_MODE_COOKIE) || 'system') as Theme;

  return resolve(event, {
    filterSerializedResponseHeaders: (name) => name === 'content-range',
    transformPageChunk: ({ html }) => html.replace('%color-scheme%', event.locals.colorScheme)
  });
};
