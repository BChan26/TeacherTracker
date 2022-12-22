CREATE DATABASE studentdata;
CREATE USER teacheruser WITH PASSWORD 'teacherpassword';
GRANT ALL PRIVILEGES ON DATABASE studentdata TO teacheruser;
GRANT postgres TO teacheruser;