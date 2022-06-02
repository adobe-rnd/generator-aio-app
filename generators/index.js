/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const excshell = require('@adobe/generator-app-excshell')
const assetComputeWorker = require('@adobe/generator-app-asset-compute')

module.exports = {
  'add-action': require('./add-action'),
  'add-ci': require('./add-ci'),
  'add-events': require('./add-events'),
  'add-vscode-config': require('./add-vscode-config'),
  'add-web-assets': require('./add-web-assets'),
  application: require('./application'),
  'base-app': require('./base-app'),
  'delete-ci': require('./delete-ci'),
  extensions: {
    'dx/excshell/1': excshell,
    'dx/asset-compute/worker/1': assetComputeWorker
  }
}
