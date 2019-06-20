
-- Seed data into table
INSERT INTO users (user_id, first_name, last_name, user_name, password) 
VALUES 
  (1,"Chae","Kim","chae@yahoo.com","Dallas28"),
  (2,"Akhila","Naik","akhila@gmail.com","Shopping99"),
  (3,"Demo","Account","demo@demo.com","demo");

INSERT INTO projects (project_id, project_name)
VALUES
  	(1, "Paperboy"),
   	(2, "MiFID II"),
    (3, "Product Taxonomy"),
    (4, "Product De-Duplication"),
  	(5, "Java Upgrade");


INSERT INTO resources (resource_id, resource_name, resource_role, resource_location, resource_runrate)
VALUES
	  (1, "Akhila Naik", "BA", "NYK", 120000),
   	(2, "Kevin Kwan", "BA", "NYK", 120000),
   	(3, "Chae Kim", "PM", "NYK", 120000),
   	(4, "Erickson Kato", "PM", "NYK", 120000),
   	(5, "Nikhil Gohad", "PM", "PUN", 40000),
   	(6, "Bindu Kandarpa", "DEV", "PUN", 40000),
   	(7, "Jalpesh Bhaliya", "DEV", "PUN", 40000),
   	(8, "Kunal Desai", "DEV", "NYK", 120000),
   	(9, "Ignat Aleksandrov", "DEV", "NYK", 120000),
    (10, "Elas Kuppanan", "DEV", "NYK", 120000),
    (11, "Radim Kolarik", "DEV", "PRG", 45000),
    (12, "Dino Infantino", "DEV", "LDN", 110000),
    (13, "Inho Chung", "QA", "NYK", 80000),
    (14, "Neeta Singh", "QA", "PUN", 40000),
    (15, "Raj Rajkannan", "QA", "PUN", 40000),
    (16, "Dusan Dobes", "QA", "PRG", 45000),
    (17, "Otto Mixa", "REL", "PRG", 45000),
    (18, "Tom Lagerman", "REL", "NYK", 120000),
    (19, "Will Kim", "REL", "PUN", 120000),
    (20, "Ryan Potter", "UAT", "NYK", 120000),
    (21, "Bharati Rao", "UAT", "PUN", 40000),
    (22, "Manish Patel", "UAT", "PUN", 40000);


INSERT INTO allocations (
  allocation_id,
  project_name,
  resource_name,
  january,
  february,
  march,
  april,
  may,
  june,
  july,
  august,
  september,
  october,
  november,
  december)
VALUES
  (1, "Paperboy", "Chae Kim", 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50),
  (2, "Paperboy", "Akhila Naik", 50, 100, 100, 100, 50, 0, 0, 0, 0, 0, 0, 0),
  (3, "Paperboy", "Kevin Kwan", 50, 100, 100, 100, 50, 0, 0, 0, 0, 0, 0, 0),
  (4, "Paperboy", "Bindu Kandarpa", 0, 0, 0, 50, 100, 100, 100, 50, 0, 0, 0, 0),
  (5, "Paperboy", "Jalpesh Bhaliya", 0, 0, 0, 0, 100, 100, 100, 50, 0, 0, 0, 0),
  (6, "Paperboy", "Kunal Desai", 0, 0, 0, 0, 100, 100, 100, 50, 0, 0, 0, 0),
  (7, "Paperboy", "Inho Chung", 0, 0, 0, 0, 0, 0, 50, 100, 50, 0, 0, 0),
  (8, "Paperboy", "Dusan Dobes", 0, 0, 0, 0, 0, 0, 0, 100, 50, 0, 0, 0),
  (9, "Paperboy", "Otto Mixa", 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25, 25),
  (10, "Paperboy", "Ryan Potter", 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 25, 0),
  (11, "Paperboy", "Bharati Rao", 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 25, 0),
  (12, "Product Taxonomy", "Chae Kim", 0, 0, 0, 25, 50, 50, 50, 50, 50, 50, 50, 50),
  (13, "Product Taxonomy", "Akhila Naik", 0, 0, 0, 0, 50, 100, 100, 100, 0, 0, 0, 0),
  (14, "Product Taxonomy", "Kevin Kwan", 0, 0, 0, 0, 50, 100, 100, 100, 0, 0, 0, 0),
  (15, "Product Taxonomy", "Bindu Kandarpa", 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 0, 0),
  (16, "Product Taxonomy", "Elas Kuppanan", 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 0, 0),
  (17, "Product Taxonomy", "Radim Kolarik", 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 0, 0),
  (18, "Product Taxonomy", "Inho Chung", 0, 0, 0, 0, 0, 0, 0, 0, 50, 100, 100, 100),
  (19, "Product Taxonomy", "Dusan Dobes", 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100),
  (20, "Product Taxonomy", "Otto Mixa", 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25);

-- Verify seed data
SELECT * FROM projects;
-- 5 records returned.

SELECT * FROM resources;
-- 22 records returned.

SELECT * FROM allocations;
-- 20 records returned.
