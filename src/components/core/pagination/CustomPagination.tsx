import React, { FC } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

type PaginationProps = {
  count: number;
  handleNext: Function;
  handlePrev: Function;
  activePage: number;
  setActivePage: Function;
};

const CustomPagination: FC<PaginationProps> = ({
  count,
  handleNext,
  handlePrev,
  activePage,
  setActivePage,
}) => {
  return (
    <section>
      <Pagination className="">
        <PaginationContent>
          <PaginationItem className="cursor-pointer">
            <PaginationPrevious onClick={() => handlePrev()} />
          </PaginationItem>
          {[...new Array(count)].map((_i, idx) => (
            <PaginationItem
              onClick={() => setActivePage(idx + 1)}
              className="cursor-pointer"
              key={Math.random()}
            >
              <PaginationLink isActive={idx + 1 == activePage}>{idx + 1}</PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem className="cursor-pointer">
            <PaginationNext onClick={() => handleNext()} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default CustomPagination;
