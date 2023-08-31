<template >
   <div class="container">
  <h2>View Transactions</h2>
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Property</th>
        <th>Price</th>
        <th>Buyer</th>
        <th>Seller</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2023-08-28</td>
        <td>1234 Elm Street</td>
        <td>$350,000</td>
        <td>John Doe</td>
        <td>Jane Smith</td>
      </tr>
      <tr>
        <td>2023-08-25</td>
        <td>5678 Oak Avenue</td>
        <td>$420,000</td>
        <td>Alice Johnson</td>
        <td>Michael Brown</td>
      </tr>
      <!-- Add more rows for other transactions -->
    </tbody>
  </table>
  <div class="pagination">
    <a href=""><font-awesome-icon style="color: orangered;" :icon="['fas', 'circle-chevron-left']" /></a>

    <a href="#">1</a>
    <a href="#">2</a>
    <a href="#">3</a>
    <!-- Add more pagination links as needed -->
    <a href=""><font-awesome-icon style="color: orangered;"  :icon="['fas', 'circle-chevron-right']" /></a>
  </div>
</div>
</template>

<style>

  .container {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  }
  h2{
    color: rgb(97, 97, 97);

  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  th, td {
    padding: 10px;
    text-align: left;
    color: rgb(150, 149, 149);
    border-bottom: 1px solid #ddd;
  }
  th {
    background-color: #f4f4f4;
    color: orangered;
    font-weight: bold;

  }
  tr:hover {
    background-color: #f2f2f2;
  }
  .pagination {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pagination a {
    display: inline-block;
    padding: 5px 10px;
    margin: 0 5px;
    border: 1px solid #ccc;
    text-decoration: none;
    color: rgb(150, 149, 149);
    border-radius: 3px;
    transition: background-color 0.3s ease;
  }
  .pagination a:hover {
    background-color: #f4f4f4;
  }
</style>