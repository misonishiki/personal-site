// The single source of truth for jargon definitions. The /glossary page renders
// from this list, and the cat tooltip (src/components/GlossaryCat.astro) reads
// the same data, so a definition lives in exactly one place.
export const GLOSSARY = [
  { term: 'Biogenic carbon', def: 'Carbon stored in bio-based materials like wood. Uptake and release must balance across the life cycle, and EPDs track it separately.' },
  { term: 'DQA', def: 'Data Quality Assessment: scoring how well the data fits the product in time, geography, and technology.' },
  { term: 'EN 15804', def: 'The European standard that defines the rules for construction-product EPDs: which modules to report and how to calculate them.' },
  { term: 'EoL', def: 'End of life: the life-cycle stage covering demolition, transport to waste handling, recycling, incineration, landfill, and Module D.' },
  { term: 'EPD', def: 'Environmental Product Declaration: a standardised, third-party-verified report of a product\'s environmental footprint across its life cycle.' },
  { term: 'FDES', def: 'Fiche de Déclaration Environnementale et Sanitaire: the French flavour of an EPD, published via INIES, with extra health information.' },
  { term: 'LCA', def: 'Life Cycle Assessment: accounting a product\'s environmental impacts from raw material extraction to end of life.' },
  { term: 'LCI', def: 'Life Cycle Inventory: the list of all inputs and outputs (energy, materials, emissions) of a product system. The data layer under an LCA.' },
  { term: 'Module D', def: 'The EN 15804 module reporting benefits and loads beyond the product\'s end of life, for example energy recovery or materials recycled.' },
  { term: 'PCR', def: 'Product Category Rules: the product-specific rulebook inside an EPD programme, so two EPDs for the same kind of product are comparable.' },
  { term: 'Programme operator', def: 'The organisation running an EPD programme: it sets the rules, manages verification, and publishes declarations. Examples: EPD International, EPD Global, INIES.' },
  { term: 'Verifier', def: 'The independent third party who checks an EPD against the standard and the programme rules before publication.' },
  { term: 'Canonical material', def:'Made-up term: the abstracted material that is used for end-of-life modelling, mostly due to dataset limitations, insignificant differences, or grouping efficiency' },
  { term: 'Parameters', def:'Additional indicators calculated to inform environmental impacts that is not captured by the dataset itself or unique to the modelling. i.e. Secondary material (kg/kg), Material for reuse (kg/kg), (Non-)renewable primary energy embedded in material (MJ/kg).'}
];
