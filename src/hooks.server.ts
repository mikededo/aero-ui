// Temporary redirect
import type { Handle } from '@sveltejs/kit';

const Redirects: Record<string, string> = {
  '/docs': '/docs/introduction'
};

export const handle: Handle = async ({ event, resolve }) => {
  const redirect = Redirects[event.url.pathname];
  if (redirect) {
    return new Response(null, { status: 302, headers: { location: redirect } });
  }

  return await resolve(event);
};
