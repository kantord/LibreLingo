#!/bin/bash
if [ "$KNAPSACK_PRO_TEST_SUITE_TOKEN_RSPEC" = "" ]; then
  echo "KNAPSACK PRO NOT ENABLED"
  KNAPSACK_PRO_ENDPOINT=https://api-disabled-for-fork.knapsackpro.com \
    KNAPSACK_PRO_TEST_SUITE_TOKEN_RSPEC=disabled-for-fork \
    KNAPSACK_PRO_MAX_REQUEST_RETRIES=0 
    # percy exec -- yarn cy:run
    yarn cy:run
else
  echo "KNAPSACK PRO ENABLED"
  # KNAPSACK_PRO_TEST_FILE_PATTERN=\"cypress/integration/**/*.{feature,features}\" percy exec -- $(npm bin)/knapsack-pro-cypress
  KNAPSACK_PRO_TEST_FILE_PATTERN=\"cypress/integration/**/*.{feature,features}\" $(npm bin)/knapsack-pro-cypress
fi
