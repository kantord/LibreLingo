#!/bin/bash
if [ "$KNAPSACK_PRO_TEST_SUITE_TOKEN_RSPEC" = "" ]; then
  KNAPSACK_PRO_ENDPOINT=https://api-disabled-for-fork.knapsackpro.com \
    KNAPSACK_PRO_TEST_SUITE_TOKEN_RSPEC=disabled-for-fork \
    KNAPSACK_PRO_MAX_REQUEST_RETRIES=0 
fi
KNAPSACK_PRO_TEST_FILE_PATTERN=\"cypress/integration/**/*.{feature,features}\" percy exec -- $(npm bin)/knapsack-pro-cypress