#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { NotesAppStack } from '../lib/notes-app-stack';

const app = new cdk.App();
new NotesAppStack(app, 'NotesAppStack');
