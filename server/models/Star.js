import mongoose from "mongoose"
import { SassColor } from "sass"

const schema = mongoose.Schema
const objectId = mongoose.Types.ObjectId


// TODO implement controllers and services
export const StarSchema = new schema({
  GalaxyId: {type: objectId, ref: "Galaxy", required: true},
  PlanetId: {type: [objectId], ref: "Planet", required: true},
  brightness: {type: Number, required: true}, // in Magnitude
  color: {type: SassColor, required: true}, // in SassColor
  surfaceTemp: {type: Number, required: true}, // in Kelvin
  size: {type: Number, required: true, min: 0}, // in Miles
  mass: {type: Number, required: true, min: 0}, // in KiloGrams
}, {
  timestamps: true, toJSON: {virtuals: true}
})

StarSchema.virtual('galaxy', {
  localField: "galaxyId",
  foreignField: "_id",
  justOne: true,
  ref: 'Galaxy'
})

StarSchema.virtual('planet', {
  localField: "planetId",
  foreignField: "_id",
  justOne: false,
  ref: 'Planet'
})