import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Manuel',
  authorAddress: 'manuel.wessner@codecentric.de',
  cdkVersion: '2.130.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.3.0',
  name: 'projenfunctionbundlingtest',
  projenrcTs: true,
  repositoryUrl:
    'https://github.com/manuel.wessner/projenfunctionbundlingtest.git',
  npmRegistryUrl: 'https://npm.pkg.github.com',
  publishToPypi: {
    distName: 'projenfunctionbundlingtest',
    module: 'projenfunctionbundlingtest',
  },

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
