import { useDebounceFn } from '@vueuse/core';
import { onUnmounted, onMounted } from 'vue';

interface WindowSizeOptions {
  once?: boolean;
  immediate?: boolean;
  listenerOptions?: AddEventListenerOptions | boolean;
}

export function useWindowSizeFn<T>(fn: Fn<T>, options?: WindowSizeOptions, wait = 150) {
  let handler = () => {
    fn();
  };
  const handleSize = useDebounceFn(handler, wait);
  handler = handleSize;

  const start = () => {
    if (options && options.immediate) {
      handler();
    }
    window.addEventListener('resize', handler);
  };

  const stop = () => {
    window.removeEventListener('resize', handler);
  };

  onMounted(() => {
    start();
  });

  onUnmounted(() => {
    stop();
  });
  return [start, stop];
}
