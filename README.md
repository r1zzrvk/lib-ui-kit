Structure of each component from `/components`

```js
src/components ↓ 
    /[ComponentName] ↓
      /ui ↓ // Holds all UI files related to the parent component 
        [ComponentName].tsx
        [ComponentName].stories.tsx
        index.ts
      /lib ↓ // Contains utility files
        constants.ts
        context.ts
        types.ts
        utils.ts
        index.ts
      /styles ↓
        [ComponentName].sass
      /tests ↓
        [ComponentName].test.tsx
      /components ↓ // Each child should be wrapped in a separate folder 
        /[ChildName] ↓
          [ChildName].tsx
          index.ts
      index.ts
        
```
