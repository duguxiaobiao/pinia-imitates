<TranslateComponent/>

[API 文档](./../) / pinia

# 模块：pinia

## 枚举

* [MutationType](./../enums/pinia.MutationType.html)

## 接口

* [DefineSetupStoreOptions](./../interfaces/pinia.DefineSetupStoreOptions.html)
* [DefineStoreOptions](./../interfaces/pinia.DefineStoreOptions.html)
* [DefineStoreOptionsBase](./../interfaces/pinia.DefineSetupStoreOptions.html)
* [DefineStoreOptionsInPlugin](./../interfaces/pinia.DefineSetupStoreOptions.html)
* [MapStoresCustomization](./../interfaces/pinia.DefineSetupStoreOptions.html)
* [Pinia](./../interfaces/pinia.DefineSetupStoreOptions.html)
* [PiniaCustomProperties](./../interfaces/pinia.DefineSetupStoreOptions.html)
* [PiniaCustomStateProperties](./../interfaces/pinia.DefineSetupStoreOptions.html)
* [PiniaPlugin](./../interfaces/pinia.DefineSetupStoreOptions.html)
* [PiniaPluginContext](./../interfaces/pinia.DefineSetupStoreOptions.html)
* [StoreDefinition](./../interfaces/pinia.DefineSetupStoreOptions.html)
* [StoreProperties](./../interfaces/pinia.DefineSetupStoreOptions.html)
* [SubscriptionCallbackMutationDirect](./../interfaces/pinia.DefineSetupStoreOptions.html)
* [SubscriptionCallbackMutationPatchFunction](./../interfaces/pinia.DefineSetupStoreOptions.html)
* [SubscriptionCallbackMutationPatchObject](./../interfaces/pinia.DefineSetupStoreOptions.html)
* [_StoreOnActionListenerContext](./../interfaces/pinia.DefineSetupStoreOptions.html)
* [_StoreWithState](./../interfaces/pinia.DefineSetupStoreOptions.html)
* [_SubscriptionCallbackMutationBase](./../interfaces/pinia.DefineSetupStoreOptions.html)

## 类型别名

### PiniaStorePlugin

Ƭ **PiniaStorePlugin**: [`PiniaPlugin`](./../interfaces/pinia.PiniaPlugin.html)

扩展每个 store 的插件。

`deprecated`

使用 PiniaPlugin 代替

### StateTree

Ƭ **StateTree**: `Record`<`string` | `number` | `symbol`, `any`>

Store 的通用 state

### Store

Ƭ **Store**<`Id`, `S`, `G`, `A`>: [`_StoreWithState`](./../interfaces/pinia._StoreWithState.html)<`Id`, `S`, `G`,
`A`\> & `UnwrapRef`<`S`\> & [`_StoreWithGetters`](./pinia.html#_storewithgetters)
<`G`\> & [`_ActionsTree`](./pinia.html#_actionstree) extends `A` ? {} : `A` & [
`PiniaCustomProperties`](./../interfaces/pinia.PiniaCustomProperties.html)<`Id`, `S`, `G`, `A`\>
& [`PiniaCustomStateProperties`](./../interfaces/pinia.PiniaCustomStateProperties.html)<`S`\>

创建 store 的 Store 类型。

### 类型参数

|  名称  | 类型                                             |
|:----:|:-----------------------------------------------|
| `Id` | 扩展自 `string` = `string`                        |
| `S`  | 扩展自 [`StateTree`](./pinia.html#statetree) = {} |
| `G`  | {}                                             |
| `G`  | {}                                             |


### StoreGeneric

Ƭ **StoreGeneric**: [`Store`](./pinia.html#store)<`string`, [`StateTree`](./pinia.html#statetree), _GettersTree<[`StateTree`](./pinia.html#statetree)\>, [`_ActionsTree`](./pinia.html#_actionstree)\>

泛型与 Store 的类型不安全版本。 在访问字符串时不会失败， 这使得编写不在意传递的 store 类型的通用函数更加容易。


### StoreGetters

Ƭ **StoreGetters**<`SS`>: `SS` extends [`Store`](./pinia.html#store)<`string`, [`StateTree`](./pinia.html#statetree), infer G, [`_ActionsTree`](./pinia.html#_actionstree)> ? 
[`_StoreWithGetters`](./pinia.html#_storewithgetters)<`G`> : [_ExtractGettersFromSetupStore](./pinia.html#_extractgettersfromsetupstore)<`SS`>

提取一个 store 类型的 getter。 对 Setup Store 或 Option Store都有效。

#### 类型参数

| 名称 | 
|:---:|
| `SS` |


## 以下内容太长，就不写了