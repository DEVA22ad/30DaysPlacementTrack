const orders = [ { id: 1, customer: "John", amount: 5000, status: "Completed" }, { id: 2, customer: "David", amount: 3000, status: "Pending" }, { id: 3, customer: "Sam", amount: 7000, status: "Completed" }, { id: 4, customer: "Peter", amount: 2000, status: "Pending" } ];
const customersName=orders.map(student=>student.customer);
console.log(customersName);
const completedOrder=orders.filter(student=>student.status=== "Completed").forEach(student=>console.log("Completed order"+student.customer + ":"+student.id))
const findID=orders.find(student=>student.id ===3);
console.log(findID.customer);
const totalRevenue=orders.reduce((total,item)=>total+item.amount,0);
console.log(totalRevenue);

