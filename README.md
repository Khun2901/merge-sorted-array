# merge-sorted-array

## Step to execute and run unit test for "merge" function

### 1. Setup dependencies

```bash
npm install
```

### 2. To execute the merge function
```bash
npm run dev
```
Note: This will call "app.ts" file which will then call the merge function.

### 3. Run unit test
```bash
npm test
```
Note: This will run the test in "merge.test.ts" file using jest.

-------------------------------------------------------
## Extra - Here's the way I set up the project !

### 1. Setup the TS project
```bash
npm install --save-dev typescript ts-node nodemon tsconfig-paths jest ts-jest @types/jest
npx tsc --init                                            
npx ts-jest config:init
```

### 2. Add scripts to "package.json" file
```typescript
  "scripts": {
    "dev": "nodemon src/app.ts",
    "test": "jest"
  },
```
