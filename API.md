# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SomeFunction <a name="SomeFunction" id="projenfunctionbundlingtest.SomeFunction"></a>

#### Initializers <a name="Initializers" id="projenfunctionbundlingtest.SomeFunction.Initializer"></a>

```typescript
import { SomeFunction } from 'projenfunctionbundlingtest'

new SomeFunction(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="projenfunctionbundlingtest.SomeFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="projenfunctionbundlingtest.SomeFunction.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.addEventSource">addEventSource</a></code> | Adds an event source to this function. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.addEventSourceMapping">addEventSourceMapping</a></code> | Adds an event source that maps to this AWS Lambda function. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.addFunctionUrl">addFunctionUrl</a></code> | Adds a url to this lambda function. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.addPermission">addPermission</a></code> | Adds a permission to the Lambda resource policy. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.addToRolePolicy">addToRolePolicy</a></code> | Adds a statement to the IAM role assumed by the instance. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.configureAsyncInvoke">configureAsyncInvoke</a></code> | Configures options for asynchronous invocation. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.considerWarningOnInvokeFunctionPermissions">considerWarningOnInvokeFunctionPermissions</a></code> | A warning will be added to functions under the following conditions: - permissions that include `lambda:InvokeFunction` are added to the unqualified function. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.grantInvoke">grantInvoke</a></code> | Grant the given identity permissions to invoke this Lambda. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.grantInvokeCompositePrincipal">grantInvokeCompositePrincipal</a></code> | Grant multiple principals the ability to invoke this Lambda via CompositePrincipal. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.grantInvokeUrl">grantInvokeUrl</a></code> | Grant the given identity permissions to invoke this Lambda Function URL. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.metric">metric</a></code> | Return the given named metric for this Function. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.metricDuration">metricDuration</a></code> | How long execution of this Lambda takes. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.metricErrors">metricErrors</a></code> | How many invocations of this Lambda fail. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.metricInvocations">metricInvocations</a></code> | How often this Lambda is invoked. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.metricThrottles">metricThrottles</a></code> | How often this Lambda is throttled. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.addAlias">addAlias</a></code> | Defines an alias for this function. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.addEnvironment">addEnvironment</a></code> | Adds an environment variable to this Lambda function. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.addLayers">addLayers</a></code> | Adds one or more Lambda Layers to this Lambda function. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.invalidateVersionBasedOn">invalidateVersionBasedOn</a></code> | Mix additional information into the hash of the Version object. |

---

##### `toString` <a name="toString" id="projenfunctionbundlingtest.SomeFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="projenfunctionbundlingtest.SomeFunction.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="projenfunctionbundlingtest.SomeFunction.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventSource` <a name="addEventSource" id="projenfunctionbundlingtest.SomeFunction.addEventSource"></a>

```typescript
public addEventSource(source: IEventSource): void
```

Adds an event source to this function.

Event sources are implemented in the aws-cdk-lib/aws-lambda-event-sources module.

The following example adds an SQS Queue as an event source:
```
import { SqsEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
myFunction.addEventSource(new SqsEventSource(myQueue));
```

###### `source`<sup>Required</sup> <a name="source" id="projenfunctionbundlingtest.SomeFunction.addEventSource.parameter.source"></a>

- *Type:* aws-cdk-lib.aws_lambda.IEventSource

---

##### `addEventSourceMapping` <a name="addEventSourceMapping" id="projenfunctionbundlingtest.SomeFunction.addEventSourceMapping"></a>

```typescript
public addEventSourceMapping(id: string, options: EventSourceMappingOptions): EventSourceMapping
```

Adds an event source that maps to this AWS Lambda function.

###### `id`<sup>Required</sup> <a name="id" id="projenfunctionbundlingtest.SomeFunction.addEventSourceMapping.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="projenfunctionbundlingtest.SomeFunction.addEventSourceMapping.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventSourceMappingOptions

---

##### `addFunctionUrl` <a name="addFunctionUrl" id="projenfunctionbundlingtest.SomeFunction.addFunctionUrl"></a>

```typescript
public addFunctionUrl(options?: FunctionUrlOptions): FunctionUrl
```

Adds a url to this lambda function.

###### `options`<sup>Optional</sup> <a name="options" id="projenfunctionbundlingtest.SomeFunction.addFunctionUrl.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionUrlOptions

---

##### `addPermission` <a name="addPermission" id="projenfunctionbundlingtest.SomeFunction.addPermission"></a>

```typescript
public addPermission(id: string, permission: Permission): void
```

Adds a permission to the Lambda resource policy.

> [Permission for details.](Permission for details.)

###### `id`<sup>Required</sup> <a name="id" id="projenfunctionbundlingtest.SomeFunction.addPermission.parameter.id"></a>

- *Type:* string

The id for the permission construct.

---

###### `permission`<sup>Required</sup> <a name="permission" id="projenfunctionbundlingtest.SomeFunction.addPermission.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_lambda.Permission

The permission to grant to this Lambda function.

---

##### `addToRolePolicy` <a name="addToRolePolicy" id="projenfunctionbundlingtest.SomeFunction.addToRolePolicy"></a>

```typescript
public addToRolePolicy(statement: PolicyStatement): void
```

Adds a statement to the IAM role assumed by the instance.

###### `statement`<sup>Required</sup> <a name="statement" id="projenfunctionbundlingtest.SomeFunction.addToRolePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `configureAsyncInvoke` <a name="configureAsyncInvoke" id="projenfunctionbundlingtest.SomeFunction.configureAsyncInvoke"></a>

```typescript
public configureAsyncInvoke(options: EventInvokeConfigOptions): void
```

Configures options for asynchronous invocation.

###### `options`<sup>Required</sup> <a name="options" id="projenfunctionbundlingtest.SomeFunction.configureAsyncInvoke.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventInvokeConfigOptions

---

##### `considerWarningOnInvokeFunctionPermissions` <a name="considerWarningOnInvokeFunctionPermissions" id="projenfunctionbundlingtest.SomeFunction.considerWarningOnInvokeFunctionPermissions"></a>

```typescript
public considerWarningOnInvokeFunctionPermissions(scope: Construct, action: string): void
```

A warning will be added to functions under the following conditions: - permissions that include `lambda:InvokeFunction` are added to the unqualified function.

function.currentVersion is invoked before or after the permission is created.

This applies only to permissions on Lambda functions, not versions or aliases.
This function is overridden as a noOp for QualifiedFunctionBase.

###### `scope`<sup>Required</sup> <a name="scope" id="projenfunctionbundlingtest.SomeFunction.considerWarningOnInvokeFunctionPermissions.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `action`<sup>Required</sup> <a name="action" id="projenfunctionbundlingtest.SomeFunction.considerWarningOnInvokeFunctionPermissions.parameter.action"></a>

- *Type:* string

---

##### `grantInvoke` <a name="grantInvoke" id="projenfunctionbundlingtest.SomeFunction.grantInvoke"></a>

```typescript
public grantInvoke(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda.

###### `grantee`<sup>Required</sup> <a name="grantee" id="projenfunctionbundlingtest.SomeFunction.grantInvoke.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantInvokeCompositePrincipal` <a name="grantInvokeCompositePrincipal" id="projenfunctionbundlingtest.SomeFunction.grantInvokeCompositePrincipal"></a>

```typescript
public grantInvokeCompositePrincipal(compositePrincipal: CompositePrincipal): Grant[]
```

Grant multiple principals the ability to invoke this Lambda via CompositePrincipal.

###### `compositePrincipal`<sup>Required</sup> <a name="compositePrincipal" id="projenfunctionbundlingtest.SomeFunction.grantInvokeCompositePrincipal.parameter.compositePrincipal"></a>

- *Type:* aws-cdk-lib.aws_iam.CompositePrincipal

---

##### `grantInvokeUrl` <a name="grantInvokeUrl" id="projenfunctionbundlingtest.SomeFunction.grantInvokeUrl"></a>

```typescript
public grantInvokeUrl(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda Function URL.

###### `grantee`<sup>Required</sup> <a name="grantee" id="projenfunctionbundlingtest.SomeFunction.grantInvokeUrl.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `metric` <a name="metric" id="projenfunctionbundlingtest.SomeFunction.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this Function.

###### `metricName`<sup>Required</sup> <a name="metricName" id="projenfunctionbundlingtest.SomeFunction.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="projenfunctionbundlingtest.SomeFunction.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricDuration` <a name="metricDuration" id="projenfunctionbundlingtest.SomeFunction.metricDuration"></a>

```typescript
public metricDuration(props?: MetricOptions): Metric
```

How long execution of this Lambda takes.

Average over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="projenfunctionbundlingtest.SomeFunction.metricDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricErrors` <a name="metricErrors" id="projenfunctionbundlingtest.SomeFunction.metricErrors"></a>

```typescript
public metricErrors(props?: MetricOptions): Metric
```

How many invocations of this Lambda fail.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="projenfunctionbundlingtest.SomeFunction.metricErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricInvocations` <a name="metricInvocations" id="projenfunctionbundlingtest.SomeFunction.metricInvocations"></a>

```typescript
public metricInvocations(props?: MetricOptions): Metric
```

How often this Lambda is invoked.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="projenfunctionbundlingtest.SomeFunction.metricInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricThrottles` <a name="metricThrottles" id="projenfunctionbundlingtest.SomeFunction.metricThrottles"></a>

```typescript
public metricThrottles(props?: MetricOptions): Metric
```

How often this Lambda is throttled.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="projenfunctionbundlingtest.SomeFunction.metricThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `addAlias` <a name="addAlias" id="projenfunctionbundlingtest.SomeFunction.addAlias"></a>

```typescript
public addAlias(aliasName: string, options?: AliasOptions): Alias
```

Defines an alias for this function.

The alias will automatically be updated to point to the latest version of
the function as it is being updated during a deployment.

```ts
declare const fn: lambda.Function;

fn.addAlias('Live');

// Is equivalent to

new lambda.Alias(this, 'AliasLive', {
  aliasName: 'Live',
  version: fn.currentVersion,
});
```

###### `aliasName`<sup>Required</sup> <a name="aliasName" id="projenfunctionbundlingtest.SomeFunction.addAlias.parameter.aliasName"></a>

- *Type:* string

The name of the alias.

---

###### `options`<sup>Optional</sup> <a name="options" id="projenfunctionbundlingtest.SomeFunction.addAlias.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.AliasOptions

Alias options.

---

##### `addEnvironment` <a name="addEnvironment" id="projenfunctionbundlingtest.SomeFunction.addEnvironment"></a>

```typescript
public addEnvironment(key: string, value: string, options?: EnvironmentOptions): Function
```

Adds an environment variable to this Lambda function.

If this is a ref to a Lambda function, this operation results in a no-op.

###### `key`<sup>Required</sup> <a name="key" id="projenfunctionbundlingtest.SomeFunction.addEnvironment.parameter.key"></a>

- *Type:* string

The environment variable key.

---

###### `value`<sup>Required</sup> <a name="value" id="projenfunctionbundlingtest.SomeFunction.addEnvironment.parameter.value"></a>

- *Type:* string

The environment variable's value.

---

###### `options`<sup>Optional</sup> <a name="options" id="projenfunctionbundlingtest.SomeFunction.addEnvironment.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EnvironmentOptions

Environment variable options.

---

##### `addLayers` <a name="addLayers" id="projenfunctionbundlingtest.SomeFunction.addLayers"></a>

```typescript
public addLayers(layers: ILayerVersion): void
```

Adds one or more Lambda Layers to this Lambda function.

###### `layers`<sup>Required</sup> <a name="layers" id="projenfunctionbundlingtest.SomeFunction.addLayers.parameter.layers"></a>

- *Type:* aws-cdk-lib.aws_lambda.ILayerVersion

the layers to be added.

---

##### `invalidateVersionBasedOn` <a name="invalidateVersionBasedOn" id="projenfunctionbundlingtest.SomeFunction.invalidateVersionBasedOn"></a>

```typescript
public invalidateVersionBasedOn(x: string): void
```

Mix additional information into the hash of the Version object.

The Lambda Function construct does its best to automatically create a new
Version when anything about the Function changes (its code, its layers,
any of the other properties).

However, you can sometimes source information from places that the CDK cannot
look into, like the deploy-time values of SSM parameters. In those cases,
the CDK would not force the creation of a new Version object when it actually
should.

This method can be used to invalidate the current Version object. Pass in
any string into this method, and make sure the string changes when you know
a new Version needs to be created.

This method may be called more than once.

###### `x`<sup>Required</sup> <a name="x" id="projenfunctionbundlingtest.SomeFunction.invalidateVersionBasedOn.parameter.x"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.classifyVersionProperty">classifyVersionProperty</a></code> | Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.fromFunctionArn">fromFunctionArn</a></code> | Import a lambda function into the CDK using its ARN. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.fromFunctionAttributes">fromFunctionAttributes</a></code> | Creates a Lambda function object which represents a function not defined within this stack. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.fromFunctionName">fromFunctionName</a></code> | Import a lambda function into the CDK using its name. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.metricAll">metricAll</a></code> | Return the given named metric for this Lambda. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.metricAllConcurrentExecutions">metricAllConcurrentExecutions</a></code> | Metric for the number of concurrent executions across all Lambdas. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.metricAllDuration">metricAllDuration</a></code> | Metric for the Duration executing all Lambdas. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.metricAllErrors">metricAllErrors</a></code> | Metric for the number of Errors executing all Lambdas. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.metricAllInvocations">metricAllInvocations</a></code> | Metric for the number of invocations of all Lambdas. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.metricAllThrottles">metricAllThrottles</a></code> | Metric for the number of throttled invocations of all Lambdas. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.metricAllUnreservedConcurrentExecutions">metricAllUnreservedConcurrentExecutions</a></code> | Metric for the number of unreserved concurrent executions across all Lambdas. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="projenfunctionbundlingtest.SomeFunction.isConstruct"></a>

```typescript
import { SomeFunction } from 'projenfunctionbundlingtest'

SomeFunction.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="projenfunctionbundlingtest.SomeFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="projenfunctionbundlingtest.SomeFunction.isOwnedResource"></a>

```typescript
import { SomeFunction } from 'projenfunctionbundlingtest'

SomeFunction.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="projenfunctionbundlingtest.SomeFunction.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="projenfunctionbundlingtest.SomeFunction.isResource"></a>

```typescript
import { SomeFunction } from 'projenfunctionbundlingtest'

SomeFunction.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="projenfunctionbundlingtest.SomeFunction.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `classifyVersionProperty` <a name="classifyVersionProperty" id="projenfunctionbundlingtest.SomeFunction.classifyVersionProperty"></a>

```typescript
import { SomeFunction } from 'projenfunctionbundlingtest'

SomeFunction.classifyVersionProperty(propertyName: string, locked: boolean)
```

Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource.

See 'currentVersion' section in the module README for more details.

###### `propertyName`<sup>Required</sup> <a name="propertyName" id="projenfunctionbundlingtest.SomeFunction.classifyVersionProperty.parameter.propertyName"></a>

- *Type:* string

The property to classify.

---

###### `locked`<sup>Required</sup> <a name="locked" id="projenfunctionbundlingtest.SomeFunction.classifyVersionProperty.parameter.locked"></a>

- *Type:* boolean

whether the property should be associated to the version or not.

---

##### `fromFunctionArn` <a name="fromFunctionArn" id="projenfunctionbundlingtest.SomeFunction.fromFunctionArn"></a>

```typescript
import { SomeFunction } from 'projenfunctionbundlingtest'

SomeFunction.fromFunctionArn(scope: Construct, id: string, functionArn: string)
```

Import a lambda function into the CDK using its ARN.

For `Function.addPermissions()` to work on this imported lambda, make sure that is
in the same account and region as the stack you are importing it into.

###### `scope`<sup>Required</sup> <a name="scope" id="projenfunctionbundlingtest.SomeFunction.fromFunctionArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="projenfunctionbundlingtest.SomeFunction.fromFunctionArn.parameter.id"></a>

- *Type:* string

---

###### `functionArn`<sup>Required</sup> <a name="functionArn" id="projenfunctionbundlingtest.SomeFunction.fromFunctionArn.parameter.functionArn"></a>

- *Type:* string

---

##### `fromFunctionAttributes` <a name="fromFunctionAttributes" id="projenfunctionbundlingtest.SomeFunction.fromFunctionAttributes"></a>

```typescript
import { SomeFunction } from 'projenfunctionbundlingtest'

SomeFunction.fromFunctionAttributes(scope: Construct, id: string, attrs: FunctionAttributes)
```

Creates a Lambda function object which represents a function not defined within this stack.

For `Function.addPermissions()` to work on this imported lambda, set the sameEnvironment property to true
if this imported lambda is in the same account and region as the stack you are importing it into.

###### `scope`<sup>Required</sup> <a name="scope" id="projenfunctionbundlingtest.SomeFunction.fromFunctionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

###### `id`<sup>Required</sup> <a name="id" id="projenfunctionbundlingtest.SomeFunction.fromFunctionAttributes.parameter.id"></a>

- *Type:* string

The name of the lambda construct.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="projenfunctionbundlingtest.SomeFunction.fromFunctionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionAttributes

the attributes of the function to import.

---

##### `fromFunctionName` <a name="fromFunctionName" id="projenfunctionbundlingtest.SomeFunction.fromFunctionName"></a>

```typescript
import { SomeFunction } from 'projenfunctionbundlingtest'

SomeFunction.fromFunctionName(scope: Construct, id: string, functionName: string)
```

Import a lambda function into the CDK using its name.

###### `scope`<sup>Required</sup> <a name="scope" id="projenfunctionbundlingtest.SomeFunction.fromFunctionName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="projenfunctionbundlingtest.SomeFunction.fromFunctionName.parameter.id"></a>

- *Type:* string

---

###### `functionName`<sup>Required</sup> <a name="functionName" id="projenfunctionbundlingtest.SomeFunction.fromFunctionName.parameter.functionName"></a>

- *Type:* string

---

##### `metricAll` <a name="metricAll" id="projenfunctionbundlingtest.SomeFunction.metricAll"></a>

```typescript
import { SomeFunction } from 'projenfunctionbundlingtest'

SomeFunction.metricAll(metricName: string, props?: MetricOptions)
```

Return the given named metric for this Lambda.

###### `metricName`<sup>Required</sup> <a name="metricName" id="projenfunctionbundlingtest.SomeFunction.metricAll.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="projenfunctionbundlingtest.SomeFunction.metricAll.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllConcurrentExecutions` <a name="metricAllConcurrentExecutions" id="projenfunctionbundlingtest.SomeFunction.metricAllConcurrentExecutions"></a>

```typescript
import { SomeFunction } from 'projenfunctionbundlingtest'

SomeFunction.metricAllConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="projenfunctionbundlingtest.SomeFunction.metricAllConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllDuration` <a name="metricAllDuration" id="projenfunctionbundlingtest.SomeFunction.metricAllDuration"></a>

```typescript
import { SomeFunction } from 'projenfunctionbundlingtest'

SomeFunction.metricAllDuration(props?: MetricOptions)
```

Metric for the Duration executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="projenfunctionbundlingtest.SomeFunction.metricAllDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllErrors` <a name="metricAllErrors" id="projenfunctionbundlingtest.SomeFunction.metricAllErrors"></a>

```typescript
import { SomeFunction } from 'projenfunctionbundlingtest'

SomeFunction.metricAllErrors(props?: MetricOptions)
```

Metric for the number of Errors executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="projenfunctionbundlingtest.SomeFunction.metricAllErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllInvocations` <a name="metricAllInvocations" id="projenfunctionbundlingtest.SomeFunction.metricAllInvocations"></a>

```typescript
import { SomeFunction } from 'projenfunctionbundlingtest'

SomeFunction.metricAllInvocations(props?: MetricOptions)
```

Metric for the number of invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="projenfunctionbundlingtest.SomeFunction.metricAllInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllThrottles` <a name="metricAllThrottles" id="projenfunctionbundlingtest.SomeFunction.metricAllThrottles"></a>

```typescript
import { SomeFunction } from 'projenfunctionbundlingtest'

SomeFunction.metricAllThrottles(props?: MetricOptions)
```

Metric for the number of throttled invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="projenfunctionbundlingtest.SomeFunction.metricAllThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllUnreservedConcurrentExecutions` <a name="metricAllUnreservedConcurrentExecutions" id="projenfunctionbundlingtest.SomeFunction.metricAllUnreservedConcurrentExecutions"></a>

```typescript
import { SomeFunction } from 'projenfunctionbundlingtest'

SomeFunction.metricAllUnreservedConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of unreserved concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="projenfunctionbundlingtest.SomeFunction.metricAllUnreservedConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64). |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Access the Connections object. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.property.functionArn">functionArn</a></code> | <code>string</code> | ARN of this function. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.property.functionName">functionName</a></code> | <code>string</code> | Name of this function. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal this Lambda Function is running as. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.property.isBoundToVpc">isBoundToVpc</a></code> | <code>boolean</code> | Whether or not this Lambda function was bound to a VPC. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.property.latestVersion">latestVersion</a></code> | <code>aws-cdk-lib.aws_lambda.IVersion</code> | The `$LATEST` version of this function. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.property.permissionsNode">permissionsNode</a></code> | <code>constructs.Node</code> | The construct node where permissions are attached. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.property.resourceArnsForGrantInvoke">resourceArnsForGrantInvoke</a></code> | <code>string[]</code> | The ARN(s) to put into the resource field of the generated IAM policy for grantInvoke(). |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Execution role associated with this function. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.property.currentVersion">currentVersion</a></code> | <code>aws-cdk-lib.aws_lambda.Version</code> | Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The LogGroup where the Lambda function's logs are made available. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | The runtime configured for this lambda. |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The DLQ (as queue) associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.property.deadLetterTopic">deadLetterTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The DLQ (as topic) associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#projenfunctionbundlingtest.SomeFunction.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The timeout configured for this lambda. |

---

##### `node`<sup>Required</sup> <a name="node" id="projenfunctionbundlingtest.SomeFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="projenfunctionbundlingtest.SomeFunction.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="projenfunctionbundlingtest.SomeFunction.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="projenfunctionbundlingtest.SomeFunction.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture

The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64).

---

##### `connections`<sup>Required</sup> <a name="connections" id="projenfunctionbundlingtest.SomeFunction.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Access the Connections object.

Will fail if not a VPC-enabled Lambda Function

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="projenfunctionbundlingtest.SomeFunction.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

ARN of this function.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="projenfunctionbundlingtest.SomeFunction.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Name of this function.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="projenfunctionbundlingtest.SomeFunction.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal this Lambda Function is running as.

---

##### `isBoundToVpc`<sup>Required</sup> <a name="isBoundToVpc" id="projenfunctionbundlingtest.SomeFunction.property.isBoundToVpc"></a>

```typescript
public readonly isBoundToVpc: boolean;
```

- *Type:* boolean

Whether or not this Lambda function was bound to a VPC.

If this is is `false`, trying to access the `connections` object will fail.

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="projenfunctionbundlingtest.SomeFunction.property.latestVersion"></a>

```typescript
public readonly latestVersion: IVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.IVersion

The `$LATEST` version of this function.

Note that this is reference to a non-specific AWS Lambda version, which
means the function this version refers to can return different results in
different invocations.

To obtain a reference to an explicit version which references the current
function configuration, use `lambdaFunction.currentVersion` instead.

---

##### `permissionsNode`<sup>Required</sup> <a name="permissionsNode" id="projenfunctionbundlingtest.SomeFunction.property.permissionsNode"></a>

```typescript
public readonly permissionsNode: Node;
```

- *Type:* constructs.Node

The construct node where permissions are attached.

---

##### `resourceArnsForGrantInvoke`<sup>Required</sup> <a name="resourceArnsForGrantInvoke" id="projenfunctionbundlingtest.SomeFunction.property.resourceArnsForGrantInvoke"></a>

```typescript
public readonly resourceArnsForGrantInvoke: string[];
```

- *Type:* string[]

The ARN(s) to put into the resource field of the generated IAM policy for grantInvoke().

---

##### `role`<sup>Optional</sup> <a name="role" id="projenfunctionbundlingtest.SomeFunction.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Execution role associated with this function.

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="projenfunctionbundlingtest.SomeFunction.property.currentVersion"></a>

```typescript
public readonly currentVersion: Version;
```

- *Type:* aws-cdk-lib.aws_lambda.Version

Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes.

You can specify options for this version using the `currentVersionOptions`
prop when initializing the `lambda.Function`.

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="projenfunctionbundlingtest.SomeFunction.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The LogGroup where the Lambda function's logs are made available.

If either `logRetention` is set or this property is called, a CloudFormation custom resource is added to the stack that
pre-creates the log group as part of the stack deployment, if it already doesn't exist, and sets the correct log retention
period (never expire, by default).

Further, if the log group already exists and the `logRetention` is not set, the custom resource will reset the log retention
to never expire even if it was configured with a different value.

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="projenfunctionbundlingtest.SomeFunction.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime

The runtime configured for this lambda.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="projenfunctionbundlingtest.SomeFunction.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue

The DLQ (as queue) associated with this Lambda Function (this is an optional attribute).

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="projenfunctionbundlingtest.SomeFunction.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic

The DLQ (as topic) associated with this Lambda Function (this is an optional attribute).

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="projenfunctionbundlingtest.SomeFunction.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration

The timeout configured for this lambda.

---





