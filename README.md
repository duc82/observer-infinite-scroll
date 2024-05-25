# Observer Infinite Scroll

This is a React component that enables infinite scrolling functionality in your web application. It allows you to load and display a large amount of data in a more efficient and user-friendly way.

## Installation

To use this component in your React project, you can install it via npm:

```bash
npm install observer-infinite-scroll
```

## Usage

To use the infinite scroll component in your application, you can import it and include it in your JSX code like this:

```tsx
import React, { useState } from "react";
import InfiniteScroll from "observer-infinite-scroll";

const App = () => {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchMore = () => {
    // Load more items here
  };

  return (
    <InfiniteScroll
      fetchMore={fetchMore}
      hasMore={hasMore}
      loader={<p>Loading...</p>}
      endMessage={<p>No more items to load.</p>}
    >
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </InfiniteScroll>
  );
};
```

In this example, `fetchMore` is a function to load more items, and `hasMore` is a boolean flag indicating whether there are more items to load. The `loader` prop is optional and can be used to display a loading indicator while more items are being loaded.

## Props

The `InfiniteScroll` component accepts the following props:

- `fetchMore`: A function to load more items.
- `hasMore`: A boolean flag indicating whether there are more items to load.
- `children`: The items to display in the scroll container.
- `loader`: An optional loading indicator to display while more items are being loaded.
  Defaults to `<p>Loading...</p>`.
- `endMessage`: An optional message to display when there are no more items to load.
  Defaults to `<p>No more items to load.</p>`.
- `options`: An optional object to configure the `IntersectionObserver` options. The default value is `{ root: null, rootMargin: "100px 0px 100px 0px", threshold: 0}`.
- `position`: An optional position value to set the scroll container's position. The default value is `bottom`.
- `className`: An optional class name to apply to the scroll container.
- `style`: An optional style object to apply to the scroll container.

## License

[MIT](MIT)
