"use client";
import React, { useState, useRef, useEffect, forwardRef } from "react";

export interface InfiniteScrollProps {
  /** A `function` to load more items
   * @property {Function} fetchMore
   * @return {void}
   * @requires `true`
   */
  fetchMore: () => void;
  /** A `boolean` value to determine if there are more items to load
   * @property {boolean} hasMore
   * @requires `true`
   */
  hasMore: boolean;
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
 * @version 1.1.7
 */
const InfiniteScroll = forwardRef<HTMLDivElement, InfiniteScrollProps>(
  (
    {
      fetchMore,
      hasMore,
      loader = <p>Loading...</p>,
      endMessage = <p>No more items to load.</p>,
      threshold = 0.8,
      position = "bottom",
      className,
      style,
      children,
    },
    ref
  ): JSX.Element => {
    const [isLoading, setIsLoading] = useState(false);
    const fetchMoreRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const el = fetchMoreRef.current;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !isLoading && hasMore) {
            setIsLoading(true);
            fetchMore();
          }
        },
        { threshold }
      );

      if (el) {
        observer.observe(el);
      }

      return () => {
        if (el) {
          observer.unobserve(el);
        }
      };
    }, [hasMore, isLoading, fetchMore, threshold]);

    useEffect(() => {
      setIsLoading(false);
    }, [fetchMore]);

    return (
      <div ref={ref} style={style} className={className}>
        {position === "bottom" && children}
        {hasMore ? <div ref={fetchMoreRef}>{loader}</div> : endMessage}
        {position === "top" && children}
      </div>
    );
  }
);

export default InfiniteScroll;
