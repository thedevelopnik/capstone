drop database if exists mont_match;
create database mont_match;

drop table if exists states;
create table states (
  id serial primary key,
  state varchar(2)
);


drop table if exists training_types;
create table training_types (
  id serial primary key,
  training_type varchar(30)
);


drop table if exists location_types;
create table location_types (
  id serial primary key,
  location_type varchar(30)
);


drop table if exists prof_qualities;
create table prof_qualities (
  id serial primary key,
  prof_quality varchar(30)
);


drop table if exists org_types;
create table org_types (
  id serial primary key,
  org_type varchar(30)
);


drop table if exists cal_types;
create table cal_types (
  id serial primary key,
  cal_type varchar(30)
);


drop table if exists sizes;
create table sizes (
  id serial primary key,
  size varchar(30)
);


drop table if exists school_profiles;
create table school_profile (
  id serial primary key,
  username varchar(30),
  password varchar(100),
  profile_img varchar(255),
  location_id references location_types(id),
  org_type_id references org_types(id),
  size_id references sizes(id),
  cal_type references cal_types(id),
  state_id references states(id),
  assets varchar(1000),
  growth varchar(1000),
  mission varchar(1000),
  other_training varchar(1000)
);


drop table if exists teacher_profiles;
create table teacher_profile (
  id serial primary key,
  username varchar(30),
  password varchar(100),
  profile_img varchar(255),
  first_name varchar(30),
  last_name varchar(30),
  program varchar(50),
  grad_year integer,
  strengths varchar(1000),
  growth varchar(1000),
  motto varchar(1000)
);


drop table if exists school_staff;
create table school_staff (
  school_id references school_profiles(id),
  staff_id references teacher_profiles(id)
);


drop table if exists school_qualities;
create table school_qualities (
  school_id references school_profiles(id),
  qual_id references prof_qualities(id)
);


drop table if exists teacher_qualities;
create table teacher_qualities (
  teacher_id references teacher_profiles(id),
  qual_id references prof_qualities(id)
);


drop table if exists school_training_reqs;
create table school_training_reqs (
  school_id references school_profiles(id),
  training_id references training_types(id)
);


drop table if exists teacher_des_states;
create table teacher_des_states (
  id serial primary key,
  teacher_id references teacher_profiles(id),
  state_id references states(id)
);

drop table if exists teacher_training;
create table teacher_training (
  id serial primary key,
  teacher_id references teacher_profiles(id),
  training_id references training_types(id)
)

drop table if exists past_employments;
create table past_employments (
  id serial primary key,
  teacher_id references teacher_profiles(id),
  emp_name varchar(50),
  emp_address varchar(100),
  emp_city varchar(30),
  emp_state references states(id),
  emp_phone varchar(30),
  emp_supervisor varchar(30)
);


drop table if exists teacher_org_des;
create table teacher_org_des (
  id serial primary key,
  teacher_id references teacher_profiles(id),
  org_id references org_types(id)
);


drop table if exists teacher_size_des;
create table teacher_size_des (
  id serial primary key,
  teacher_id references teacher_profiles(id),
  size_id references sizes(id)
);


drop table if exists teacher_cal_des;
create table teacher_cal_des (
  id serial primary key,
  teacher_id references teacher_profiles(id),
  cal_id references cal_types(id)
);


drop table if exists teacher_loc_des;
create table teacher_loc_des (
  id serial primary key,
  teacher_id references teacher_profiles(id),
  loc_id references location_types(id)
);
