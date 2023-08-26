import React from "react";
import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";
import Sidebar from "../../components/searchbar";
import {
  MainContainer,
  Paragraph,
  DefaultTableContainer,
} from "./GlobalStyles";
import data from "../../utils/englishResultData";
import EnglishResultTable from "../AdminDashboard/Table/SecondarySchool/EnglishResultTable";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  marginRight: "200px",
  marginTop: "20px",
  marginBottom: "20px",
  display: "flex",
  justifyContent: "flex-end",
});

const ListItems = styled("li")({});

const EnglishResult = () => {
  const { items } = usePagination({
    count: 9,
  });
  return (
    <MainContainer>
      <DefaultTableContainer>
        <Paragraph>Results</Paragraph>
        <EnglishResultTable data={data} />
        <nav>
          <List>
            {items.map(({ page, type, selected, ...item }, index) => {
              let children = null;

              if (type === "start-ellipsis" || type === "end-ellipsis") {
                children = "…";
              } else if (type === "page") {
                children = (
                  <button
                    type="button"
                    style={{
                      fontWeight: selected ? "bold" : undefined,
                      color: selected ? "#AEB0B3" : null,
                      padding: "0px 10px",
                      border: "none",
                      background: "#ffffff",
                    }}
                    {...item}
                  >
                    {page}
                  </button>
                );
              } else {
                children = (
                  <button type="button" {...item}>
                    {type}
                  </button>
                );
              }

              return <ListItems key={index}>{children}</ListItems>;
            })}
          </List>
        </nav>
      </DefaultTableContainer>
      <div style={{ marginTop: "80px" }}>
        <Sidebar />
      </div>
    </MainContainer>
  );
};

export default EnglishResult;
