# panecard
Simple react component :ok_woman:

[![Build Status](https://travis-ci.org/marcosflorencio/react-panel.svg?branch=master)](https://travis-ci.org/marcosflorencio/react-panel)
[![Coverage Status](https://coveralls.io/repos/github/marcosflorencio/react-panel/badge.svg?branch=master)](https://coveralls.io/github/marcosflorencio/react-panel?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

![Simple example](https://github.com/marcosflorencio/panecard/blob/master/example.gif)


## Install

`yarn add panecard` or `npm install panecard`

## Usage

```js

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Panel, PanelTypes } from 'panecard'

const impsum = 'Lorem ipsum dolor sit amet'

class App extends Component {
  render() {
    return (
      <Panel panelTitle='Lorem Ipsum' panelType={PanelTypes.SUCCESS}>{impsum}</Panel>
    )
  }
}

export default App

```
