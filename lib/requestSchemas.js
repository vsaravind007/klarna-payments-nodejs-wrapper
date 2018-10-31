module.exports.newSessionSchema = {
  "definitions": {},
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://example.com/root.json",
  "type": "object",
  "title": "The Root Schema",
  "required": [
    "purchase_country",
    "purchase_currency",
    "order_amount",
    "order_tax_amount",
    "order_lines"
  ],
  "properties": {
    "purchase_country": {
      "$id": "#/properties/purchase_country",
      "type": "string",
      "title": "The Purchase_country Schema",
      "default": "",
      "examples": [
        "SE"
      ],
      "pattern": "^(.*)$"
    },
    "purchase_currency": {
      "$id": "#/properties/purchase_currency",
      "type": "string",
      "title": "The Purchase_currency Schema",
      "default": "",
      "examples": [
        "SEK"
      ],
      "pattern": "^(.*)$"
    },
    "order_amount": {
      "$id": "#/properties/order_amount",
      "type": "integer",
      "title": "The Order_amount Schema",
      "default": 0,
      "examples": [
        10
      ]
    },
    "order_tax_amount": {
      "$id": "#/properties/order_tax_amount",
      "type": "integer",
      "title": "The Order_tax_amount Schema",
      "default": 0,
      "examples": [
        0
      ]
    },
    "order_lines": {
      "$id": "#/properties/order_lines",
      "type": "array",
      "title": "The Order_lines Schema",
      "items": {
        "$id": "#/properties/order_lines/items",
        "type": "object",
        "title": "The Items Schema",
        "required": [
          "type",
          "reference",
          "name",
          "quantity",
          "unit_price",
          "tax_rate",
          "total_amount",
          "total_discount_amount",
          "total_tax_amount"
        ],
        "properties": {
          "type": {
            "$id": "#/properties/order_lines/items/properties/type",
            "type": "string",
            "title": "The Type Schema",
            "default": "",
            "examples": [
              "physical"
            ],
            "pattern": "^(.*)$"
          },
          "reference": {
            "$id": "#/properties/order_lines/items/properties/reference",
            "type": "string",
            "title": "The Reference Schema",
            "default": "",
            "examples": [
              "19-402"
            ],
            "pattern": "^(.*)$"
          },
          "name": {
            "$id": "#/properties/order_lines/items/properties/name",
            "type": "string",
            "title": "The Name Schema",
            "default": "",
            "examples": [
              "Battery Power Pack"
            ],
            "pattern": "^(.*)$"
          },
          "quantity": {
            "$id": "#/properties/order_lines/items/properties/quantity",
            "type": "integer",
            "title": "The Quantity Schema",
            "default": 0,
            "examples": [
              1
            ]
          },
          "unit_price": {
            "$id": "#/properties/order_lines/items/properties/unit_price",
            "type": "integer",
            "title": "The Unit_price Schema",
            "default": 0,
            "examples": [
              10
            ]
          },
          "tax_rate": {
            "$id": "#/properties/order_lines/items/properties/tax_rate",
            "type": "integer",
            "title": "The Tax_rate Schema",
            "default": 0,
            "examples": [
              0
            ]
          },
          "total_amount": {
            "$id": "#/properties/order_lines/items/properties/total_amount",
            "type": "integer",
            "title": "The Total_amount Schema",
            "default": 0,
            "examples": [
              10
            ]
          },
          "total_discount_amount": {
            "$id": "#/properties/order_lines/items/properties/total_discount_amount",
            "type": "integer",
            "title": "The Total_discount_amount Schema",
            "default": 0,
            "examples": [
              0
            ]
          },
          "total_tax_amount": {
            "$id": "#/properties/order_lines/items/properties/total_tax_amount",
            "type": "integer",
            "title": "The Total_tax_amount Schema",
            "default": 0,
            "examples": [
              0
            ]
          }
        }
      }
    }
  }
}