#!/bin/sh

# copy stdin to the file used by the test
tee /src/sarif.json > /dev/null

npm test
