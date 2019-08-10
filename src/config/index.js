import fs from 'fs';
import path from 'path';

const properties = JSON.parse(fs.readFileSync(path.join(__dirname + '../../../properties.json'), 'utf-8'));

export const mysql = properties.mysql;
export const redis = properties.redis;