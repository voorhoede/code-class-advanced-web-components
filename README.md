# Web Components: Beyond the Basics - Communication Patterns & State Management

## 📦 Contents
- Introduction
- Getting Started
- Workshop Structure
- Assignments
- Resources

## 📖 Introduction

This repository contains the code for the Advanced Web Components code class. In this workshop, we'll explore three key aspects of building robust web components: state management, component communication, and state synchronization. Rather than just covering the basics, we'll dive deeper into the challenges you'll face when building reusable, maintainable component systems.

We'll use a timer component as our case study, progressively enhancing it through three stages to demonstrate different approaches to component architecture.

## 🏁 Getting Started

To get started with this workshop, you'll need:
```
node >= 16.x
npm >= 8.x
```

This project uses Vite as a build tool and development server.

Clone this repository and install dependencies:
```bash
git clone [repository-url]
cd advanced-web-components
npm install
npm start
```

## 🏗️ Workshop Structure

The workshop is divided into three progressive exercises that explore different patterns for building and connecting web components:

1. **Exercise 1: Web Component Timer**
   - Creating a self-contained web component with internal state
   - Implementing DOM element connections and event handling
   - Building the foundation of our timer with proper state updates

2. **Exercise 2: Component Communication with Custom Events**
   - Splitting functionality into multiple specialized components
   - Implementing cross-component communication using custom events
   - Creating a parent-child component structure with event bubbling

3. **Exercise 3: State Management with Nanostores**
   - Implementing a centralized state management approach
   - Connecting multiple components to a shared store
   - Building reactive components that respond to store updates

Each directory contains starter code and instructions for the specific exercise.

## 🔍 Important Note

There is no single "correct" way to implement these concepts. The examples shown provide one approach, but there are countless alternatives depending on your specific use case, performance requirements, and personal preference. Feel free to experiment and find your own solutions!

## 📚 Resources

- [Web Component Base](https://webcomponent.io/)
- [Nanostores Documentation](https://github.com/nanostores/nanostores)
- [Web Components MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Custom Events MDN](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)
