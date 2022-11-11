SHOW databases;
USE kdt;
SHOW tables;

CREATE TABLE visitor (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    comment mediumtext
);
DESC visitor;

INSERT INTO visitor (name, comment) VALUES('홍길동', '내가 왔다.');
INSERT INTO visitor (name, comment) VALUES('이찬혁', '으라차차');
INSERT INTO visitor (name, comment) VALUES('조부희', '알로');
INSERT INTO visitor (name, comment) VALUES('이수현', '하하하하');

-- 테이블 데이터 삭제 (delete)
DELETE FROM visitor WHERE id > 2;

-- 테이블 데이터 수정 (update)
UPDATE visitor SET name='누구', comment='아무말' WHERE id=1;

SELECT * FROM visitor; -- all
SELECT * FROM visitor WHERE id=1; -- one

-- DCL
-- mysql 사용자 추가 (user 계정)
CREATE USER 'user'@'%' IDENTIFIED BY '1234'; 
-- user 계정에 db 권한 부여 (모든 db에 접근 가능 설정)
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
-- 현재 사용중인 mysql 캐시 지우고 새로운 설정 적용
FLUSH PRIVILEGES;

-- 비밀번호 변경하고 싶다면?
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '1234';