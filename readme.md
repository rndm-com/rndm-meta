# [RNDM](https://www.rndm.com) Meta

## Introduction

RNDM Meta is a simple Higher Order Component (HOC) used to derive and update meta tags on demand. It has beenc reated so that it can easily be used as a cross platform solution for all the supported platforms in the [React XP](https://www.rndm.com/docs/react-cross-platform) template, but can also be integrated with any other standard React project.

## Installation

Make sure you have [Node.js](http://nodejs.org/) installed.

Then, to get started simply run the following command from your preferred terminal interface:

```sh
npm install --save @rndm/meta
```

## Usage

The component is very easy to use and can wrap any other component. When wrapped, and mounted it will update the meta tags for Web React pages.

### Example

```javascript
import React from 'react';
import { View, Text } from 'react-native';
import WithMeta from '@rndm/meta';

const Page = () => (
  <WithMeta meta={{
    title: 'RNDM',
    author: 'RNDM, info@rndm.com',
    url: 'https://www.rndm.com',
    copyright: 'RNDM',
    description: 'Pioneers in open-source, cross-platform, low-code solutions',
  }}>
    <View style={{ height: '100%', backgroundColor: 'red' }}>
      <Text>Hello Meta!</Text>
    </View>
  </WithMeta>
);

export default Page;

```
