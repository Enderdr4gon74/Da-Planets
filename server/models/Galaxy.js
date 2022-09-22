import mongoose from "mongoose"

const schema = mongoose.Schema
const objectId = mongoose.Types.ObjectId


// TODO implement controllers and services
export const GalaxySchema = new schema({
  starId: {type: [objectId], ref: "Star", required: true},
  type: {type: String, required: true, enum: ["elliptical", "spiral", "barred spiral", "irregular"]}
}, {
  timestamps: true, toJSON: {virtuals: true}
})

GalaxySchema.virtual('star', {
  localField: "starId",
  foreignField: "_id",
  justOne: false,
  ref: 'Star'
})