// src/index.ts
/**
 * Main entry point for ZeroTestnetAutomationKitPro
 */

import { ZeroTestnetAutomationKitPro } from './zerotestnetautomationkitpro';
import minimist from 'minimist';

/**
 * Define command line argument interface
 */
interface Args {
    verbose?: boolean;
    input?: string;
    output?: string;
}

/**
 * Parse command line arguments
 */
const args: Args = minimist(process.argv.slice(2), {
    boolean: ['verbose'],
    alias: {
        v: 'verbose',
        i: 'input',
        o: 'output'
    }
});

/**
 * Initialize application with parsed arguments
 */
const app = new ZeroTestnetAutomationKitPro({
    verbose: args.verbose
});

/**
 * Execute application and handle any errors
 */
app.execute()
    .then(() => {
        process.exit(0); // exit with success code when execution is complete
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });