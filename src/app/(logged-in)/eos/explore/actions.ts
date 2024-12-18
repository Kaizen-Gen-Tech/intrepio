"use server";

import { db } from "~/server/db";

export async function getData() {
  return (
    await db.query.encounters.findMany({
      with: {
        admission_type: true,
        discharge_disposition: true,
        admission_source: true,
      },
      limit: 1500,
    })
  ).map((row) => {
    return { ...row, synthetic: Math.random() < 1 / 3 };
  });
}
