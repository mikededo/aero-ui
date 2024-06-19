import type { ActionReturn } from 'svelte/action';

type Root = IntersectionObserverInit['root'];
type Offset = { top?: number; bottom?: number };
type Params = { offset?: Offset; root?: Root };
type ReturnEvents = {
  onenter: () => void;
  onexit: () => void;
};

export const inView = (
  node: HTMLElement,
  params: Params | undefined = {}
): ActionReturn<Params | undefined, ReturnEvents> => {
  let observer: IntersectionObserver;

  const setObserver = ({ root, offset: { top, bottom } = {} }: Params = {}) => {
    const marginTop = top ? top * -1 : 0;
    const marginBottom = bottom ? bottom * -1 : 0;
    const rootMargin = `${marginTop}px 0px ${marginBottom}px 0px`;
    const options = { root, rootMargin };

    if (observer) {
      observer.disconnect();
    }

    observer = new IntersectionObserver((event) => {
      node.dispatchEvent(new CustomEvent(event[0].isIntersecting ? 'enter' : 'exit'));
    }, options);

    observer.observe(node);
  };

  setObserver(params);

  return {
    update(params) {
      setObserver(params);
    },
    destroy() {
      if (observer) {
        observer.disconnect();
      }
    }
  };
};
