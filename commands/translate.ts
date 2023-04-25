import { translate } from "@vitalets/google-translate-api";
import chalk from "chalk";
import yargs, { Argv } from "yargs"

/**
 * Command Name
 */
export const command = 'translate'

/**
 * Description of the command
 */
export const describe = 'translates a sentence to specific language'

/**
 * 
 * @param yargs 
 * @returns 
 */
export function builder(yargs: Argv) {
    return yargs.options({
        sentence: {
            type: 'string',
            alias: 's',
            describe: 'sentence to be translated',
            demandOptions: false
        },
        language: {
            type: 'string',
            alias: 'l',
            describe: 'language in which the sentence is to be translated',
            demandOptions: false
        }
    });
}


/**
 * 
 * @param argv 
 */
export async function handler(argv: any) {

    if (argv.sentence == null && argv.s == null) {
        yargs.showHelp();
        process.exit(0)
    }

    const language = argv.l || argv.language;

    const sentence = argv.s || argv.sentence;

    await translate(sentence, { to: language }).then((res: any) => {
        console.log(chalk.green("\n" + chalk.green(sentence + "\n\n" + res.text) + "\n"));
    }).catch((err: any) => {
        console.error(chalk.red(err));
    });
}