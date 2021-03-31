## What's this?
A plugin which fixes type for below modules:
- "blockly/javascript"

This plugin is **only for typescript project**, and has no effect on how it works after compiled.

## Usage
1. Clone this repository to your project.
    - **Don't install through npm!** This plugin needs to be put **outside** node_modules to work properly.
    - This is because ambient declarations outside node_modules has the highest priority in type definition solving algorism.
        - I couldn't find formal document, but shown in [this verification](https://numb86-tech.hatenablog.com/entry/2020/07/15/153431) (this is written in Japanese)
2. Import from "blockly/*". For example:
```typescript
import * as JavaScript from "blockly/javascript";
```
3. Replace all 'Blockly.JavaScript' to 'JavaScript'.

## Usable properties
- All properties defined in Blockly.Generator
- ORDER_* constants with numeric literal type
- `[key:string]:(block:Blockly.Block)=>(string|[string,number])` function
    - You can assign code generator function like `JavaScript['SampleBlock']=sampleBlockCode;`.
    - Using technique shown [here](https://basarat.gitbook.io/typescript/type-system/index-signatures#excluding-certain-properties-from-the-index-signature)