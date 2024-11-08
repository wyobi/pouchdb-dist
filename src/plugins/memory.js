// this code only runs in the browser, as its own dist/ script

import MemoryPouchPlugin from 'pouchdb-adapter-memory';
import { guardedConsole } from 'pouchdb-utils';

if (typeof PouchDB === 'undefined') {
  guardedConsole('error', 'memory adapter plugin error: ' +
    'Cannot find global "PouchDB" object! ' +
    'Did you remember to include pouchdb.js?');
} else {
  PouchDB.plugin(MemoryPouchPlugin);
}
