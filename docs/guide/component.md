---
title: 组件
order: 23
---

Remax 用驼峰的方式来命令小程序组件，如：

```js
import { View, Text, Image, ... } from 'remax/wechat'
```

## Props

Remax 遵循 React 规范来命名小程序属性，如：

Remax

```jsx
<View className="view" style={{ display: 'flex' }} onClick={handleClick} />
```

对应微信小程序

```html
<view class="view" style="display: flex;" bindtap="handleClick"></view>
```

对应支付宝小程序

```html
<view class="view" style="display: flex;" onTap="handleClick"></view>
```

## 跟进小程序组件更新

如果小程序添加了新的组件，而你所用的 Remax 版本还没提供该组件的支持，Remax 允许你自己创建一个新的 Remax 组件。

假设微信小程序新增了一个 `<foo-bar>` 组件，你可以这么做以让 Remax 提前支持：

```jsx
import { createRemaxComponent } from 'remax/wechat';

const RemaxFooBar = createRemaxComponent('RemaxFooBar');

function Page() {
  return <RemaxFooBar foo="bar" />;
}
```

如果你使用的是 typescript，还可以定义 props 类型：

```jsx
import { createRemaxComponent } from 'remax/wechat';

const RemaxFooBar = createRemaxComponent<{ foo: string; }>('RemaxFooBar');

function Page() {
  return <RemaxFooBar foo="bar" />;
}
```

> 其中需要注意的是，在组件定义和使用中必须加上 Remax 前缀，并且命名规则要以实际组件名的驼峰形式命名。
> 如 RemaxFooBar 对应于 foo-bar
