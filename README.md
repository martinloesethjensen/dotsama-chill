# dotsama-chill

You can access the app [here](https://martinloesethjensen.github.io/dotsama-chill/).

> Please note that it can take a minute or two for it to load all the nominators that can be chilled.

There's a post on [polkassembly for tip proposal](https://kusama.polkassembly.io/tip/0x2e98e3eff4e931943b688e718db8dfb8ba27ce2856ffb4364804a72e16db996b).

## Introduction

At present while the `chillOther` extrinsic is permission less many less technical nominators don't know how to find a chillable nominator and thereafter how to chill them. This application helps simplify the process and reduces reliance on Parity/W3F to issue mass chills when limits are reached.

![image](https://user-images.githubusercontent.com/31356774/132140016-87f2a918-4482-40b8-822c-c29a72473de7.png)

### App features

- Statistics overview
- List of chillable nominators
- Switching between Polkadot & Kusama
- Chill button to do a transaction with `utility.batch` that has an array of `staking.chillOther`.

### Roadmap

- [x] Statistics overview:
  - [x] Minimum nominator bond
  - [x] Nominators
  - [x] Max nominators
  - [x] Chill threshold
  - [x] Chillable amount
  - [x] Era info
- [ ] Identicon on addresses
- [ ] Success popup
  - [x] Showing hash on succeeded transaction
  - [ ] Link to subscan for extrinsic
- [ ] Error popup when trying to "chill" button and transaction somehow fails
- Loading states:
  - [x] Loading of nominators below threshold
  - [x] Loading of transaction
- [x] Empty state (when no nominators can be chilled)
- [ ] Range slider sorting on amount
- [x] Switching between networks (Polkadot & Kusama)
  - currently there's no threshold on Kusama and the current nominators are way below max nominator count.
- [x] Use elara.patract.io endpoint for Polkadot & Kusama

Have a look at [the board](https://github.com/martinloesethjensen/dotsama-chill/projects/1) to see the progress and planned work 👷

### Installation

The codebase is installed using [git](https://git-scm.com/) and [yarn](https://yarnpkg.com/). This tutorial assumes you have installed yarn globally prior to installing it within the subdirectories. For the most recent version and how to install yarn, please refer to [yarn](https://yarnpkg.com/) documentation and installation guides.

```bash
# Clone the repository
git clone https://github.com/martinloesethjensen/dotsama-chill.git
cd dotsama-chill
yarn install
```

## Usage

You can start the app in development mode to connect to a locally running node

```bash
yarn start
```

You can also build the app in production mode,

```bash
yarn build
```

and open `build/index.html` in your favorite browser.

### Deploying

```bash
yarn deploy
```

## Tipping

🌱 KSM tipping address 😊

[KSM Address](https://kusama.subscan.io/account/HtSKUKWRPCxCtzsnNfdbN1NN5uVq4yMizb2FqeHSC3YoRTi):

```text
HtSKUKWRPCxCtzsnNfdbN1NN5uVq4yMizb2FqeHSC3YoRTi
```
