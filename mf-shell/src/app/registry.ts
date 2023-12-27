import { loadRemoteModule } from '@angular-architects/module-federation';

// Registered information MFE
// Type Module for those like Angular
// Type Script for those like React | Svelte | Vue
export const registry = {
  mfreact: {
    importName: 'mfreact',
    loaderFn: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/assets/remoteEntry.js',
        exposedModule: './web-components',
      }),
  },
  mfangular: {
    importName: 'mfangular',
    loaderFn: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './web-components',
      }),
  },
  // mfe1: () => loadRemoteModule({
  //     type: 'module',
  //     remoteEntry: 'http://localhost:4201/remoteEntry.js',
  //     exposedModule: './web-components'
  // }),
  // mfe2: () => loadRemoteModule({
  //     type: 'script',
  //     remoteEntry: 'http://localhost:4202/remoteEntry.js',
  //     remoteName: 'mfe2',
  //     exposedModule: './web-components'
  // })
};
