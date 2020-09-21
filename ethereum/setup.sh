#!/bin/bash
set -e # Set script to exit on error

yarn # Install local dependencies

# Build docker image
docker build -t denalimarsh/polkadot-ethereum-truffle . # --no-cache

# Run docker container and forward port 9545 to localhost, then start truffle network and deploy contracts
docker run -p 9545:9545 -i -t denalimarsh/polkadot-ethereum-truffle /bin/bash -c "npm run develop | npm run migrate"
