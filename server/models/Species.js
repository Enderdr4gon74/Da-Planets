import mongoose from "mongoose"

const schema = mongoose.Schema
const objectId = mongoose.Types.ObjectId


// TODO fix object items, implement controllers and services
export const SpeciesSchema = new schema({
  PlanetId: {type: objectId, ref: "Planet", required: true},
  size: {type: Number, required: true, min: 0}, // in Miles
  shape: {type: String, required: true, enum: ["ellipse", "sphere"]}, // By sphere or ellipse (oddly shaped sphere)
  mass: {type: Number, required: true, min: 0}, // in KiloGrams
  water: {type: Boolean, required: true}
}, {
  timestamps: true, toJSON: {virtuals: true}
})

SpeciesSchema.virtual('Planet', {
  localField: "planetId",
  foreignField: "_id",
  justOne: true,
  ref: 'Planet'
})