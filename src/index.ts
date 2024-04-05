import { resolve } from 'path';
import { Architecture, Code, Runtime, Function } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class SomeFunction extends Function {
  constructor(scope: Construct, id: string) {
    super(scope, id, {
      runtime: Runtime.NODEJS_16_X,
      architecture: Architecture.ARM_64,
      handler: 'index.handler',
      code: Code.fromAsset(resolve(__dirname, '..', 'bundled', 'foo.zip')),
    });
  }
}
