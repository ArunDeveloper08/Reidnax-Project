import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { getData } from "../service/api";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },

}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
 

}));
const UserData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData();
        setData(response);
        console.log("data", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log("data", data);

  return (
    <div>
    
        <TableContainer
        sx={{ paddingY: 0, width: "70%", margin: "auto" }}
        component={Paper}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell
                sx={{ paddingX: 0, minWidth: 100 }}
                align="center"
              >
                Name
              </StyledTableCell>

              <StyledTableCell
                sx={{ paddingX: 0, minWidth: 100 }}
                align="center"
              >
                Hindi
              </StyledTableCell>
              <StyledTableCell
                sx={{ paddingX: 0, minWidth: 100 }}
                align="center"
              >
                English
              </StyledTableCell>
              <StyledTableCell
                sx={{ paddingX: 0, minWidth: 100 }}
                align="center"
              >
                Math
              </StyledTableCell>
              <StyledTableCell
                sx={{ paddingX: 0, minWidth: 100 }}
                align="center"
              >
                Science
              </StyledTableCell>
              <StyledTableCell
                sx={{ paddingX: 0, minWidth: 150 }}
                align="center"
              >
                Social Science
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data?.map((item, index) => {
              return (
                <StyledTableRow key={index}>
                  <StyledTableCell align="center">{item.name}</StyledTableCell>

                  <StyledTableCell
                    sx={{ paddingY: 1, width: 200 }}
                    align="center"
                  >
                    {item.hindi}
                  </StyledTableCell>
                  <StyledTableCell sx={{ paddingY: 1 }} align="center">
                    {item.english}
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.math}</StyledTableCell>
                  <StyledTableCell align="center">
                    {item.science}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.social_studies}
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
 
    
    </div>
  );
};

export default UserData;
