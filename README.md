# Perennial Typescript SDK - DRAFT

A collection of functions to interact with the Perennial V2 markets. Within it you'll find:

- Read functions for:
  - Markets
  - Vaults
- Helper Functions
  - Building transaction data
  - Positions
  - Interest Rate& Funding
- Constants
  - Network (Chain & Oracle)
  - Contracts
  - Markets
- ABIs of contracts
- Types

## Getting Started

Use the following commands to install:

```bash
yarn add perennial-sdk-ts
```

## Utilization

**Important:** The provider passed to this library _must_ have the RPC call: `eth_call` available.

### Examples

You can check out the various examples of how to use this code base in the `/examples` folder. To run these examples use the following command:

```bash
  npx esno ./examples/fetchMakerData.ts
```

If you need to add `env` varibles you can front load them like this:

```bash
ALCHEMY_URL=<url_goes_here> npx esno ./examples/fetchMakerData.ts
```
