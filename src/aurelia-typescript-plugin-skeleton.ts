
import { PLATFORM } from 'aurelia-pal';
export function configure(config, callback) {
    config.globalResources(
        PLATFORM.moduleName('./aurelia-typescript-plugin-skeleton')
    );
}

export { HelloWorld } from './HelloWorld';

