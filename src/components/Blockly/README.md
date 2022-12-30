# Blockly自定义块

## 配置说明

### 先看内置字段有没有满足的块
- 源码直接复制type类型 https://github.com/google/blockly/tree/develop/blocks
- 源码的 `test`目录，会有一些 `xml` 也可以直接使用

### 或开发者工具生成块
- 文档 https://developers.google.com/blockly/guides/create-custom-blocks/blockly-developer-tools
- 工具 https://blockly-demo.appspot.com/static/demos/blockfactory/index.html

#### 使用开发者工具可能会遇到的一些问题
##### 如何注册代码块
上述工具会生成两种方式的代码 一种`json`，一种`js`
- 如果是js， 直接复制到项目中就可以；
- 如果是json，需要调用 `Blockly.defineBlocksWithJsonArray([{json1}, {json2}])`

##### 如何为自定义的代码块增加转变器
- 如果是js，需要在 `init` 中增加 `this.setMutator(Mutator)` [源码地址](https://github.com/google/blockly/blob/develop/core/block.ts#L2103)
- 如果是json，`defineBlocksWithJsonArray`的配置中要增加
```js
// defineBlocksWithJsonArray 配置
{
    //...
    'mutator': 'yourMutatorName', // 转变器标识，该标识需要手动注册
}

// 手动注册转变器
Blockly.Extensions.registerMutator(
    'yourMutatorName',
    {/** 主体函数 */},
    undefined, // 助手函数，不怎么重要
    ['转变器中的子块']
)
// 很好的例子 `CONTROLS_IF_MUTATOR_MIXIN` `new Mutator(['lists_create_with_item']`
```