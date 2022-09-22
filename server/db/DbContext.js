import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { GalaxySchema } from '../models/Galaxy.js';
import { PlanetSchema } from '../models/Planet.js';
import { StarSchema } from '../models/Star.js';
import { MoonSchema } from '../models/Moon.js';
import { SpeciesSchema } from '../models/Species.js';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Galaxy = mongoose.model('Galaxy', GalaxySchema)

  Star = mongoose.model('Star', StarSchema)

  Planet = mongoose.model('Planet', PlanetSchema)

  Moon = mongoose.model('Moon', MoonSchema)

  Species = mongoose.model('Species', SpeciesSchema)
}

export const dbContext = new DbContext()
