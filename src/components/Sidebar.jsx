import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory ? "#FC1503" : "#f0f0f0", // Red for selected, light gray for others
          color: category.name === selectedCategory ? "white" : "#333", // White for selected, darker gray for others
          border: "none",
          outline: "none",
          cursor: "pointer",
          padding: "8px 12px",
          borderRadius: "20px",
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "white" : "#FC1503", marginRight: "15px" }}>
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;
