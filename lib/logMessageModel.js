'use strict';

const elasticsearch = require('elasticsearch-odm-2');
const model = elasticsearch.model;
const Schema = elasticsearch.Schema;

var logMessageSchema = new Schema({
  message: { type: String, required: true, index: 'analyzed' },
  compiledMessage: { type: Schema.Types.Mixed },
  applicationId: { type: String, required: true },
  alertId: { type: String, required: false }
});

module.exports = model('LogMessage', logMessageSchema);
