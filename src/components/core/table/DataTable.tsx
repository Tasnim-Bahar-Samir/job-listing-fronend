import React, { FC } from 'react';
import Spinner from '../spinner/Spinner';
import Text from '../typography/Text';

export type DataTableColumn = {
  title: string;
  dataKey: string;
  row: (data: any) => React.ReactNode;
};

export type DataTableProps = {
  columns: DataTableColumn[];
  data: any[];
  isLoading: boolean;
};

const DataTable: FC<DataTableProps> = ({ columns, data, isLoading }) => {
  return (
    <div className=" mx-auto overflow-hidden relative border border-blue-200 z-20 rounded-[20px] ">
      <div className="w-full overflow-auto">
        <table className="w-full text-left text-blue-900 ">
          <thead className="sticky z-10 top-0 left-0 right-0 w-full h-fit bg-blue-50">
            <tr className=" ">
              {columns.map((column, index) => (
                <th key={index} scope="col" className="px-[22px] tableAction  py-6">
                  <Text className="max-w-[400px] " variant={'title_1'} label={column.title} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody className=" w-full bg-white  ">
            <>
              {!isLoading &&
                data &&
                data.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`${
                      rowIndex + 1 == data?.length ? '' : 'border-b'
                    } border-blue-200 `}
                  >
                    {columns.map((column, colIndex) => (
                      <td key={colIndex} className="px-[22px] py-[18px] h-fit  max-w-[350px] ">
                        {column.row(row)}
                      </td>
                    ))}
                  </tr>
                ))}
            </>
          </tbody>
        </table>
        {isLoading && (
          <div className="flex justify-center items-center h-44 mt-6 overflow-y-hidden">
            <Spinner />
          </div>
        )}
        {!isLoading && data?.length === 0 && (
          <div className="flex justify-center items-center my-6 overflow-y-hidden">
            <p className="text-14-medium">No Data Available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataTable;
