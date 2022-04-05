/* eslint react/prop-types: 0 */

import MUIDataTable from "mui-datatables";
import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true,
});

function Table1({ title, data }) {
  //   const [responsive] = useState("vertical");
  const [tableBodyHeight] = useState("100%");
  const [tableBodyMaxHeight] = useState("");
  const [searchBtn] = useState(true);
  const [downloadBtn] = useState(true);
  const [printBtn] = useState(true);
  const [viewColumnBtn] = useState(true);
  const [filterBtn] = useState(true);

  const columns = [
    { name: "Legislation Name ", options: { filterOptions: { fullWidth: true } } },
    "Act No",
    "Regulator",
    "Section",
    "Compliance Name",
    {
      name: "Compliance Description",
      options: {
        setCellHeaderProps: () => ({
          style: {
            width: "50%",
          },
        }),
      },
    },
    "Task Frequency",
    "Penalty",
    "Criticality",
    "Significant Judicial Intervention",
    "YES",
    "NDD",
    "NO",
    "Act URL",
  ];

  const options = {
    draggableColumns: {
      enabled: true,
    },
    search: searchBtn,
    download: downloadBtn,
    print: printBtn,
    viewColumns: viewColumnBtn,
    filter: filterBtn,
    filterType: "dropdown",
    responsive: false,
    tableBodyHeight,
    tableBodyMaxHeight,
    onTableChange: (action, state) => {
      console.log(action);
      console.dir(state);
    },
    onGroupExpansionChange: (group, expanded) => {
      console.dir(group);
      console.dir(expanded);
    },
    grouping: {
      columnIndexes: [0],
      //   expanded: {
      //     "Business Consultant": {
      //       open: true,
      //     },
      //   },
    },
  };

  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={createTheme()}>
        <MUIDataTable title={title} data={data} columns={columns} options={options} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default Table1;
