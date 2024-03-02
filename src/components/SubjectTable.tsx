import React from "react";
import { Grid } from "@mantine/core";

import SubjectCard, { SubjectCardProps } from "./SubjectCard";

interface Props {
  data: SubjectCardProps[];
}

export default function SubjectTable({ data }: Props) {
  return (
    <Grid gutter="lg">
      {data.map((item: SubjectCardProps) => (
        <Grid.Col span={4} key={item.id}>
          <SubjectCard key={item.id} {...item} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
