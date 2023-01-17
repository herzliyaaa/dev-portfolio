#! /bin/bash


git checkout v2.0 && git pull origin v2.0
npm run predeploy
npm run deploy

#npm install