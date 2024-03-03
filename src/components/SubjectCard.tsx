import React from 'react';
import { Card, Group, Pill, Text } from '@mantine/core';

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
    <Card shadow="xs" padding="md" w={300} m={'s'}>
      <Card.Section withBorder inheritPadding py="xs">
        <Group justify="space-between">
          <Text size="lg" fw={500}>
            {name}
          </Text>
          {status === 'Active' ? (
            <Pill bg="teal">
              <Text size="xs" c="white" lh="lg">
                Active
              </Text>
            </Pill>
          ) : (
            <Pill bg="red">
              <Text size="xs" c="white" lh="lg">
                Inactive
              </Text>
            </Pill>
          )}
        </Group>
      </Card.Section>

      <Card.Section p="md">
        <Text size="sm">Age: {age}</Text>
        <Text size="sm">Gender: {gender}</Text>
        <Text size="sm">Diagnosis Date: {new Date(diagnosisDate).toLocaleDateString()}</Text>

        <Text size={'10'} lh="md">
          ID: {id}
        </Text>
      </Card.Section>
    </Card>
  );
};

export default SubjectCard;
