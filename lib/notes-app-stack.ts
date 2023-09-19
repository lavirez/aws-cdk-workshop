import { Stack, StackProps } from 'aws-cdk-lib';
import * as subs from 'aws-cdk-lib/aws-sns-subscriptions';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from "aws-cdk-lib/aws-apigateway";
import { Construct } from 'constructs';

export class NotesAppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
  
    const hello = new lambda.Function(this, "Hello lambda Handler", {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset("lambda"),
      handler: "hello.handler"
    })

    new apigw.LambdaRestApi(this, "Endpoint 1", {
      handler: hello
    })
  }
}

