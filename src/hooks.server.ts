// Temporary redirect
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  if (!event.url.pathname.startsWith('/docs/components')) {
    return new Response(null, { status: 302, headers: { location: '/docs/components' } });
  }

  return await resolve(event);
};
