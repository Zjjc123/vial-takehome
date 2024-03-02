import React, { useState, useEffect } from 'react';
import { Grid, Select, TextInput } from '@mantine/core';

import SubjectCard, { SubjectCardProps } from './SubjectCard';

interface Props {
  data: SubjectCardProps[];
}

export default function SubjectTable({ data }: Props) {
  const [filteredData, setFilteredData] = useState(data);

  const [name, setName] = useState<string | null>('');
  const [gender, setGender] = useState<string | null>('All');
  const [status, setStatus] = useState<string | null>('All');

  useEffect(() => {
    let filtered = data;

    if (name && name !== '') {
      filtered = filtered.filter((item) => {
        if (item.name.toLowerCase().includes(name.toLowerCase())) {
          return item;
        }
      });
    }

    if (status !== 'All') {
      filtered = filtered.filter((item) => {
        if (item.status === status) {
          return item;
        }
      });
    }

    if (gender !== 'All') {
      filtered = filtered.filter((item) => {
        if (item.gender === gender) {
          return item;
        }
      });
    }

    setFilteredData(filtered);
  }, [data, name, gender, status]);

  return (
    <>
      <TextInput placeholder="Search by name" onChange={(event) => setName(event.currentTarget.value)} />
      <Select
        data={['All', 'Male', 'Female']}
        allowDeselect={false}
        defaultValue="All"
        onChange={(value) => {
          setGender(value);
        }}
      />
      <Select
        data={['All', 'Active', 'Inactive']}
        allowDeselect={false}
        defaultValue="All"
        onChange={(value) => {
          setStatus(value);
        }}
      />
      <Grid gutter="lg">
        {filteredData.map((item: SubjectCardProps) => (
          <Grid.Col span={4} key={item.id}>
            <SubjectCard key={item.id} {...item} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
}
