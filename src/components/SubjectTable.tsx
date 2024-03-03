import React, { useState, useEffect } from 'react';
import { Flex, Select, TextInput, RangeSlider, Menu, Button, Container } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

import SubjectCard, { SubjectCardProps } from './SubjectCard';

import '@mantine/dates/styles.css';

import { AiOutlineFilter } from 'react-icons/ai';

interface Props {
  data: SubjectCardProps[];
}

export default function SubjectTable({ data }: Props) {
  const [filteredData, setFilteredData] = useState(data);

  const [maxAge, setMaxAge] = useState<number>(100);

  const [name, setName] = useState<string | null>('');
  const [age, setAge] = useState<[number, number]>([0, maxAge]);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [gender, setGender] = useState<string | null>('All');
  const [status, setStatus] = useState<string | null>('All');

  useEffect(() => {
    const maxAge = data.reduce((acc, item) => (item.age > acc ? item.age : acc), 0);
    setMaxAge(maxAge);
  }, [data]);

  useEffect(() => {
    let filtered = data;

    if (name && name !== '') {
      filtered = filtered.filter((item) => {
        if (item.name.toLowerCase().includes(name.toLowerCase())) {
          return item;
        }
      });
    }

    if (age[0] && age[1]) {
      filtered = filtered.filter((item) => {
        if (item.age >= age[0] && item.age <= age[1]) {
          return item;
        }
      });
    }

    if (dateRange[0] && dateRange[1]) {
      filtered = filtered.filter((item) => {
        const diagnosisDate = new Date(item.diagnosisDate);
        if (dateRange[0] && dateRange[1] && diagnosisDate >= dateRange[0] && diagnosisDate <= dateRange[1]) {
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
  }, [data, name, age, dateRange, status, gender]);

  return (
    <Container mih={'100vh'} pt="lg">
      <Flex justify="center" align="center" pb="sm" wrap="wrap">
        <TextInput
          style={{ width: 300 }}
          placeholder="Search by name"
          onChange={(event) => setName(event.currentTarget.value)}
        />
        <Menu closeOnItemClick={false}>
          <Menu.Target>
            <Button leftSection={<AiOutlineFilter size={20} />} variant="light">
              Filter
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>Age</Menu.Label>
            <Menu.Item>
              <RangeSlider
                defaultValue={[1, maxAge]}
                min={1}
                max={maxAge}
                step={1}
                onChange={(value) => {
                  setAge(value);
                }}
              />
            </Menu.Item>
            <Menu.Item>
              <Menu.Label>Diagnosis Date</Menu.Label>
              <DatePicker type="range" value={dateRange} onChange={setDateRange} />
            </Menu.Item>
            <Menu.Item>
              <Menu.Label>Gender</Menu.Label>
              <Select
                data={['All', 'Male', 'Female']}
                allowDeselect={false}
                defaultValue="All"
                value={gender}
                onChange={(value) => {
                  setGender(value);
                }}
              />
            </Menu.Item>
            <Menu.Item>
              <Menu.Label>Status</Menu.Label>
              <Select
                data={['All', 'Active', 'Inactive']}
                allowDeselect={false}
                defaultValue="All"
                value={status}
                onChange={(value) => {
                  setStatus(value);
                }}
              />
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Flex>

      <Flex gap="xs" justify="center" align="flex-start" wrap="wrap">
        {filteredData.map((item: SubjectCardProps) => (
          <SubjectCard key={item.id} {...item} />
        ))}
      </Flex>
    </Container>
  );
}
