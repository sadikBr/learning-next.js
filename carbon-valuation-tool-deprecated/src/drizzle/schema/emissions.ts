import { index, pgTable, text, uuid } from 'drizzle-orm/pg-core';

export const ScopeTable = pgTable('scope', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
});

export const SectorTable = pgTable(
  'sector',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    name: text('name').notNull(),
    scopeId: uuid('scope_id')
      .notNull()
      .references(() => ScopeTable.id, { onDelete: 'cascade' }),
  },
  (table) => ({
    nameIndex: index('sector_name_index').on(table.name),
  })
);

export const CategoryTable = pgTable('category', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  sectorId: uuid('sector_id')
    .notNull()
    .references(() => SectorTable.id, { onDelete: 'cascade' }),
});

export const ActivityTable = pgTable('activity', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  categoryId: uuid('category_id')
    .notNull()
    .references(() => CategoryTable.id, { onDelete: 'cascade' }),
});

export const SourceTable = pgTable('source', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  sourceLink: text('source_url').notNull(),
});

export const DatasetTable = pgTable('dataset', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  sourceId: uuid('source_id')
    .notNull()
    .references(() => SourceTable.id, { onDelete: 'cascade' }),
});

export const RegionTable = pgTable(
  'region',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    name: text('name').notNull(),
    code: text('code').notNull(),
  },
  (table) => ({
    nameIndex: index('region_name_index').on(table.name),
  })
);

export const UnitTable = pgTable('unit', {
  id: uuid('id').primaryKey().defaultRandom(),
  unitType: text('unit_type').notNull(),
  unit: text('unit').notNull(),
});

export const EmissionFactorTable = pgTable('emission_factor', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  year: text('year').notNull(),
  factorValue: text('factor'),
  co2eTotal: text('co2e_total'),
  co2eOther: text('co2e_other'),
  co2: text('co2'),
  ch4: text('ch4'),
  n2o: text('n2o'),
  activityId: uuid('activity_id')
    .notNull()
    .references(() => ActivityTable.id, { onDelete: 'cascade' }),
  datasetId: uuid('dataset_id')
    .notNull()
    .references(() => DatasetTable.id, { onDelete: 'cascade' }),
  unitId: uuid('unit_id')
    .notNull()
    .references(() => UnitTable.id, { onDelete: 'cascade' }),
  regionId: uuid('region_id')
    .notNull()
    .references(() => RegionTable.id, { onDelete: 'cascade' }),
});
