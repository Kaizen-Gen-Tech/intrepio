"use client";

import { type ColumnDef } from "@tanstack/react-table";

import { ColumnHeader } from "~/components/ui/data-table/column-header";

import type { getData } from "./actions";

export const columns: ColumnDef<Awaited<ReturnType<typeof getData>>[number]>[] =
  [
    {
      id: "ID",
      accessorKey: "id",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.id}</span>
      ),
      enableHiding: false,
    },
    {
      id: "Encounter ID",
      accessorKey: "encounter_id",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.encounter_id}</span>
      ),
    },
    {
      id: "Patient Number",
      accessorKey: "patient_nbr",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.patient_nbr}</span>
      ),
    },
    {
      id: "Race",
      accessorKey: "race",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.race}</span>
      ),
      filterFn: (row, id, value) => {
        return (value as string).includes(row.original.race ?? "");
      },
    },
    {
      id: "Gender",
      accessorKey: "gender",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.gender}</span>
      ),
    },
    {
      id: "Age",
      accessorKey: "age",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.age}</span>
      ),
    },
    {
      id: "Weight",
      accessorKey: "weight",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.weight}</span>
      ),
    },
    {
      id: "Admission Type",
      accessorFn: (row) =>
        `[${row.admission_type.id}] ${row.admission_type.name}`,
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">
          [{row.original.admission_type.id}] {row.original.admission_type.name}
        </span>
      ),
    },
    {
      id: "Discharge Disposition",
      accessorFn: (row) =>
        `[${row.discharge_disposition.id}] ${row.discharge_disposition.name}`,
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">
          [{row.original.discharge_disposition.id}]{" "}
          {row.original.discharge_disposition.name}
        </span>
      ),
    },
    {
      id: "Admission Source",
      accessorFn: (row) =>
        `[${row.admission_source.id}] ${row.admission_source.name}`,
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">
          [{row.original.admission_source.id}]{" "}
          {row.original.admission_source.name}
        </span>
      ),
    },
    {
      id: "Days in Hospital",
      accessorKey: "time_in_hospital",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.time_in_hospital}</span>
      ),
    },
    {
      id: "Payer Code",
      accessorKey: "payer_code",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.payer_code}</span>
      ),
    },
    {
      id: "Medical Specialty",
      accessorKey: "medical_specialty",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">
          {row.original.medical_specialty}
        </span>
      ),
    },
    {
      id: "Lab Procedures",
      accessorKey: "num_lab_procedures",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">
          {row.original.num_lab_procedures}
        </span>
      ),
    },
    {
      id: "Procedures",
      accessorKey: "num_procedures",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.num_procedures}</span>
      ),
    },
    {
      id: "Medications",
      accessorKey: "num_medications",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.num_medications}</span>
      ),
    },
    {
      id: "Outpatient Visits",
      accessorKey: "number_outpatient",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">
          {row.original.number_outpatient}
        </span>
      ),
    },
    {
      id: "Emergency Visits",
      accessorKey: "number_emergency",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.number_emergency}</span>
      ),
    },
    {
      id: "Inpatient Visits",
      accessorKey: "number_inpatient",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.number_inpatient}</span>
      ),
    },
    {
      id: "Diagnosis 1",
      accessorKey: "diag_1",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.diag_1}</span>
      ),
    },
    {
      id: "Diagnosis 2",
      accessorKey: "diag_2",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.diag_2}</span>
      ),
    },
    {
      id: "Diagnosis 3",
      accessorKey: "diag_3",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.diag_3}</span>
      ),
    },
    {
      id: "Number of Diagnoses",
      accessorKey: "number_diagnoses",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.number_diagnoses}</span>
      ),
    },
    {
      id: "Glucose Serum Test",
      accessorKey: "max_glu_serum",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.max_glu_serum}</span>
      ),
    },
    {
      id: "A1C Test",
      accessorKey: "A1Cresult",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.A1Cresult}</span>
      ),
    },
    {
      id: "Metformin",
      accessorKey: "metformin",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.metformin}</span>
      ),
    },
    {
      id: "Repaglinide",
      accessorKey: "repaglinide",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.repaglinide}</span>
      ),
    },
    {
      id: "Nateglinide",
      accessorKey: "nateglinide",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.nateglinide}</span>
      ),
    },
    {
      id: "Chlorpropamide",
      accessorKey: "chlorpropamide",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.chlorpropamide}</span>
      ),
    },
    {
      id: "Glimepiride",
      accessorKey: "glimepiride",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.glimepiride}</span>
      ),
    },
    {
      id: "Acetohexamide",
      accessorKey: "acetohexamide",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.acetohexamide}</span>
      ),
    },
    {
      id: "Glipizide",
      accessorKey: "glipizide",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.glipizide}</span>
      ),
    },
    {
      id: "Glyburide",
      accessorKey: "glyburide",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.glyburide}</span>
      ),
    },
    {
      id: "Tolbutamide",
      accessorKey: "tolbutamide",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.tolbutamide}</span>
      ),
    },
    {
      id: "Pioglitazone",
      accessorKey: "pioglitazone",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.pioglitazone}</span>
      ),
    },
    {
      id: "Rosiglitazone",
      accessorKey: "rosiglitazone",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.rosiglitazone}</span>
      ),
    },
    {
      id: "Acarbose",
      accessorKey: "acarbose",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.acarbose}</span>
      ),
    },
    {
      id: "Miglitol",
      accessorKey: "miglitol",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.miglitol}</span>
      ),
    },
    {
      id: "Troglitazone",
      accessorKey: "troglitazone",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.troglitazone}</span>
      ),
    },
    {
      id: "Tolazamide",
      accessorKey: "tolazamide",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.tolazamide}</span>
      ),
    },
    {
      id: "Examide",
      accessorKey: "examide",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.examide}</span>
      ),
    },
    {
      id: "Citoglipton",
      accessorKey: "citoglipton",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.citoglipton}</span>
      ),
    },
    {
      id: "Insulin",
      accessorKey: "insulin",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">{row.original.insulin}</span>
      ),
    },
    {
      id: "Glyburide-Metformin",
      accessorKey: "glyburide_metformin",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">
          {row.original.glyburide_metformin}
        </span>
      ),
    },
    {
      id: "Glipizide-Metformin",
      accessorKey: "glipizide_metformin",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">
          {row.original.glipizide_metformin}
        </span>
      ),
    },
    {
      id: "Glimepiride-Pioglitazone",
      accessorKey: "glimepiride_pioglitazone",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">
          {row.original.glimepiride_pioglitazone}
        </span>
      ),
    },
    {
      id: "Metformin-Rosiglitazone",
      accessorKey: "metformin_rosiglitazone",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">
          {row.original.metformin_rosiglitazone}
        </span>
      ),
    },
    {
      id: "Metformin-Pioglitazone",
      accessorKey: "metformin_pioglitazone",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">
          {row.original.metformin_pioglitazone}
        </span>
      ),
    },
    {
      id: "Change",
      accessorKey: "change",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">
          {row.original.change ? "Yes" : "No"}
        </span>
      ),
    },
    {
      id: "Diabetes Med",
      accessorKey: "diabetesMed",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2">
          {row.original.diabetesMed ? "Yes" : "No"}
        </span>
      ),
    },
    {
      id: "Readmitted",
      accessorKey: "readmitted",
      header: ({ column }) => <ColumnHeader column={column} />,
      cell: ({ row }) => (
        <span className="text-nowrap p-2 capitalize">
          {row.original.readmitted.toLowerCase()}
        </span>
      ),
    },
  ];
