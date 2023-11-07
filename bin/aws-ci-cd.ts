#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsCiCdStack } from '../lib/aws-ci-cd-stack';

const app = new cdk.App();
new AwsCiCdStack(app, 'AwsCiCdStack', {
  env: {
    account: '418932573152',
    region: 'us-east-1',
  }
});

app.synth();