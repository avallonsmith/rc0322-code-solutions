select "customerId",
       "firstName",
       "lastName",
       "amount"
  from "customers"
  join "payments" using ("customerId");
   order by "amount" desc
   limit 1;
