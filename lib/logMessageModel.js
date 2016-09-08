'use strict';

const elasticsearch = require('elasticsearch-odm');
const model = elasticsearch.model;
const Schema = elasticsearch.Schema;

var logMessageSchema = new Schema({
  message: { type: String, required: true, index: 'analyzed' },
  compiledMessage: { type: Schema.Types.Mixed },
  applicationId: { type: String, required: true }
});

module.exports = model('LogMessage', logMessageSchema);
