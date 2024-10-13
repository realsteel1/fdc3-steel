# fdc3-steel

This library provides an implementation of the [FDC3](https://fdc3.finos.org) (Financial Desktop Connectivity and Collaboration Consortium) standard, supporting both `window.postMessage` for parent-child iframe communication and web sockets for more advanced messaging between desktop apps.

## Features

- **FDC3 Desktop Agent Implementation**: A complete implementation of the FDC3 Desktop Agent, allowing your app to send and receive FDC3 context data, intents, and more.
- **PostMessage Communication**: Seamless integration using `window.postMessage` to enable communication between parent and child iframes, ideal for web applications that run within the same browser environment.
- **WebSocket Communication**: Robust support for WebSocket communication, enabling real-time messaging between web-based apps and external services or desktop environments.
- **Modular and Extensible**: Designed to be flexible and easily extensible to support additional messaging protocols or communication mechanisms.

## Installation

Install the package via npm:

```bash
npm install fdc3-steel
```
