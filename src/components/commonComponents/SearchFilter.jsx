import React from "react";
import Button from "./Button";
import { RiFilter3Line } from "react-icons/ri";
import { LuColumns2 } from "react-icons/lu";
import TextField from "./TextField";
import { IoMdAdd } from "react-icons/io";

const SearchFilter = () => {
  return (
    <div className="search-filter-sec">
      <div>
        <TextField placeholder="Search scans by name or type..." width={96} />
      </div>
      <div className="filter-btn-sec">
        <Button
          outlined
          icon={<RiFilter3Line size={19} />}
          color={"#9d9898"}
          textColor={"#9d9898"}
          text={"Filter"}
          roundEdges={5}
        />

        <Button
          outlined
          icon={<LuColumns2 size={18} />}
          color={"#9d9898"}
          textColor={"#9d9898"}
          text={"Column"}
          roundEdges={5}
        />

        <Button
          icon={<IoMdAdd size={20} />}
          color={"#0e9e9e"}
          text={"New Scan"}
          roundEdges={5}
        />
      </div>
    </div>
  );
};

export default SearchFilter;
