select "addresses"."line1",
       "addresses"."district",
       "cities"."name"
  from "addresses"
  join "cities" using ("cityId");
