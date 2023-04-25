#!/usr/bin/env node
import yargs from "yargs"


yargs
    .commandDir('../commands')
    .recommendCommands()
    .demandCommand()
    .strict()
    .alias('help', 'h').argv