import { relations } from "drizzle-orm";
import {
  boolean,
  char,
  integer,
  pgEnum,
  pgTable,
  serial,
  smallint,
  smallserial,
  text,
  uuid,
} from "drizzle-orm/pg-core";

// #region Enums
export const normalize_vals = [
  "Off",
  "Configuration 1",
  "Configuration 2",
  "Configuration 3",
] as const;
export type Normalize = (typeof normalize_vals)[number];
export const normalize_enum = pgEnum("normalize", normalize_vals);
export const upload_status_vals = ["Processing", "Done", "Error"] as const;
export type UploadStatus = (typeof upload_status_vals)[number];
export const upload_status_enum = pgEnum("upload_status", upload_status_vals);
export const race_enum = pgEnum("race", [
  "AfricanAmerican",
  "Asian",
  "Caucasian",
  "Hispanic",
  "Other",
]);
export const gender_enum = pgEnum("gender", [
  "Male",
  "Female",
  "Unknown/Invalid",
]);
export const age_enum = pgEnum("age", [
  "[0-10)",
  "[10-20)",
  "[20-30)",
  "[30-40)",
  "[40-50)",
  "[50-60)",
  "[60-70)",
  "[70-80)",
  "[80-90)",
  "[90-100)",
]);
export const weight_enum = pgEnum("weight", [
  "[0-25)",
  "[25-50)",
  "[50-75)",
  "[75-100)",
  "[100-125)",
  "[125-150)",
  "[150-175)",
  "[175-200)",
  ">200",
]);
export const max_glu_serum_enum = pgEnum("max_glu_serum", [
  ">200",
  ">300",
  "None",
  "Norm",
]);
export const A1Cresult_enum = pgEnum("A1Cresult", [">7", ">8", "None", "Norm"]);
export const drug_enum = pgEnum("drug", ["Up", "Steady", "Down", "No"]);
export const readmitted_enum = pgEnum("readmitted", ["<30", ">30", "NO"]);
// #endregion

// #region Category tables
export const admission_types = pgTable("admission_type", {
  id: smallserial("id").primaryKey(),
  name: text("name").notNull(),
});
export const discharge_dispositions = pgTable("discharge_disposition", {
  id: smallserial("id").primaryKey(),
  name: text("name").notNull(),
});
export const admission_sources = pgTable("admission_source", {
  id: smallserial("id").primaryKey(),
  name: text("name").notNull(),
});
// #endregion

// #region Data tables
export const files = pgTable("file", {
  id: uuid("id").primaryKey(),
  upscale: boolean("upscale").notNull(),
  normalize: normalize_enum("normalize").notNull(),
  status: upload_status_enum("status").notNull(),
});
export const encounters = pgTable("encounter", {
  id: serial("id").primaryKey(),
  encounter_id: integer("encounter_id").notNull(),
  patient_nbr: integer("patient_nbr").notNull(),
  race: race_enum("race"),
  gender: gender_enum("gender"),
  age: age_enum("age").notNull(),
  weight: weight_enum("weight"),
  admission_type_id: smallint("admission_type_id")
    .notNull()
    .references(() => admission_types.id),
  discharge_disposition_id: smallint("discharge_disposition_id")
    .notNull()
    .references(() => discharge_dispositions.id),
  admission_source_id: smallint("admission_source_id")
    .notNull()
    .references(() => admission_sources.id),
  time_in_hospital: integer("time_in_hospital").notNull(),
  payer_code: char("payer_code", { length: 2 }),
  medical_specialty: text("medical_specialty"),
  num_lab_procedures: smallint("num_lab_procedures").notNull(),
  num_procedures: smallint("num_procedures").notNull(),
  num_medications: smallint("num_medications").notNull(),
  number_outpatient: smallint("number_outpatient").notNull(),
  number_emergency: smallint("number_emergency").notNull(),
  number_inpatient: smallint("number_inpatient").notNull(),
  diag_1: text("diag_1"),
  diag_2: text("diag_2"),
  diag_3: text("diag_3"),
  number_diagnoses: smallint("number_diagnoses").notNull(),
  max_glu_serum: max_glu_serum_enum("max_glu_serum").notNull(),
  A1Cresult: A1Cresult_enum("A1Cresult").notNull(),
  metformin: drug_enum("metformin").notNull(),
  repaglinide: drug_enum("repaglinide").notNull(),
  nateglinide: drug_enum("nateglinide").notNull(),
  chlorpropamide: drug_enum("chlorpropamide").notNull(),
  glimepiride: drug_enum("glimepiride").notNull(),
  acetohexamide: drug_enum("acetohexamide").notNull(),
  glipizide: drug_enum("glipizide").notNull(),
  glyburide: drug_enum("glyburide").notNull(),
  tolbutamide: drug_enum("tolbutamide").notNull(),
  pioglitazone: drug_enum("pioglitazone").notNull(),
  rosiglitazone: drug_enum("rosiglitazone").notNull(),
  acarbose: drug_enum("acarbose").notNull(),
  miglitol: drug_enum("miglitol").notNull(),
  troglitazone: drug_enum("troglitazone").notNull(),
  tolazamide: drug_enum("tolazamide").notNull(),
  examide: drug_enum("examide").notNull(),
  citoglipton: drug_enum("citoglipton").notNull(),
  insulin: drug_enum("insulin").notNull(),
  glyburide_metformin: drug_enum("glyburide-metformin").notNull(),
  glipizide_metformin: drug_enum("glipizide-metformin").notNull(),
  glimepiride_pioglitazone: drug_enum("glimepiride-pioglitazone").notNull(),
  metformin_rosiglitazone: drug_enum("metformin-rosiglitazone").notNull(),
  metformin_pioglitazone: drug_enum("metformin-pioglitazone").notNull(),
  change: boolean("change").notNull(),
  diabetesMed: boolean("diabetesMed").notNull(),
  readmitted: readmitted_enum("readmitted").notNull(),
});
export const encounterRelations = relations(encounters, ({ one }) => ({
  admission_type: one(admission_types, {
    fields: [encounters.admission_type_id],
    references: [admission_types.id],
  }),
  discharge_disposition: one(discharge_dispositions, {
    fields: [encounters.discharge_disposition_id],
    references: [discharge_dispositions.id],
  }),
  admission_source: one(admission_sources, {
    fields: [encounters.admission_source_id],
    references: [admission_sources.id],
  }),
}));
// #endregion
