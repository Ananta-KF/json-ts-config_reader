# JSON Schema to TypeScript

This project automates the conversion of JSON schema files into TypeScript interfaces using the `json-schema-to-typescript` library. It reads JSON schema files from the `schemas` directory, generates TypeScript interfaces, and outputs them to the `dist` directory.


## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd json-schema-to-ts
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

### Usage

1. Generate TypeScript interfaces from JSON schema files:

    ```bash
    npm run generate
    ```

2. Compile the TypeScript project:

    ```bash
    npm run build
    ```

3. Run the combined generation and build process:

    ```bash
    npm run test
    ```
