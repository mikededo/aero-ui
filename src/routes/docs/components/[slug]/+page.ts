import type { PageLoad } from './$types.js';

export const load: PageLoad = ({ params }) => ({ component: params.slug });
