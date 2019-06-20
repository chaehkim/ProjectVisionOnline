-- Create Database
-- CREATE DATABASE gameplan;

-- USE gameplan;

-- Heroku Schema

-- Create tables
CREATE TABLE users(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(100) NULL,
  last_name VARCHAR(100) NULL,
  user_name VARCHAR(100) NULL,
  password VARCHAR(100) NULL,
  createdAT TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE projects(
  id INT AUTO_INCREMENT NOT NULL,
  project_name VARCHAR(200) NOT NULL,
  createdAT TIMESTAMP NOT NULL,
  primary key(id)
  );


CREATE TABLE resources(
  id INT AUTO_INCREMENT NOT NULL,
  resource_name VARCHAR(100) NOT NULL,
  resource_role VARCHAR(45) NOT NULL,
  resource_location VARCHAR(45) NOT NULL,
  resource_runrate INTEGER NOT NULL,
  createdAT TIMESTAMP NOT NULL,
  primary key(id)
  );

CREATE TABLE allocations(
  id INT AUTO_INCREMENT NOT NULL,
  project_name VARCHAR(200) NOT NULL,
  resource_name VARCHAR(100) NOT NULL,
  january FLOAT NULL,
  february FLOAT NULL,
  march FLOAT NULL,
  april FLOAT NULL,
  may FLOAT NULL,
  june FLOAT NULL,
  july FLOAT NULL,
  august FLOAT NULL,
  september FLOAT NULL,
  october FLOAT NULL,
  november FLOAT NULL,
  december FLOAT NULL,
  createdAT TIMESTAMP NOT NULL,
  primary key(id)
);

CREATE TABLE totalAllocations (
  id INT AUTO_INCREMENT NOT NULL,
  resource_name VARCHAR(100) NOT NULL,
  resource_role VARCHAR(100) NOT NULL,
  resource_location VARCHAR(100) NOT NULL,
  resource_runrate INTEGER NOT NULL,
  january FLOAT NULL,
  february FLOAT NULL,
  march FLOAT NULL,
  april FLOAT NULL,
  may FLOAT NULL,
  june FLOAT NULL,
  july FLOAT NULL,
  august FLOAT NULL,
  september FLOAT NULL,
  october FLOAT NULL,
  november FLOAT NULL,
  december FLOAT NULL,
  createdAT TIMESTAMP NOT NULL,
  primary key(id)
);
