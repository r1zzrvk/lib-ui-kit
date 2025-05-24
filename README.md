Publish to npm:
npm run build
npm publish --access public


Release:
Commit all changes -> npm run bump -> npm run push-tags

Bump version:
bump:major
bump:minor
bump:patch

Push tags:
git push --follow-tags

Chromatic docs:
https://www.chromatic.com/docs/

Storybook:
https://682846b61794ea4c939957e9-jqhrivahke.chromatic.com/?path=/docs/atoms-buttons-button--docs


NPM:

https://www.npmjs.com/package/lib-ui-kit

Generate changelog:
npm run changelog

Structure of each component from `/components`

```js
src/components ↓ 
    /[ComponentName] ↓
      /ui ↓ // Holds all UI files related to the parent component 
        [ComponentName].tsx // Component for export
        [ComponentName].stories.tsx
        ui.tsx // Imported component from Mantine
        index.ts
      /lib ↓ // Contains utility files
        constants.ts
        context.ts
        types.ts
        utils.ts
        index.ts
      /styles ↓
        [ComponentName].scss
        index.scss // For export classes
      /tests ↓
        [ComponentName].test.tsx
      /components ↓ // Each child should be wrapped in a separate folder 
        /[ChildName] ↓
          [ChildName].tsx
          index.ts
      index.ts // Only for export external modules
        
```

Add how to add icons: 

https://phosphoricons.com




https://mantine.dev/theming/colors/