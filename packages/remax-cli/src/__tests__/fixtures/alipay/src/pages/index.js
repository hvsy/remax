import * as React from 'react';
import { View, Text, createRemaxComponent } from 'remax/alipay';

export default () => {
  const props = {};
  const TextElement = React.cloneElement(<Text />);
  const RemaxFooBar = createRemaxComponent('RemaxFooBar');

  function handleClick() {}

  function handleTouchStart() {}

  return (
    <View>
      <RemaxFooBar foo="bar" />
      <View
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        id="view"
        data-foo="bar"
        catchTap={handleClick}
        {...props}
      >
        foo
      </View>
      {TextElement}
    </View>
  );
};
