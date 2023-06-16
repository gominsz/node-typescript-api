import * as path from 'path';
import moduleAlias from 'module-alias';
import { addListener } from 'process';
import { test } from 'node:test';

const files = path.resolve(__dirname, '../..');
moduleAlias.addAliases({
  '@src': path.join(files, 'src'),
  '@test': path.join(files, 'test'),
});
