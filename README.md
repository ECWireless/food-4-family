food-4-family
==================

Food4Family is a relatively simple web app that allows users to share recipes online. This differs from standard recipe sites in two key ways:

1. Users have the opportunity to form "families" amongst themselves, in order to publish their own "family cook book." This Cook Book is a compilation of recipes published by each User, and also voted in by the Family. Users can create as many Families as they like, and can also request their recipe be compiled in multiple Family Cook Books.

2. All Recipes, Families, and Users are housed on the NEAR blockchain. On top of this, governance over family decisions (i.e. which recipes are allowed into the cook book) is also completely handled by the blockchain. In the future, plenty of other governance and ownership features can be added as needed.

Check out Food4Family now (still very much a work in progress)! https://food-4-family.vercel.app/


Quick Start
===========

To run this project locally:

1. Prerequisites: Make sure you've installed [Node.js] ≥ 12
2. Install dependencies: `yarn install`
3. Run the local development server: `yarn dev` (see `package.json` for a
   full list of `scripts` you can run with `yarn`)

Now you'll have a local development environment backed by the NEAR TestNet.


Exploring The Code
==================

1. The "backend" code lives in the `/assembly` folder. This code gets deployed to
   the NEAR blockchain when you run `yarn deploy:contract`. This sort of
   code-that-runs-on-a-blockchain is called a "smart contract" – [learn more
   about NEAR smart contracts][smart contract docs].
2. The frontend code lives in the `/src` folder. `/src/index.html` is a great
   place to start exploring. Note that it loads in `/src/index.js`, where you
   can learn how the frontend connects to the NEAR blockchain.
3. Tests: there are different kinds of tests for the frontend and the smart
   contract. The smart contract code gets tested with [asp], and the frontend
   code gets tested with [jest]. You can run both of these at once with `yarn
   run test`.


Deploy
======

Every smart contract in NEAR has its [own associated account][NEAR accounts]. When you run `yarn dev`, your smart contract gets deployed to the live NEAR TestNet with a throwaway account. When you're ready to make it permanent, here's how.


Step 0: Install near-cli (optional)
-------------------------------------

[near-cli] is a command line interface (CLI) for interacting with the NEAR blockchain. It was installed to the local `node_modules` folder when you ran `yarn install`, but for best ergonomics you may want to install it globally:

    yarn install --global near-cli

Or, if you'd rather use the locally-installed version, you can prefix all `near` commands with `npx`

Ensure that it's installed with `near --version` (or `npx near --version`)


Step 1: Create an account for the contract
------------------------------------------

Each account on NEAR can have at most one contract deployed to it. If you've already created an account such as `your-name.testnet`, you can deploy your contract to `food-4-family.your-name.testnet`. Assuming you've already created an account on [NEAR Wallet], here's how to create `food-4-family.your-name.testnet`:

1. Authorize NEAR CLI, following the commands it gives you:

      near login

2. Create a subaccount (replace `YOUR-NAME` below with your actual account name):

      near create-account food-4-family.YOUR-NAME.testnet --masterAccount YOUR-NAME.testnet


Step 2: set contract name in code
---------------------------------

Modify the line in `src/config.js` that sets the account name of the contract. Set it to the account id you used above.

    const CONTRACT_NAME = process.env.CONTRACT_NAME || 'food-4-family.YOUR-NAME.testnet'


Step 3: deploy!
---------------

One command:

    yarn deploy

As you can see in `package.json`, this does two things:

1. builds & deploys smart contract to NEAR TestNet
2. builds & deploys frontend code to GitHub using [gh-pages]. This will only work if the project already has a repository set up on GitHub. Feel free to modify the `deploy` script in `package.json` to deploy elsewhere.


Troubleshooting
===============

On Windows, if you're seeing an error containing `EPERM` it may be related to spaces in your path. Please see [this issue](https://github.com/zkat/npx/issues/209) for more details.


  [create-near-app]: https://github.com/near/create-near-app
  [Node.js]: https://nodejs.org/en/download/package-manager/
  [React]: https://reactjs.org
  [smart contract docs]: https://docs.near.org/docs/roles/developer/contracts/intro
  [asp]: https://www.npmjs.com/package/@as-pect/cli
  [jest]: https://jestjs.io/
  [NEAR accounts]: https://docs.near.org/docs/concepts/account
  [NEAR Wallet]: https://wallet.testnet.near.org/
  [near-cli]: https://github.com/near/near-cli
  [gh-pages]: https://github.com/tschaub/gh-pages
