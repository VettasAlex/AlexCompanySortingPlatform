# Companies Data Filtering and Sorting

This JavaScript code processes an array of companies and extracts specific data attributes such as number of employees, ratings, pricing, CEO ages, and CEO genders. It then sorts these data points in ascending and descending order using JavaScript's built-in `.sort()` method with appropriate custom sorting functions for numeric values.

---

## 🚀Features

- Extracts and sorts:
  - Number of Employees
  - Ratings
  - Pricing
  - CEO Ages (including average age for companies with multiple CEOs)
  - CEO Genders

- Uses native `.sort()` for efficient sorting of numeric and string data
- Calculates average CEO age for companies with multiple CEOs
- Supports multiple CEOs per company in data processing
- Demonstrates practical use of nested loops and array manipulation

---

## 🗃️Data Structure

The `companies` array contains objects with the following structure:

```js
{
  name: String,
  numberOfEmployees: Number,
  ceo: [
    {
      ceoName: String,
      ceoAge: Number,
      ceoGender: String ("male" or "female"),
    },
    // ... possibly more CEOs
  ],
  rating: Number,
  price: Number
}
