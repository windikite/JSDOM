          description: "Next generation computing"
     },
     {
          name: "Electric Power Bank",
          price: 79.99,
          description: "Convenient power charging"
     },
     {
          name: "Gameboy",
          price: 89.99,
          description: "Cutting-edge gaming console"
     }
];

let product_table = document.getElementById("product_table");

// Task2
function populate_table(table, items) {
     items.forEach((x) => {
          let new_row = document.createElement("tr");
          const values = Object.values(x);
          const table_cells = values.map((x) => {
               let new_cell = document.createElement("td");
               new_cell.innerHTML = x;
               new_row.appendChild(new_cell);
          });
          table.appendChild(new_row);
     });
}

// Task3
window.addEventListener("load", (event) => {
     populate_table(product_table, products);
});
