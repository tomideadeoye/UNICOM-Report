/* eslint react/prop-types: 0 */

import MaterialTable from "material-table";
import React from "react";
// import { marketing } from "./data";

export default function MaterialTab({ title, data }) {
  const columns = [
    {
      title: "Legislation",
      field: "Legislation Name ",
      defaultGroupOrder: 0,
      cellStyle: {
        backgroundColor: "#039be5",
        color: "#FFF",
      },
      headerStyle: {
        backgroundColor: "#039be5",
      },
    },
    { title: "Act No", field: "Act No" },
    { title: "Regulator", field: "Regulator" },
    { title: "Compliance Name", field: "Compliance Name" },
    { title: "Penalty", field: "Penalty" },
    { title: "Section", field: "Section" },
    { title: "Task Frequency", field: "Task Frequency" },
    { title: "Significant Judicial Intervention", field: "Significant Judicial Intervention" },
    { title: "Criticality", field: "Criticality" },
    { title: "YES", field: "YES" },
    { title: "NDD", field: "NDD" },
    { title: "NO", field: "NO" },
    { title: "Act URL", field: "Act URL" },
  ];

  return (
    <MaterialTable
      title={title}
      columns={columns}
      data={data}
      detailPanel={[
        {
          tooltip: "Show Name",
          render: (rowData) => (
            <div
              style={
                {
                  // backgroundColor: "#43A047",
                }
              }
            >
              <iframe
                title={rowData["Act URL"]}
                src={rowData["Act URL"]}
                // height="100%"
                width="100%"
              />
            </div>
          ),
        },
      ]}
      options={{
        filtering: true,
        paging: false,
        grouping: true,
        exportButton: true,
        headerStyle: {
          backgroundColor: "#01579b",
          color: "#FFF",
          fontSize: 13,
        },
        rowStyle: {
          fontSize: 11,
          color: "black",
        },
      }}
    />
  );
}
