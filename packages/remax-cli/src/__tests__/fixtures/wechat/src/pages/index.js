import * as React from 'react';
import { View, Text, createRemaxComponent } from 'remax/wechat';

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
        {...props}
      >
        foo
      </View>
      {TextElement}
    </View>
  );
};
