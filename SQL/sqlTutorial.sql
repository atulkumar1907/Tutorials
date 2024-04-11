create database apnaCollege;
create database if not exists apnaCollege;

-- drop database apnaCollege;
-- drop database if exists apnaCollege;

show databases;
show tables;

use apnaCollege;

create table student (
	id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT NOT NULL
);

INSERT INTO student VALUES(1, "AMAN", 26);
INSERT INTO student VALUES(2, "Sharadha", 24);

insert into student 
(id, name, age)
values
(3, "atul", 18),
(5, "vivek", 19),
(4, "aahil", 17);

select * from student;

-- drop table if exists student ; 


-- cosnstraints --
use apnaCollege;
create table temp1(
	id INT,
    name varchar(50),
    age int not null,
    city varchar(20),
    primary key (id, name)
);
    
insert into temp1 values (101);
insert into temp1 values (102);

select * from temp1;

create table emp(
	id int,
    salary int default 25000
);

insert into emp (id) values (101);

select * from emp;


-- select command --  
use apnaCollege;
create table stu(
	rollno int primary key,
    name varchar(50),
    marks int not null,
    grade varchar(2),
    city varchar(20)
);

insert into stu
(rollno, name, marks, grade, city)
values
(101, "anil", 78, 'C', 'Pune'),
(102, "amit", 49, 'A', 'Mumbai'),
(103, "chetan", 97, 'A+', 'Delhi'),
(104, "rahul", 80, 'B', 'Jaipur');


insert into stu
(rollno, name, marks, grade, city)
values
(105, "Yash", 38, 'C', 'Delhi'),
(106, "Ashish", 98, 'A', 'Mumbai'),
(107, "Mahesh", 67, 'A+', 'Delhi'),
(108, "Mehak", 66, 'B', 'Mumbai');

select * from stu;

select name, marks from stu;

select distinct city from stu;

select * from stu where marks>80;
select * from stu where city!='Pune';

-- operators --

select * from stu where marks+10>100;
select * from stu where marks!=80;
select * from stu where city!='Jaipur' and marks>80;
select * from stu where city!='Jaipur' or marks>80;

select * from stu where marks between 80 and 90;

select * from stu where city in ("Delhi", "Mumbai");

select * from stu where city not in ("Delhi", "Mumbai");

select *
from stu 
where marks>50 
order by marks asc
limit 3;

-- aggregate functions -- 

select avg(marks) from stu;
select count(distinct city ) from stu;

-- group by --

select city, count(rollno)
from stu
group by city
order by avg(marks) DESC;

use apnaCollege;
-- having (similar to where) --

select city, count(rollno)
from stu
group by city
having max(marks)>90;

-- general order --

 -- select-> from-> where-> group by-> having-> order by --
 
 select city 
 from stu
 where grade = 'A'
 group by city
 having max(marks) > 70
 order by marks;
 
 set SQL_SAFE_UPDATES = 0;
 
 -- table related queries --
 update stu 
 set grade = 'O'
 where grade = 'A+';
 
 update stu
 set marks = marks+1;
 
 delete from stu
 where marks<50;
 
 use apnaCollege;
 -- foreign keys --
 create table dept(
	id int primary key,
    name varchar (40)
);
insert into dept
values
(101, 'eng'),
(102, 'it');

update dept
set id= 103
where id = 102;

create table teacher(
	id int primary key,
    name varchar (40),
    dept_id int,
    foreign key (dept_id) references dept(id)
    on delete cascade
    on update cascade
);

insert into teacher
values
(101, 'adam', 101),
(102, 'eve', 102);
    
select  * from teacher;

alter table stu
add column  age int default 19;

alter table stu
modify column age varchar(30);

alter table stu
drop column age;

alter table stu
rename stu;

alter table stu
change age stu_age int;

select * from stu;

alter table student
drop column age;

select * from student;

create table course(
	id int primary key,
    course varchar(20)
);
drop table course;

TRUNCATE TABLE STUDENT;

INSERT INTO STUDENT
VALUES
(101, 'a'),
(102, 'b'),
(103, 'c');

INSERT INTO COURSE
VALUES
(101, 'avg'),
(102, 'MATH'),
(104, 'SCI'),
(107, 'SST'),
(108, 'CMP');

SELECT * FROM COURSE;

select * 
from student as s
inner join course as c
on s.id = c.id;

select * 
from student as s
left join course as c
on s.id = c.id;
    
 select * 
from student as s
right join course as c
on s.id = c.id;

select * 
from student as s
left join course as c
on s.id = c.id
union
select * 
from student as s
right join course as c
on s.id = c.id;
 
select * 
from student as s
left join course as c
on s.id = c.id
where c.id is null;
 
 create table employee(
	id int primary key,
    name varchar(50),
    mgr_id int
);

insert into employee
values
(101, 'adam', 103),
(102, 'bob', 104),
(103, 'casey', null),
(104, 'donald', 103);

select a.name as mgr_name, b.name
from employee as a
join employee as b
on a.id = b.mgr_id;

select name from employee
union all
select name from employee;

-- sub queriess -- 

select name from student where id%2=0;


create view view1 as 
select id, name from student;

select * from view1;










