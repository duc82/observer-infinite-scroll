"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./infinite_scroll.module.scss";

interface InfiniteScrollProps {
  fetchMore: () => void;
  hasMore: boolean;
  loader?: JSX.Element;
  endMessage?: JSX.Element;
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const InfiniteScroll = ({
  fetchMore,
  hasMore,
  loader = <p>Loading...</p>,
  endMessage = <p>No more items to load.</p>,
  threshold = 0.8,
  className,
  style,
  children,
}: InfiniteScrollProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;

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
    <div style={style} className={className ? className : styles.wrapper}>
      {children}
      {hasMore ? <div ref={ref}>{loader}</div> : endMessage}
    </div>
  );
};

export default InfiniteScroll;
