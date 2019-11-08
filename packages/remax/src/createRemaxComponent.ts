import React, { forwardRef } from 'react';
import kebabCase from 'lodash.kebabcase';

export default function createRemaxComponent<P = any>(component: string) {
  const Component: React.FC<P> = (props, ref: any) => {
    const { children = [] } = props;
    return React.createElement(
      kebabCase(component).replace('remax-', ''),
      { ...props, ref },
      children
    );
  };
  return forwardRef<{}, React.PropsWithChildren<P>>(Component);
}

export function createCustomRemaxComponent<P = any>(component: string) {
  if (!component.toLowerCase().startsWith('remax')) {
    throw new Error(
      '自定义组件命名请使用 Remax 前缀。如：RemaxCustomComponent'
    );
  }

  return createRemaxComponent<P>(component);
}
