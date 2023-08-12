
------test
INSERT INTO test (name,description,total_questions,is_random, date_init,date_end,"time", minimum_score,num_attemps,questions_per_page,announcement_id,position_id,created_at,created_by) 
VALUES ('Examen 1 ', 'Este es un examen privado', 1,true,'2023-06-01','2023-08-01',60,1,1,1,1,1,'2023-01-01','10069779');

---test_group

INSERT INTO test_group (name,description,num_questions,points_per_question,sequence,test_id,created_at,created_by)
values ('CONOCIMINTOS GENERALES','CONOCIMINETOS GENERALES',5,1,1,1,'2023-06-01','10069779');

---test_group_question tgq 

INSERT INTO test_group_question (test_group_id,question_id,created_at,created_by)
values (1,1,'2023-06-01','10069779');
INSERT INTO test_group_question (test_group_id,question_id,created_at,created_by)
values (1,2,'2023-06-01','10069779');
INSERT INTO test_group_question (test_group_id,question_id,created_at,created_by)
values (1,3,'2023-06-01','10069779');
INSERT INTO test_group_question (test_group_id,question_id,created_at,created_by)
values (1,4,'2023-06-01','10069779');
INSERT INTO test_group_question (test_group_id,question_id,created_at,created_by)
values (1,5,'2023-06-01','10069779');
INSERT INTO test_group_question (test_group_id,question_id,created_at,created_by)
values (1,6,'2023-06-01','10069779');


-----------
INSERT INTO test (name,description,total_questions,is_random, date_init,date_end,"time", minimum_score,num_attemps,questions_per_page,announcement_id,position_id,created_at,created_by) 
VALUES ('Examen 1 ', 'Este es un examen privado', 1,true,'2023-06-01','2023-08-01',60,1,1,1,1,1,'2023-01-01','10069779');

---test_group

INSERT INTO test_group (name,description,num_questions,points_per_question,sequence,test_id,created_at,created_by)
values ('CONOCIMIENTOS GENERALES -2023 ','CONOCIMIENTOS GENERALES 2023',3,1,1,2,'2023-06-01','10069779');

---test_group_question tgq 

INSERT INTO test_group_question (test_group_id,question_id,created_at,created_by)
values (2,1,'2023-06-01','10069779');
INSERT INTO test_group_question (test_group_id,question_id,created_at,created_by)
values (2,2,'2023-06-01','10069779');
INSERT INTO test_group_question (test_group_id,question_id,created_at,created_by)
values (2,3,'2023-06-01','10069779');
INSERT INTO test_group_question (test_group_id,question_id,created_at,created_by)
values (2,4,'2023-06-01','10069779');
INSERT INTO test_group_question (test_group_id,question_id,created_at,created_by)
values (2,5,'2023-06-01','10069779');
INSERT INTO test_group_question (test_group_id,question_id,created_at,created_by)
values (2,6,'2023-06-01','10069779');