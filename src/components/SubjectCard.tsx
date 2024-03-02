import React from 'react';
import { Card, Text } from '@mantine/core';

export interface SubjectCardProps {
  id: string;
  name: string;
  age: number;
  gender: string;
  diagnosisDate: string;
  status: string;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ id, name, age, gender, diagnosisDate, status }) => {
  return (
    <Card shadow="xs" padding="md" style={{ maxWidth: 400, margin: '0 auto' }}>
      <Text size="lg">{name}</Text>
      <Text size="sm">ID: {id}</Text>
      <Text size="sm">Age: {age}</Text>
      <Text size="sm">Gender: {gender}</Text>
      <Text size="sm">Diagnosis Date: {new Date(diagnosisDate).toLocaleDateString()}</Text>
      <Text size="sm">Status: {status}</Text>
    </Card>
  );
};

export default SubjectCard;
