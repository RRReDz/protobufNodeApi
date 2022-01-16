// source: donkeys.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.Donkey', null, global);
goog.exportSymbol('proto.Donkeys', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Donkey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Donkey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Donkey.displayName = 'proto.Donkey';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Donkeys = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Donkeys.repeatedFields_, null);
};
goog.inherits(proto.Donkeys, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Donkeys.displayName = 'proto.Donkeys';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Donkey.prototype.toObject = function(opt_includeInstance) {
  return proto.Donkey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Donkey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Donkey.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    surname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    age: jspb.Message.getFieldWithDefault(msg, 4, 0),
    bald: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Donkey}
 */
proto.Donkey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Donkey;
  return proto.Donkey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Donkey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Donkey}
 */
proto.Donkey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurname(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAge(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBald(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Donkey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Donkey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Donkey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Donkey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSurname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAge();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getBald();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.Donkey.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Donkey} returns this
 */
proto.Donkey.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.Donkey.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Donkey} returns this
 */
proto.Donkey.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string surname = 3;
 * @return {string}
 */
proto.Donkey.prototype.getSurname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Donkey} returns this
 */
proto.Donkey.prototype.setSurname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 age = 4;
 * @return {number}
 */
proto.Donkey.prototype.getAge = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Donkey} returns this
 */
proto.Donkey.prototype.setAge = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool bald = 5;
 * @return {boolean}
 */
proto.Donkey.prototype.getBald = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Donkey} returns this
 */
proto.Donkey.prototype.setBald = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Donkeys.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Donkeys.prototype.toObject = function(opt_includeInstance) {
  return proto.Donkeys.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Donkeys} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Donkeys.toObject = function(includeInstance, msg) {
  var f, obj = {
    donkeysList: jspb.Message.toObjectList(msg.getDonkeysList(),
    proto.Donkey.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Donkeys}
 */
proto.Donkeys.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Donkeys;
  return proto.Donkeys.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Donkeys} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Donkeys}
 */
proto.Donkeys.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Donkey;
      reader.readMessage(value,proto.Donkey.deserializeBinaryFromReader);
      msg.addDonkeys(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Donkeys.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Donkeys.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Donkeys} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Donkeys.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDonkeysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Donkey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Donkey donkeys = 1;
 * @return {!Array<!proto.Donkey>}
 */
proto.Donkeys.prototype.getDonkeysList = function() {
  return /** @type{!Array<!proto.Donkey>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Donkey, 1));
};


/**
 * @param {!Array<!proto.Donkey>} value
 * @return {!proto.Donkeys} returns this
*/
proto.Donkeys.prototype.setDonkeysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Donkey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Donkey}
 */
proto.Donkeys.prototype.addDonkeys = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Donkey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Donkeys} returns this
 */
proto.Donkeys.prototype.clearDonkeysList = function() {
  return this.setDonkeysList([]);
};


goog.object.extend(exports, proto);
