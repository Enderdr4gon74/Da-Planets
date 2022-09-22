import mongoose from "mongoose"

const schema = mongoose.Schema
const objectId = mongoose.Types.ObjectId


// TODO implement controllers and services
export const PlanetSchema = new schema({
  StarId: {type: objectId, ref: "Star", required: true},
  MoonId: {type: [objectId], ref: "Moon", required: true},
  SpeciesId: {type: [objectId], ref: "Species", required: true},
  size: {type: Number, required: true, min: 0}, // in Miles
  shape: {type: String, required: true, enum: ["ellipse", "sphere"]}, // By sphere or ellipse (oddly shaped sphere)
  mass: {type: Number, required: true, min: 0}, // in KiloGrams
  water: {type: Boolean, required: true}
}, {
  timestamps: true, toJSON: {virtuals: true}
})

PlanetSchema.virtual('Star', {
  localField: "StarId",
  foreignField: "_id",
  justOne: true,
  ref: 'Star'
})

PlanetSchema.virtual('moon', {
  localField: "moonId",
  foreignField: "_id",
  justOne: false,
  ref: 'Moon'
})

PlanetSchema.virtual('species', {
  localField: "speciesId",
  foreignField: "_id",
  justOne: false,
  ref: 'Species'
})