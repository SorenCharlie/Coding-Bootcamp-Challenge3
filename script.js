// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data

const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  const employeesArray = [];
  let addEmployee = true;
  while (addEmployee) {
    //console.log(addEmployee); 
    let firstName = prompt(`Enter employee first name`);
    let lastName = prompt(`Enter employee last name`);
    let salary = prompt(`Enter employee salary`);


    let employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    }

    if (isNaN(employee.salary)) employee.salary = 0;

    employeesArray.push(employee);
    addEmployee = confirm('Would you like to add another employee?');
    console.log(addEmployee);
    console.log(employeesArray);
  }
  return employeesArray;
}

// Display the average salary - not getting it to work if salary is included. otherwise NaN
const displayAverageSalary = function (employeesArray) {
   // TODO: Calculate and display the average salary
   //const salaries = (employeesArray.employees.salary);
   const numberOfEmployees = employeesArray.length
   console.log('some string', employeesArray);
    let sum = 0
   for (let employee of employeesArray) {
      sum += employee.salary;
    }
    let average = sum / numberOfEmployees;
    console.log('average log', average);
    return average;
}



  // Select a random employee
  const getRandomEmployee = function (employeesArray) {
    // TODO: Select and display a random employee
    console.log(employeesArray[(Math.floor(Math.random() * employeesArray.length))]);
  }

  /*
    ====================
    STARTER CODE
    Do not modify any of the code below this line:
  */

  // Display employee data in an HTML table
  const displayEmployees = function (employeesArray) {
    // Get the employee table
    const employeeTable = document.querySelector('#employee-table');

    // Clear the employee table
    employeeTable.innerHTML = '';

    // Loop through the employee data and create a row for each employee
    for (let i = 0; i < employeesArray.length; i++) {
      const currentEmployee = employeesArray[i];

      const newTableRow = document.createElement("tr");

      const firstNameCell = document.createElement("td");
      firstNameCell.textContent = currentEmployee.firstName;
      newTableRow.append(firstNameCell);

      const lastNameCell = document.createElement("td");
      lastNameCell.textContent = currentEmployee.lastName;
      newTableRow.append(lastNameCell);

      const salaryCell = document.createElement("td");
      // Format the salary as currency
      salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      });

      newTableRow.append(salaryCell);

      employeeTable.append(newTableRow);
    }
  }

  const trackEmployeeData = function () {
    const employees = collectEmployees();

    console.table(employees);

    displayAverageSalary(employees);

    console.log('==============================');

    getRandomEmployee(employees);

    employees.sort(function (a, b) {
      if (a.lastName < b.lastName) {
        return -1;
      } else {
        return 1;
      }
    });

    displayEmployees(employees);
  }

  // Add event listener to 'Add Employees' button
  addEmployeesBtn.addEventListener('click', trackEmployeeData);
