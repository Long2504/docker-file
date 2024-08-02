<!-- install image mysql -->
docker pull mysql

<!-- check docker pull -->
docker images

<!-- create container -->
<!-- -p HOST_PORT:CONTAINER_PORT, -e : environment, mysql: image using to restart container -->
docker run --name mydb -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql

<!--check the docker container has been running yet  -->
docker container ls

<!-- check connection success then access sh  -->
docker exec -it mydb sh

<!-- login sql -->
mysql -uroot -p

<!-- show databases -->
show databases;

<!-- create user for project -->
<!-- longg2504: username, %:localhost, 12345678: pw -->
create user 'longg2504'@'%' IDENTIFIED BY '12345678';

<!-- create database -->
CREATE DATABASE bookingDb;

<!-- grant for user -->
<!-- bookingDb: name db -->
GRANT ALL PRIVILEGES ON bookingDb.* TO 'longg2504'@'%';

<!-- use bookingDb -->
use bookingDb;

<!-- show table -->
show table;

<!-- create table -->
CREATE TABLE users(id INT, name VARCHAR(20));

<!-- insert data -->
INSERT INTO users(id,name) VALUES (1,'Long');

<!-- select * from users -->
SELECT * FROM users;