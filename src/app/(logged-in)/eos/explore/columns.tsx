"use client";

import { type ColumnDef } from "@tanstack/react-table";

import { cn } from "~/lib/utils";
import { Header, Cell } from "~/components/ui/data-table";

import type { getData } from "./actions";

export const columns: ColumnDef<Awaited<ReturnType<typeof getData>>[number]>[] =
  [
    {
      id: "ID",
      accessorKey: "id",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.id}
        </Cell>
      ),
      enableHiding: false,
    },
    {
      id: "Encounter ID",
      accessorKey: "encounter_id",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.encounter_id}
        </Cell>
      ),
    },
    {
      id: "Patient Number",
      accessorKey: "patient_nbr",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.patient_nbr}
        </Cell>
      ),
    },
    {
      id: "Race",
      accessorKey: "race",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.race ?? <>&nbsp;</>}
        </Cell>
      ),
      filterFn: (row, id, value) => {
        return (value as string).includes(row.original.race ?? "");
      },
    },
    {
      id: "Gender",
      accessorKey: "gender",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.gender ?? <>&nbsp;</>}
        </Cell>
      ),
    },
    {
      id: "Age",
      accessorKey: "age",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.age}
        </Cell>
      ),
    },
    {
      id: "Weight",
      accessorKey: "weight",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.weight ?? <>&nbsp;</>}
        </Cell>
      ),
    },
    {
      id: "Admission Type",
      accessorFn: (row) =>
        `[${row.admission_type.id}] ${row.admission_type.name}`,
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          [{row.original.admission_type.id}] {row.original.admission_type.name}
        </Cell>
      ),
    },
    {
      id: "Discharge Disposition",
      accessorFn: (row) =>
        `[${row.discharge_disposition.id}] ${row.discharge_disposition.name}`,
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          [{row.original.discharge_disposition.id}]{" "}
          {row.original.discharge_disposition.name}
        </Cell>
      ),
    },
    {
      id: "Admission Source",
      accessorFn: (row) =>
        `[${row.admission_source.id}] ${row.admission_source.name}`,
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          [{row.original.admission_source.id}]{" "}
          {row.original.admission_source.name}
        </Cell>
      ),
    },
    {
      id: "Days in Hospital",
      accessorKey: "time_in_hospital",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.time_in_hospital}
        </Cell>
      ),
    },
    {
      id: "Payer Code",
      accessorKey: "payer_code",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.payer_code ?? <>&nbsp;</>}
        </Cell>
      ),
    },
    {
      id: "Medical Specialty",
      accessorKey: "medical_specialty",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.medical_specialty ?? <>&nbsp;</>}
        </Cell>
      ),
    },
    {
      id: "Lab Procedures",
      accessorKey: "num_lab_procedures",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.num_lab_procedures}
        </Cell>
      ),
    },
    {
      id: "Procedures",
      accessorKey: "num_procedures",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.num_procedures}
        </Cell>
      ),
    },
    {
      id: "Medications",
      accessorKey: "num_medications",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.num_medications}
        </Cell>
      ),
    },
    {
      id: "Outpatient Visits",
      accessorKey: "number_outpatient",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.number_outpatient}
        </Cell>
      ),
    },
    {
      id: "Emergency Visits",
      accessorKey: "number_emergency",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.number_emergency}
        </Cell>
      ),
    },
    {
      id: "Inpatient Visits",
      accessorKey: "number_inpatient",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.number_inpatient}
        </Cell>
      ),
    },
    {
      id: "Diagnosis 1",
      accessorKey: "diag_1",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.diag_1 ?? <>&nbsp;</>}
        </Cell>
      ),
    },
    {
      id: "Diagnosis 2",
      accessorKey: "diag_2",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.diag_2 ?? <>&nbsp;</>}
        </Cell>
      ),
    },
    {
      id: "Diagnosis 3",
      accessorKey: "diag_3",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.diag_3 ?? <>&nbsp;</>}
        </Cell>
      ),
    },
    {
      id: "Number of Diagnoses",
      accessorKey: "number_diagnoses",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.number_diagnoses}
        </Cell>
      ),
    },
    {
      id: "Glucose Serum Test",
      accessorKey: "max_glu_serum",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.max_glu_serum}
        </Cell>
      ),
    },
    {
      id: "A1C Test",
      accessorKey: "A1Cresult",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.A1Cresult}
        </Cell>
      ),
    },
    {
      id: "Metformin",
      accessorKey: "metformin",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.metformin}
        </Cell>
      ),
    },
    {
      id: "Repaglinide",
      accessorKey: "repaglinide",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.repaglinide}
        </Cell>
      ),
    },
    {
      id: "Nateglinide",
      accessorKey: "nateglinide",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.nateglinide}
        </Cell>
      ),
    },
    {
      id: "Chlorpropamide",
      accessorKey: "chlorpropamide",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.chlorpropamide}
        </Cell>
      ),
    },
    {
      id: "Glimepiride",
      accessorKey: "glimepiride",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.glimepiride}
        </Cell>
      ),
    },
    {
      id: "Acetohexamide",
      accessorKey: "acetohexamide",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.acetohexamide}
        </Cell>
      ),
    },
    {
      id: "Glipizide",
      accessorKey: "glipizide",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.glipizide}
        </Cell>
      ),
    },
    {
      id: "Glyburide",
      accessorKey: "glyburide",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.glyburide}
        </Cell>
      ),
    },
    {
      id: "Tolbutamide",
      accessorKey: "tolbutamide",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.tolbutamide}
        </Cell>
      ),
    },
    {
      id: "Pioglitazone",
      accessorKey: "pioglitazone",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.pioglitazone}
        </Cell>
      ),
    },
    {
      id: "Rosiglitazone",
      accessorKey: "rosiglitazone",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.rosiglitazone}
        </Cell>
      ),
    },
    {
      id: "Acarbose",
      accessorKey: "acarbose",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.acarbose}
        </Cell>
      ),
    },
    {
      id: "Miglitol",
      accessorKey: "miglitol",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.miglitol}
        </Cell>
      ),
    },
    {
      id: "Troglitazone",
      accessorKey: "troglitazone",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.troglitazone}
        </Cell>
      ),
    },
    {
      id: "Tolazamide",
      accessorKey: "tolazamide",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.tolazamide}
        </Cell>
      ),
    },
    {
      id: "Examide",
      accessorKey: "examide",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.examide}
        </Cell>
      ),
    },
    {
      id: "Citoglipton",
      accessorKey: "citoglipton",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.citoglipton}
        </Cell>
      ),
    },
    {
      id: "Insulin",
      accessorKey: "insulin",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.insulin}
        </Cell>
      ),
    },
    {
      id: "Glyburide-Metformin",
      accessorKey: "glyburide_metformin",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.glyburide_metformin}
        </Cell>
      ),
    },
    {
      id: "Glipizide-Metformin",
      accessorKey: "glipizide_metformin",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.glipizide_metformin}
        </Cell>
      ),
    },
    {
      id: "Glimepiride-Pioglitazone",
      accessorKey: "glimepiride_pioglitazone",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.glimepiride_pioglitazone}
        </Cell>
      ),
    },
    {
      id: "Metformin-Rosiglitazone",
      accessorKey: "metformin_rosiglitazone",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.metformin_rosiglitazone}
        </Cell>
      ),
    },
    {
      id: "Metformin-Pioglitazone",
      accessorKey: "metformin_pioglitazone",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.metformin_pioglitazone}
        </Cell>
      ),
    },
    {
      id: "Change",
      accessorKey: "change",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.change ? "Yes" : "No"}
        </Cell>
      ),
    },
    {
      id: "Diabetes Med",
      accessorKey: "diabetesMed",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
          )}
        >
          {row.original.diabetesMed ? "Yes" : "No"}
        </Cell>
      ),
    },
    {
      id: "Readmitted",
      accessorKey: "readmitted",
      header: ({ column }) => <Header column={column} />,
      cell: ({ row, getValue }) => (
        <Cell
          className={cn(
            (row.original.synthetic ||
              (getValue() !== null && Math.random() < 1 / 50)) &&
              "bg-accent-3 text-accent-11",
            "capitalize",
          )}
        >
          {row.original.readmitted.toLowerCase()}
        </Cell>
      ),
    },
  ];
