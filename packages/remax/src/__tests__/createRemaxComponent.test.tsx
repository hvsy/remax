import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { createCustomRemaxComponent } from '../createRemaxComponent';

describe('createCustomRemaxComponent', () => {
  it('create component with remax prefix', () => {
    expect(() => {
      createCustomRemaxComponent<{ foo: string }>('CustomComponent');
    }).toThrowError();

    const RemaxCustomComponent = createCustomRemaxComponent<{ foo: string }>(
      'RemaxCustomComponent'
    );
    const testRenderer = TestRenderer.create(
      <RemaxCustomComponent foo="bar" />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
