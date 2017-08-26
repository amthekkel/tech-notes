#Show table engine

`SELECT TABLE_NAME,
       ENGINE
FROM   information_schema.TABLES
WHERE  TABLE_SCHEMA ='db_name';`


#Show the size of each table in the databases

`
SELECT table_name AS "Tables", 
round(((data_length + index_length) / 1024 / 1024), 2) "Size in MB" 
FROM information_schema.TABLES 
WHERE table_schema = "DB_NAME"
ORDER BY (data_length + index_length) DESC;
`
