import { useState, useEffect } from 'react';
import { Flex, Select, TextInput, RangeSlider, Menu, Button } from '@mantine/core';
import { DateInput } from '@mantine/dates';

import { SubjectCardProps } from './SubjectCard';

import '@mantine/dates/styles.css';

import { AiOutlineFilter, AiOutlineSortAscending } from 'react-icons/ai';

interface Props {
  data: SubjectCardProps[];
  filteredData: SubjectCardProps[];
  setFilteredData: (data: SubjectCardProps[]) => void;
}

export default function Toolbar({ data, filteredData, setFilteredData }: Props) {
  const [maxAge, setMaxAge] = useState<number>(100);

  const [name, setName] = useState<string | null>('');
  const [age, setAge] = useState<[number, number]>([0, maxAge]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [gender, setGender] = useState<string | null>('All');
  const [status, setStatus] = useState<string | null>('All');

  const [onCalendar, setOnCalendar] = useState(false);

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

    if (startDate && endDate) {
      filtered = filtered.filter((item) => {
        if (new Date(item.diagnosisDate) >= startDate && new Date(item.diagnosisDate) <= endDate) {
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
  }, [data, name, age, startDate, endDate, status, gender, setFilteredData]);

  const sortByName = () => {
    const sorted = [...filteredData].sort((a, b) => a.name.localeCompare(b.name));
    setFilteredData(sorted);
  };

  const sortByAge = () => {
    const sorted = [...filteredData].sort((a, b) => a.age - b.age);
    setFilteredData(sorted);
  };

  const sortByDiagnosisDate = () => {
    const sorted = [...filteredData].sort(
      (a, b) => new Date(a.diagnosisDate).getTime() - new Date(b.diagnosisDate).getTime(),
    );
    setFilteredData(sorted);
  };

  const exportFilteredDataJson = () => {
    const dataStr = JSON.stringify(filteredData);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    const exportFileDefaultName = 'data.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <Flex justify="center" align="center" mt="xl" pt="lg" wrap="wrap">
      <TextInput
        style={{ width: 300 }}
        placeholder="Search by name"
        onChange={(event) => setName(event.currentTarget.value)}
      />
      <Menu closeOnItemClick={false} closeOnClickOutside={!onCalendar}>
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
              value={age}
              onChange={(value) => {
                setAge(value);
              }}
            />
          </Menu.Item>
          <Menu.Label>Gender</Menu.Label>
          <Menu.Item>
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
          <Menu.Label>Status</Menu.Label>
          <Menu.Item>
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
          <Menu.Divider />
          <Menu.Label>Diagnosis Date</Menu.Label>
          <Menu.Item closeMenuOnClick={false}>
            <DateInput
              onClick={() => setOnCalendar(true)}
              clearable
              placeholder="Select start date"
              value={startDate}
              onChange={(value) => {
                setStartDate(value);
                setOnCalendar(false);
              }}
            />
            <Menu.Label>to</Menu.Label>
            <DateInput
              onClick={() => setOnCalendar(true)}
              clearable
              placeholder="Select end date"
              value={endDate}
              onChange={(value) => {
                setEndDate(value);
                setOnCalendar(false);
              }}
            />
          </Menu.Item>
        </Menu.Dropdown>
        <Menu>
          <Menu.Target>
            <Button leftSection={<AiOutlineSortAscending size={20} />} variant="light">
              Sort
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item onClick={() => sortByName()}>Sort by Name</Menu.Item>
            <Menu.Item onClick={() => sortByAge()}>Sort by Age</Menu.Item>
            <Menu.Item onClick={() => sortByDiagnosisDate()}>Sort by Diagnosis Date</Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <Button ml="lg" variant="light" color="red" onClick={() => exportFilteredDataJson()}>
          Export
        </Button>
      </Menu>
    </Flex>
  );
}
