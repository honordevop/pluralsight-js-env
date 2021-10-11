// This file isn't transpiled, so must use CommonJs and ES%

// Register abel to transpile before our test run.
require('@babel/register') ();

// Disable webpack features that Mocha doesn't understand.
require.extensions ['.css'] = function() {}
