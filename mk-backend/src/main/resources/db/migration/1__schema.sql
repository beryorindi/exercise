drop table if exists employee;

create table employee (
    id varchar(255) not null,
    name varchar(50) not null,
    gender varchar(6) not null,
    dob date not null,
    phone varchar(20) not null unique,
    image_url text,
    primary key (id)
);