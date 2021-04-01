/**
 * @license
 * Copyright 2021 yukiya383
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Override declaration of javascript.d.ts
 */
declare module 'blockly/python' {
  import Blockly from "blockly";
  class PythonImpl extends Blockly.Generator{
    /**
     * Order of operation ENUMs.
     * http://docs.python.org/reference/expressions.html#summary
     */
    ORDER_ATOMIC : 0;            // 0 "" ...
    ORDER_COLLECTION : 1;        // tuples, lists, dictionaries
    ORDER_STRING_CONVERSION : 1; // `expression...`
    ORDER_MEMBER : 2.1;          // . []
    ORDER_FUNCTION_CALL : 2.2;   // ()
    ORDER_EXPONENTIATION : 3;    // **
    ORDER_UNARY_SIGN : 4;        // + -
    ORDER_BITWISE_NOT : 4;       // ~
    ORDER_MULTIPLICATIVE : 5;    // * / // %
    ORDER_ADDITIVE : 6;          // + -
    ORDER_BITWISE_SHIFT : 7;     // << >>
    ORDER_BITWISE_AND : 8;       // &
    ORDER_BITWISE_XOR : 9;       // ^
    ORDER_BITWISE_OR : 10;       // |
    ORDER_RELATIONAL : 11;       // in, not in, is, is not,
                                //     <, <=, >, >=, <>, !=, ==
    ORDER_LOGICAL_NOT : 12;      // not
    ORDER_LOGICAL_AND : 13;      // and
    ORDER_LOGICAL_OR : 14;       // or
    ORDER_CONDITIONAL : 15;      // if else
    ORDER_LAMBDA : 16;           // lambda
    ORDER_NONE : 99;             // (...)
  }
  type Python = PythonImpl & {
    [key:string]:(block:Blockly.Block)=>(string|[string,number]);
  } // This will allow assignment of code generator functions, while keeping access to predefined members.
  var instance: Python;
  export = instance;
}