select "films"."title",
       "films"."releaseYear",
       "genres"."name" as "genre"
  from "filmGenre"
  join "films" using ("filmId")
  join "genres" using ("genreId")
  where "films"."title" = 'Boogie Amelie'
