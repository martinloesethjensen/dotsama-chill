# dotsama-chill

You can access the app [here](https://martinloesethjensen.github.io/dotsama-chill/). 
> Please note that it can take a minute or two for it to load all the nominators that can be chilled.  

## Introduction

TODO

![image](https://user-images.githubusercontent.com/31356774/132040142-9540c139-e848-479c-a6a9-e3c08104dc3f.png)

### Why 

TODO

### App features

TODO

### Roadmap

- Statistics overview:
    - Minimum nominator bond
    - Nominators 
    - Max nominators  
    - Chill threshold
    - Chillable amount 
    - Era info  
- Identicon on addresses
- Success dialog with block hash and link to subscan
- Error dialog when trying to chill
- Loading states:
    - Loading of nominators below threshold
    - Loading of transaction 
- Empty state (when no nominators can be chilled) 
- Range slider sorting on amount
- Switching between networks (Polkadot & Kusama)
    - Kusama when this would become a necessity => currently there's no threshold on Kusama and the current nominators are way below max nominator count.

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
