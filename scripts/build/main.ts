import { join as pathJoin } from "path";
import chalk from "chalk";
import { getThisCodebaseRootDirPath } from "../tools/getThisCodebaseRootDirPath";
import { cleanup } from "../shared/cleanup";
import { run } from "../shared/run";
import { vendorDependencies } from "./vendorDependencies";

console.log(chalk.cyan(`Building @onyxia-ui/code-editor...`));

const startTime = Date.now();

const distDirPath = pathJoin(getThisCodebaseRootDirPath(), "dist");

cleanup({ distDirPath });

run("npx tsc", { cwd: getThisCodebaseRootDirPath() });

vendorDependencies({ distDirPath });

console.log(chalk.green(`✓ built in ${((Date.now() - startTime) / 1000).toFixed(2)}s`));
