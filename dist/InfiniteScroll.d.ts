import { default as React } from 'react';

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
declare const InfiniteScroll: ({ fetchMore, hasMore, dataLength, loader, endMessage, threshold, position, className, style, children, }: InfiniteScrollProps) => JSX.Element;
export default InfiniteScroll;
