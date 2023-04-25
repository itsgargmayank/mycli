import chalk from "chalk";
import figlet from "figlet";
import yargs, { Argv } from "yargs"

/**
 * Command Name
 */
export const command = 'asciiart'

/**
 * Description of the command
 */
export const describe = 'generates ascii art'

/**
 * 
 * @param yargs 
 * @returns 
 */
export function builder(yargs: Argv) {
    return yargs.options({});
}


/**
 * 
 * @param argv 
 */
export async function handler(argv: any) {
    console.log(
        chalk.yellow(
          figlet.textSync('mycli', { font: "Ghost", horizontalLayout: 'full' })
        )
      );
    yargs.showHelp();

}