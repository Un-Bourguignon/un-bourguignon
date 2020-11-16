import { useState } from "react";
import useResizeObserver from "@react-hook/resize-observer";

/*
 * A React hook for measuring the size of HTML elements including when they change
 * Sources
 * - https://web.dev/resize-observer
 * - https://tobbelindstrom.com/blog/resize-observer-hook/
 * Credit
 * https://github.com/jaredLunde/react-hook/tree/master/packages/resize-observer
 *
 * @param target - HTML element
 * @param {Object} initialSize - Configures the initial width and initial height of the hook's state
 * @param {number} initialSize.width
 * @param {number} initialSize.height
 * */
function useSize(target, initialSize) {
  const [size, setSize] = useState(() =>
    target
      ? { width: target.offsetWidth, height: target.offsetHeight }
      : { width: initialSize?.width ?? 0, height: initialSize?.height ?? 0 }
  );

  useResizeObserver(target, (entry) =>
    setSize({
      width: entry.target.offsetWidth,
      height: entry.target.offsetHeight,
    })
  );

  return size;
}

export default useSize;
