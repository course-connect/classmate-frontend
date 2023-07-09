---
id: 09mi7h7e
title: ClassmateButton.tsx
file_version: 1.1.3
app_version: 1.12.0
---

## Overview

`ClassmateButtonProps`<swm-token data-swm-token=":components/ClassmateButton.tsx:27:7:7:`const ClassmateButton: FC&lt;ClassmateButtonProps&gt; = ({`"/> is a [Material-UI Button](https://mui.com/material-ui/react-button/) wrapper that overwrites the default Material UI styles with the custom classmate colors, fonts, and styles.

## **ClassmateButtonProps**

<br/>

The props accepted by the `ClassmateButton`<swm-token data-swm-token=":components/ClassmateButton.tsx:27:2:2:`const ClassmateButton: FC&lt;ClassmateButtonProps&gt; = ({`"/> component and their corresponding types

<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->

### 📄 components/ClassmateButton.tsx

```tsx
5      type ClassmateButtonProps = {
6        variant?: 'contained' | 'outlined' | "text";
7        children: ReactNode;
8        styles?: string;
9        size: 'small' | 'large' | 'small-full' | 'large-full';
10       callback: () => void;
11       type: 'button' | 'submit' | 'reset';
12     };
```

<br/>

## sizeStylesMap

<br/>

The `sizeStylesMap`<swm-token data-swm-token=":components/ClassmateButton.tsx:14:2:2:`const sizeStylesMap = {`"/> object is a mapping that associates different size options with corresponding CSS styles. It defines the styles to be applied to the `ClassmateButton`<swm-token data-swm-token=":components/ClassmateButton.tsx:27:2:2:`const ClassmateButton: FC&lt;ClassmateButtonProps&gt; = ({`"/>component based on its `size`<swm-token data-swm-token=":components/ClassmateButton.tsx:31:1:1:`  size,`"/> prop value.

<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->

### 📄 components/ClassmateButton.tsx

```tsx
14     const sizeStylesMap = {
15       small: 'w-28 h-9 text-sm',
16       large: 'w-40 h-11 text-base',
17       'small-full': 'w-full h-9 text-sm',
18       'large-full': 'w-full h-11 text-base',
19     };
```

<br/>

## variantStylesMap

<br/>

The `variantStylesMap`<swm-token data-swm-token=":components/ClassmateButton.tsx:21:2:2:`const variantStylesMap = {`"/>object is another mapping that associates different variant options with corresponding CSS styles. It defines the styles to be applied to the `ClassmateButtonProps`<swm-token data-swm-token=":components/ClassmateButton.tsx:27:7:7:`const ClassmateButton: FC&lt;ClassmateButtonProps&gt; = ({`"/> component based on its `variant`<swm-token data-swm-token=":components/ClassmateButton.tsx:28:1:1:`  variant = &quot;text&quot;,`"/> prop value.

<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->

### 📄 components/ClassmateButton.tsx

```tsx
21     const variantStylesMap = {
22       contained: 'font-classmate-bold whitespace-nowrap rounded-md antialiased shadow-none',
23       outlined: 'font-classmate-bold whitespace-nowrap rounded-md antialiased hover:bg-transparent',
24       text: 'hover:bg-transparent p-0 min-w-fit',
25     };
```

<br/>

## sizeStyles

<br/>

The `sizeStylesMap`<swm-token data-swm-token=":components/ClassmateButton.tsx:14:2:2:`const sizeStylesMap = {`"/> variable retrieves the corresponding size styles from the `sizeStylesMap`<swm-token data-swm-token=":components/ClassmateButton.tsx:14:2:2:`const sizeStylesMap = {`"/> object based on the provided `size`<swm-token data-swm-token=":components/ClassmateButton.tsx:31:1:1:`  size,`"/> value, defaulting to an empty string if no match is found.

<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->

### 📄 components/ClassmateButton.tsx

```tsx
35       const sizeStyles = sizeStylesMap[size] || '';
```

<br/>

## variantStyles

<br/>

The `variantStyles`<swm-token data-swm-token=":components/ClassmateButton.tsx:36:3:3:`  const variantStyles = variantStylesMap[variant] || &#39;&#39;;`"/> variable retrieves the corresponding variant styles from the `variantStylesMap`<swm-token data-swm-token=":components/ClassmateButton.tsx:21:2:2:`const variantStylesMap = {`"/> object based on the provided `variant`<swm-token data-swm-token=":components/ClassmateButton.tsx:28:1:1:`  variant = &quot;text&quot;,`"/> value, defaulting to an empty string if no match is found.

<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->

### 📄 components/ClassmateButton.tsx

```tsx
36       const variantStyles = variantStylesMap[variant] || '';
```

<br/>

## Button

<br/>

This [Material-UI Button](https://mui.com/material-ui/react-button/) component renders a button element with the specified type, onClick callback, combined class names for variant, size, and custom styles, and displays the provided children as its content.

<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->

### 📄 components/ClassmateButton.tsx

```tsx
39         <Button
40           type={type}
41           onClick={callback}
42           className={`${variantStyles} ${sizeStyles} ${styles} capitalize`}
43           variant={variant}
44         >
45           {children}
46         </Button>
```

<br/>

This file was generated by Swimm. [Click here to view it in the app](https://app.swimm.io/repos/Z2l0aHViJTNBJTNBY2xhc3NtYXRlLWZyb250ZW5kJTNBJTNBY291cnNlLWNvbm5lY3Q=/docs/09mi7h7e).
