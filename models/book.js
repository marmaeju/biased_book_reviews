const { Schema } = require('mongoose')

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    review_id: [{ type: Schema.Types.ObjectId, ref: 'review_id' }]
  },
  { timestamps: true }
)

module.exports = bookSchema
