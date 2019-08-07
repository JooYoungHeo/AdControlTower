import fs from 'fs';
import path from 'path';

const properties = JSON.parse(fs.readFileSync(path.join(__dirname + '../../../properties.json'), 'utf-8'));
const config = properties.mysql;

module.exports = config;