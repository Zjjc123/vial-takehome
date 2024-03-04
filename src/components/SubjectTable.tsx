import { useState, ReactElement } from 'react';
import { Flex, Container, Loader, Pagination } from '@mantine/core';

import SubjectCard, { SkeletonCard, SubjectCardProps } from './SubjectCard';

import '@mantine/dates/styles.css';

import Toolbar from './Toolbar';

interface Props {
  data: SubjectCardProps[];
}

const PAGE_SIZE = 9;

const chunk = <T,>(array: T[], size: number): T[][] => {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);
  return [head, ...chunk(tail, size)];
};

export default function SubjectTable({ data }: Props) {
  const [filteredData, setFilteredData] = useState(data);
  const [activePage, setPage] = useState(1);

  let displayDataChunk: SubjectCardProps[][] = [];
  let displayData: ReactElement[] = [];
  if (filteredData.length > 0) {
    displayDataChunk = chunk(filteredData, PAGE_SIZE);
    displayData = displayDataChunk[activePage - 1].map((item) => <SubjectCard key={item.id} {...item} />);
  }

  return (
    <Container mih={'100vh'} py="xl" my="lg">
      <Toolbar data={data} filteredData={filteredData} setFilteredData={setFilteredData} />
      <Flex gap="xs" justify="center" align="flex-start" wrap="wrap">
        {data.length === 0 ? (
          <>
            {Array.from({ length: PAGE_SIZE }).map((_, index) => (
              <>
                <SkeletonCard key={index} />
              </>
            ))}
            <Loader size="md" pos="absolute" top="50%" left="50%" />
          </>
        ) : displayData.length > 0 ? (
          displayData
        ) : (
          <p>No data found</p>
        )}
      </Flex>
      <Pagination mt={'xl'} total={displayDataChunk.length} value={activePage} onChange={setPage} siblings={1} />
    </Container>
  );
}
