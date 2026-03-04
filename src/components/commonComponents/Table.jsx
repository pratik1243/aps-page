import React from "react";
import StatusChip from "./StatusChip";
import Progress from "./Progress";
import VurnebilityChip from "./VurnebilityChip";
import SearchFilter from "./SearchFilter";

const Table = ({ tableData }) => {
  return (
    <div className="table-section">
      <SearchFilter />

      <div className="inner-table-sec">
        <table>
          <thead>
            {tableData?.columns.map((el, i) => {
              return <th key={i}>{el?.header}</th>;
            })}
          </thead>
          <tbody>
            {tableData?.rows.map((el, i) => {
              return (
                <tr>
                  {Object.entries(el)?.map(([key, value], id) => {
                    return (
                      <td key={id}>
                        {key === "status" ? (
                          <StatusChip text={value} />
                        ) : key === "progress" ? (
                          <Progress percentage={value} />
                        ) : key === "vulnerability" ? (
                          <VurnebilityChip data={value} />
                        ) : (
                          value
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
