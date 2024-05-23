"use client";
import React, { useState, useRef, useEffect } from "react";

export interface InfiniteScrollProps {
  /** A `function` to load more items
   * @property {Function} fetchMore
   * @return {void | Promise<void>}
   * @requires `true`
   */
  fetchMore: () => void | Promise<void>;
  /** A `boolean` value to determine if there are more items to load
   * @property {boolean} hasMore
   * @requires `true`
   */
  hasMore: boolean;
  /**
   * The length of the data to be fetched.
   * @property {number} dataLength
   * @requires `true`
   */
  dataLength: number;
  /**
   * An optional loading indicator to display while more items are being loaded.
   * @property {JSX.Element} [loader]
   * @optional
   * @default <p>Loading...</p>
   */
  loader?: JSX.Element | null;
  /**
   * An optional message to display when there are no more items to load.
   * @property {JSX.Element} [endMessage]
   * @optional
   * @default <p>No more items to load.</p>
   */
  endMessage?: JSX.Element | null;
  /**
   * An optional threshold value to trigger the `fetchMore` function before reaching the bottom of the scroll container.
   * @property {number} [threshold]
   * @optional
   * @default 0.8
   */
  threshold?: number;
  /**
   * An optional position value to set the scroll container's position.
   * @property {"top" | "bottom"} [position]
   * @optional
   * @default "bottom"
   */
  position?: "top" | "bottom";
  /**
   * An optional class name to apply to the scroll container.
   * @property {string} [className]
   * @optional
   */
  className?: string;
  /**
   * An optional style object to apply to the scroll container.
   * @property {React.CSSProperties} [style]
   * @optional
   */
  style?: React.CSSProperties;
  /**
   * The items to display in the scroll container.
   * @property {React.ReactNode} children
   * @requires `true`
   */
  children: React.ReactNode;
}

/**
 * A component that renders a scroll container with infinite scroll capabilities.
 * @property {InfiniteScrollProps} props
 * @returns {JSX.Element}
 * @version 1.1.8
 */
const InfiniteScroll = ({
  fetchMore,
  hasMore,
  dataLength,
  loader = <p>Loading...</p>,
  endMessage = <p>No more items to load.</p>,
  threshold = 0.8,
  position = "bottom",
  className,
  style,
  children,
}: InfiniteScrollProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const fetchMoreRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [prevContainerScrollHeight, setPrevContainerScrollHeight] = useState(0);

  useEffect(() => {
    let el = fetchMoreRef.current;
    if (!el || isLoading || !hasMore) return;

    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoading(true);

          const promise = fetchMore();
          if (promise instanceof Promise) {
            await promise;
          }

          setIsLoading(false);
          setPrevContainerScrollHeight(containerRef.current?.scrollHeight || 0);
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [hasMore, isLoading, fetchMore, threshold, position]);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || position !== "top") return;

    const prevScrollHeight = prevContainerScrollHeight;
    const newScrollHeight = container.scrollHeight;
    const newScrollTop = newScrollHeight - prevScrollHeight;

    container.scrollTop = newScrollTop;
  }, [position, dataLength]);

  return (
    <div ref={containerRef} style={style} className={className}>
      {position === "bottom" && children}
      <div ref={fetchMoreRef}>
        {hasMore && isLoading && loader}
        {!hasMore && endMessage}
      </div>
      {position === "top" && children}
    </div>
  );
};

export default InfiniteScroll;
