--------question_category-------
INSERT INTO question_category (name,description,created_by) 
VALUES ('CONOCIMIENTO GENERAL','ESTA SECCION ES DE CONOCIMIENTO GENERAL','10069779');

INSERT INTO question_category (name,description,created_by) 
VALUES ('MATEMÁTICA','ESTA SECCION ES DE MATEMÁTICA','10069779');

INSERT INTO question_category (name,description,created_by) 
VALUES ('INGLES','ESTA SECCION ES DE INGLES','10069779');

INSERT INTO question_category (name,description,created_by) 
VALUES ('ROBÓTICA','ESTA SECCION ES DE INGLES','10069779');

-- Pregunta 1
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es la capital de Italia?', '/img/1', 1, '1', 1);

-- Respuesta 1
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('La capital de Italia es Roma.', '/img/1', true, 100, 1, '1');

-- Respuesta 2 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('La capital de Italia es Madrid.', '/img/2', false, 0, 1, '1');

-- Pregunta 2
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el océano más grande del mundo?', '/img/2', 1, '1', 1);

-- Respuesta 3
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El océano más grande del mundo es el Océano Pacífico.', '/img/3', true, 100, 2, '1');

-- Respuesta 4 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El océano más grande del mundo es el Océano Atlántico.', '/img/4', false, 0, 2, '1');

-- Pregunta 3
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuántos lados tiene un triángulo?', '/img/3', 1, '1', 1);

-- Respuesta 5
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('Un triángulo tiene tres lados.', '/img/5', true, 100, 3, '1');

-- Respuesta 6 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('Un triángulo tiene cuatro lados.', '/img/6', false, 0, 3, '1');

-- Pregunta 4
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Qué día sigue al domingo?', '/img/4', 1, '1', 1);

-- Respuesta 7
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El día que sigue al domingo es el lunes.', '/img/7', true, 100, 4, '1');

-- Respuesta 8 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El día que sigue al domingo es el viernes.', '/img/8', false, 0, 4, '1');

-- Pregunta 5
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el planeta más cercano al Sol?', '/img/5', 1, '1', 1);

-- Respuesta 9
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El planeta más cercano al Sol es Mercurio.', '/img/9', true, 100, 5, '1');

-- Respuesta 10 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El planeta más cercano al Sol es Venus.', '/img/10', false, 0, 5, '1');

-- Pregunta 6
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuántas patas tiene un arácnido?', '/img/6', 1, '1', 1);

-- Respuesta 11
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('Un arácnido tiene ocho patas.', '/img/11', true, 100, 6, '1');

-- Respuesta 12 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('Un arácnido tiene seis patas.', '/img/12', false, 0, 6, '1');

-- Pregunta 7
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el resultado de la operación 4 + 5?', '/img/7', 1, '1', 1);

-- Respuesta 13
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El resultado de 4 + 5 es 9.', '/img/13', true, 100, 7, '1');

-- Respuesta 14 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El resultado de 4 + 5 es 10.', '/img/14', false, 0, 7, '1');

-- Pregunta 8
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿En qué continente se encuentra Brasil?', '/img/8', 1, '1', 1);

-- Respuesta 15
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('Brasil se encuentra en América del Sur.', '/img/15', true, 100, 8, '1');

-- Respuesta 16 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('Brasil se encuentra en Europa.', '/img/16', false, 0, 8, '1');

-- Pregunta 9
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el río más largo del mundo?', '/img/9', 1, '1', 1);

-- Respuesta 17
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El río más largo del mundo es el río Amazonas.', '/img/17', true, 100, 9, '1');

-- Respuesta 18 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El río más largo del mundo es el río Nilo.', '/img/18', false, 0, 9, '1');

-- Pregunta 10
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuántos huesos tiene el cuerpo humano?', '/img/10', 1, '1', 1);

-- Respuesta 19
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El cuerpo humano tiene 206 huesos.', '/img/19', true, 100, 10, '1');

-- Respuesta 20 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El cuerpo humano tiene 300 huesos.', '/img/20', false, 0, 10, '1');

-- Pregunta 11
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el metal más abundante en la corteza terrestre?', '/img/11', 1, '1', 2);

-- Respuesta 21
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El metal más abundante en la corteza terrestre es el aluminio.', '/img/21', true, 100, 11, '1');

-- Respuesta 22 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El metal más abundante en la corteza terrestre es el hierro.', '/img/22', false, 0, 11, '1');

-- Pregunta 12
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el animal más grande del mundo?', '/img/12', 1, '1', 2);

-- Respuesta 23
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El animal más grande del mundo es la ballena azul.', '/img/23', true, 100, 12, '1');

-- Respuesta 24 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El animal más grande del mundo es el elefante africano.', '/img/24', false, 0, 12, '1');

-- Pregunta 13
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el país más poblado del mundo?', '/img/13', 1, '1', 2);

-- Respuesta 25
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El país más poblado del mundo es China.', '/img/25', true, 100, 13, '1');

-- Respuesta 26 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El país más poblado del mundo es India.', '/img/26', false, 0, 13, '1');

-- Pregunta 14
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el ave nacional de Estados Unidos?', '/img/14', 1, '1', 2);

-- Respuesta 27
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El ave nacional de Estados Unidos es el águila calva.', '/img/27', true, 100, 14, '1');

-- Respuesta 28 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El ave nacional de Estados Unidos es el pavo real.', '/img/28', false, 0, 14, '1');

-- Pregunta 15
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el año de fundación de la ciudad de Roma?', '/img/15', 1, '1', 2);

-- Respuesta 29
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('La ciudad de Roma fue fundada en el año 753 a.C.', '/img/29', true, 100, 15, '1');

-- Respuesta 30 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('La ciudad de Roma fue fundada en el año 1492.', '/img/30', false, 0, 15, '1');

-- Pregunta 16
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el continente más grande del mundo?', '/img/16', 1, '1', 2);

-- Respuesta 31
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El continente más grande del mundo es Asia.', '/img/31', true, 100, 16, '1');

-- Respuesta 32 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El continente más grande del mundo es África.', '/img/32', false, 0, 16, '1');

-- Pregunta 17
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el metal más caro del mundo?', '/img/17', 1, '1', 2);

-- Respuesta 33
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El metal más caro del mundo es el rodio.', '/img/33', true, 100, 17, '1');

-- Respuesta 34 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El metal más caro del mundo es el oro.', '/img/34', false, 0, 17, '1');

-- Pregunta 18
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el animal más rápido del mundo?', '/img/18', 1, '1', 2);

-- Respuesta 35
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El animal más rápido del mundo es el guepardo.', '/img/35', true, 100, 18, '1');

-- Respuesta 36 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El animal más rápido del mundo es el águila.', '/img/36', false, 0, 18, '1');

-- Pregunta 19
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el elemento químico más ligero?', '/img/19', 1, '1', 2);

-- Respuesta 37
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El elemento químico más ligero es el hidrógeno.', '/img/37', true, 100, 19, '1');

-- Respuesta 38 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El elemento químico más ligero es el helio.', '/img/38', false, 0, 19, '1');

-- Pregunta 20
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el monumento más famoso de la India?', '/img/20', 1, '1', 2);

-- Respuesta 39
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El monumento más famoso de la India es el Taj Mahal.', '/img/39', true, 100, 20, '1');

-- Respuesta 40 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El monumento más famoso de la India es la Torre Eiffel.', '/img/40', false, 0, 20, '1');

-------

-- Pregunta 21
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el océano más profundo del mundo?', '/img/21', 1, '1', 3);

-- Respuesta 41
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El océano más profundo del mundo es el Océano Pacífico.', '/img/41', true, 100, 21, '1');

-- Respuesta 42 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El océano más profundo del mundo es el Océano Atlántico.', '/img/42', false, 0, 21, '1');

-- Pregunta 22
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es la montaña más alta del mundo?', '/img/22', 1, '1', 3);

-- Respuesta 43
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('La montaña más alta del mundo es el Monte Everest.', '/img/43', true, 100, 22, '1');

-- Respuesta 44 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('La montaña más alta del mundo es el Monte Kilimanjaro.', '/img/44', false, 0, 22, '1');

-- Pregunta 23
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el río más largo de América del Sur?', '/img/23', 1, '1', 3);

-- Respuesta 45
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El río más largo de América del Sur es el río Amazonas.', '/img/45', true, 100, 23, '1');

-- Respuesta 46 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El río más largo de América del Sur es el río Paraná.', '/img/46', false, 0, 23, '1');

-- Pregunta 24
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el desierto más grande del mundo?', '/img/24', 1, '1', 3);

-- Respuesta 47
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El desierto más grande del mundo es el Desierto del Sahara.', '/img/47', true, 100, 24, '1');

-- Respuesta 48 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El desierto más grande del mundo es el Desierto de Atacama.', '/img/48', false, 0, 24, '1');

-- Pregunta 25
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el instrumento musical más grande de la familia de las cuerdas?', '/img/25', 1, '1', 3);

-- Respuesta 49
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El instrumento musical más grande de la familia de las cuerdas es el contrabajo.', '/img/49', true, 100, 25, '1');

-- Respuesta 50 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El instrumento musical más grande de la familia de las cuerdas es el violín.', '/img/50', false, 0, 25, '1');

-- Pregunta 26
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el metal más conductor de electricidad?', '/img/26', 1, '1', 3);

-- Respuesta 51
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El metal más conductor de electricidad es el cobre.', '/img/51', true, 100, 26, '1');

-- Respuesta 52 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El metal más conductor de electricidad es el hierro.', '/img/52', false, 0, 26, '1');

-- Pregunta 27
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el elemento químico más abundante en el universo?', '/img/27', 1, '1', 3);

-- Respuesta 53
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El elemento químico más abundante en el universo es el hidrógeno.', '/img/53', true, 100, 27, '1');

-- Respuesta 54 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El elemento químico más abundante en el universo es el oxígeno.', '/img/54', false, 0, 27, '1');

-- Pregunta 28
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el país más grande del mundo por área territorial?', '/img/28', 1, '1', 3);

-- Respuesta 55
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El país más grande del mundo por área territorial es Rusia.', '/img/55', true, 100, 28, '1');

-- Respuesta 56 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El país más grande del mundo por área territorial es Canadá.', '/img/56', false, 0, 28, '1');

-- Pregunta 29
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el metal más pesado?', '/img/29', 1, '1', 3);

-- Respuesta 57
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El metal más pesado es el osmio.', '/img/57', true, 100, 29, '1');

-- Respuesta 58 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El metal más pesado es el plomo.', '/img/58', false, 0, 29, '1');

-- Pregunta 30
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es la hormona del estrés?', '/img/30', 1, '1', 3);

-- Respuesta 59
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('La hormona del estrés es el cortisol.', '/img/59', true, 100, 30, '1');

-- Respuesta 60 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('La hormona del estrés es la adrenalina.', '/img/60', false, 0, 30, '1');

-- Pregunta 31
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el planeta más cercano al Sol?', '/img/31', 1, '1', 4);

-- Respuesta 61
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El planeta más cercano al Sol es Mercurio.', '/img/61', true, 100, 31, '1');

-- Respuesta 62 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El planeta más cercano al Sol es Venus.', '/img/62', false, 0, 31, '1');

-- Pregunta 32
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el río más largo del mundo?', '/img/32', 1, '1', 4);

-- Respuesta 63
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El río más largo del mundo es el río Amazonas.', '/img/63', true, 100, 32, '1');

-- Respuesta 64 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El río más largo del mundo es el río Nilo.', '/img/64', false, 0, 32, '1');

-- Pregunta 33
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el desierto más seco del mundo?', '/img/33', 1, '1', 4);

-- Respuesta 65
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El desierto más seco del mundo es el Desierto de Atacama.', '/img/65', true, 100, 33, '1');

-- Respuesta 66 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El desierto más seco del mundo es el Desierto del Sahara.', '/img/66', false, 0, 33, '1');

-- Pregunta 34
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el instrumento musical más antiguo?', '/img/34', 1, '1', 4);

-- Respuesta 67
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El instrumento musical más antiguo es la flauta.', '/img/67', true, 100, 34, '1');

-- Respuesta 68 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El instrumento musical más antiguo es el tambor.', '/img/68', false, 0, 34, '1');

-- Pregunta 35
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el animal más lento del mundo?', '/img/35', 1, '1', 4);

-- Respuesta 69
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El animal más lento del mundo es el perezoso.', '/img/69', true, 100, 35, '1');

-- Respuesta 70 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El animal más lento del mundo es la tortuga.', '/img/70', false, 0, 35, '1');

---

-- Pregunta 36
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el país más poblado del mundo?', '/img/36', 1, '1', 4);

-- Respuesta 71
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El país más poblado del mundo es China.', '/img/71', true, 100, 36, '1');

-- Respuesta 72 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El país más poblado del mundo es India.', '/img/72', false, 0, 36, '1');

-- Pregunta 37
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el ave más grande del mundo?', '/img/37', 1, '1', 4);

-- Respuesta 73
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El ave más grande del mundo es el avestruz.', '/img/73', true, 100, 37, '1');

-- Respuesta 74 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El ave más grande del mundo es el cóndor.', '/img/74', false, 0, 37, '1');

-- Pregunta 38
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el océano más grande del mundo?', '/img/38', 1, '1', 4);

-- Respuesta 75
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El océano más grande del mundo es el Océano Pacífico.', '/img/75', true, 100, 38, '1');

-- Respuesta 76 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El océano más grande del mundo es el Océano Atlántico.', '/img/76', false, 0, 38, '1');

-- Pregunta 39
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el elemento químico más reactivo?', '/img/39', 1, '1', 4);

-- Respuesta 77
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El elemento químico más reactivo es el flúor.', '/img/77', true, 100, 39, '1');

-- Respuesta 78 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El elemento químico más reactivo es el helio.', '/img/78', false, 0, 39, '1');

-- Pregunta 40
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el monumento más famoso de Francia?', '/img/40', 1, '1', 4);

-- Respuesta 79
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El monumento más famoso de Francia es la Torre Eiffel.', '/img/79', true, 100, 40, '1');

-- Respuesta 80 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El monumento más famoso de Francia es el Coliseo.', '/img/80', false, 0, 40, '1');

-- Pregunta 41
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el metal más utilizado en la fabricación de baterías?', '/img/41', 1, '1', 1);

-- Respuesta 81
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El metal más utilizado en la fabricación de baterías es el litio.', '/img/81', true, 100, 41, '1');

-- Respuesta 82 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El metal más utilizado en la fabricación de baterías es el cobre.', '/img/82', false, 0, 41, '1');

-- Pregunta 42
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el órgano encargado de bombear la sangre en el cuerpo humano?', '/img/42', 1, '1', 1);

-- Respuesta 83
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El órgano encargado de bombear la sangre en el cuerpo humano es el corazón.', '/img/83', true, 100, 42, '1');

-- Respuesta 84 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El órgano encargado de bombear la sangre en el cuerpo humano es el pulmón.', '/img/84', false, 0, 42, '1');

-- Pregunta 43
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el metal más abundante en la corteza terrestre?', '/img/43', 1, '1', 1);

-- Respuesta 85
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El metal más abundante en la corteza terrestre es el aluminio.', '/img/85', true, 100, 43, '1');

-- Respuesta 86 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El metal más abundante en la corteza terrestre es el hierro.', '/img/86', false, 0, 43, '1');

-- Pregunta 44
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el satélite natural de la Tierra?', '/img/44', 1, '1', 1);

-- Respuesta 87
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El satélite natural de la Tierra es la Luna.', '/img/87', true, 100, 44, '1');

-- Respuesta 88 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El satélite natural de la Tierra es Marte.', '/img/88', false, 0, 44, '1');

-- Pregunta 45
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el metal más abundante en el cuerpo humano?', '/img/45', 1, '1', 1);

-- Respuesta 89
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El metal más abundante en el cuerpo humano es el calcio.', '/img/89', true, 100, 45, '1');

-- Respuesta 90 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El metal más abundante en el cuerpo humano es el hierro.', '/img/90', false, 0, 45, '1');

-- Pregunta 46
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el lago más profundo del mundo?', '/img/46', 1, '1', 1);

-- Respuesta 91
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El lago más profundo del mundo es el lago Baikal.', '/img/91', true, 100, 46, '1');

-- Respuesta 92 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El lago más profundo del mundo es el lago Titicaca.', '/img/92', false, 0, 46, '1');

-- Pregunta 47
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el ave nacional de Estados Unidos?', '/img/47', 1, '1', 1);

-- Respuesta 93
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El ave nacional de Estados Unidos es el águila calva.', '/img/93', true, 100, 47, '1');

-- Respuesta 94 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El ave nacional de Estados Unidos es el búho.', '/img/94', false, 0, 47, '1');

-- Pregunta 48
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el gas más abundante en la atmósfera terrestre?', '/img/48', 1, '1', 1);

-- Respuesta 95
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El gas más abundante en la atmósfera terrestre es el nitrógeno.', '/img/95', true, 100, 48, '1');

-- Respuesta 96 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El gas más abundante en la atmósfera terrestre es el oxígeno.', '/img/96', false, 0, 48, '1');

-- Pregunta 49
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el período orbital de la Tierra alrededor del Sol?', '/img/49', 1, '1', 1);

-- Respuesta 97
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El período orbital de la Tierra alrededor del Sol es de aproximadamente 365.25 días.', '/img/97', true, 100, 49, '1');

-- Respuesta 98 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El período orbital de la Tierra alrededor del Sol es de aproximadamente 30 días.', '/img/98', false, 0, 49, '1');

-- Pregunta 50
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el gas responsable del efecto invernadero?', '/img/50', 1, '1', 1);

-- Respuesta 99
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El gas responsable del efecto invernadero es el dióxido de carbono (CO2).', '/img/99', true, 100, 50, '1');

-- Respuesta 100 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El gas responsable del efecto invernadero es el oxígeno.', '/img/100', false, 0, 50, '1');

-- Pregunta 51
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el río más largo de África?', '/img/51', 1, '1', 1);

-- Respuesta 101
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El río más largo de África es el río Nilo.', '/img/101', true, 100, 51, '1');

-- Respuesta 102 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El río más largo de África es el río Congo.', '/img/102', false, 0, 51, '1');

-- Pregunta 52
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el animal más grande del planeta?', '/img/52', 1, '1', 1);

-- Respuesta 103
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El animal más grande del planeta es la ballena azul.', '/img/103', true, 100, 52, '1');

-- Respuesta 104 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El animal más grande del planeta es el elefante africano.', '/img/104', false, 0, 52, '1');

-- Pregunta 53
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es la montaña más alta del mundo?', '/img/53', 1, '1', 1);

-- Respuesta 105
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('La montaña más alta del mundo es el Monte Everest.', '/img/105', true, 100, 53, '1');

-- Respuesta 106 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('La montaña más alta del mundo es el Aconcagua.', '/img/106', false, 0, 53, '1');

-- Pregunta 54
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el país con más islas en el mundo?', '/img/54', 1, '1', 1);

-- Respuesta 107
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El país con más islas en el mundo es Suecia.', '/img/107', true, 100, 54, '1');

-- Respuesta 108 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El país con más islas en el mundo es Indonesia.', '/img/108', false, 0, 54, '1');

-- Pregunta 55
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el planeta más pequeño del sistema solar?', '/img/55', 1, '1', 1);

-- Respuesta 109
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El planeta más pequeño del sistema solar es Mercurio.', '/img/109', true, 100, 55, '1');

-- Respuesta 110 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El planeta más pequeño del sistema solar es Marte.', '/img/110', false, 0, 55, '1');

-- Pregunta 56
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el metal más valioso del mundo?', '/img/56', 1, '1', 1);

-- Respuesta 111
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El metal más valioso del mundo es el oro.', '/img/111', true, 100, 56, '1');

-- Respuesta 112 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El metal más valioso del mundo es el platino.', '/img/112', false, 0, 56, '1');

-- Pregunta 57
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el instrumento más antiguo del mundo?', '/img/57', 1, '1', 1);

-- Respuesta 113
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El instrumento más antiguo del mundo es la flauta de hueso.', '/img/113', true, 100, 57, '1');

-- Respuesta 114 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El instrumento más antiguo del mundo es el tambor.', '/img/114', false, 0, 57, '1');

-- Pregunta 58
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el océano más pequeño del mundo?', '/img/58', 1, '1', 1);

-- Respuesta 115
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El océano más pequeño del mundo es el Océano Ártico.', '/img/115', true, 100, 58, '1');

-- Respuesta 116 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El océano más pequeño del mundo es el Océano Índico.', '/img/116', false, 0, 58, '1');

-- Pregunta 59
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el animal más rápido del mundo?', '/img/59', 1, '1', 1);

-- Respuesta 117
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El animal más rápido del mundo es el guepardo.', '/img/117', true, 100, 59, '1');

-- Respuesta 118 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El animal más rápido del mundo es el halcón peregrino.', '/img/118', false, 0, 59, '1');

-- Pregunta 60
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el país más pequeño del mundo?', '/img/60', 1, '1', 1);

-- Respuesta 119
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El país más pequeño del mundo es el Vaticano.', '/img/119', true, 100, 60, '1');

-- Respuesta 120 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El país más pequeño del mundo es Mónaco.', '/img/120', false, 0, 60, '1');


-- Pregunta 61
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el continente más poblado?', '/img/61', 1, '1', 1);

-- Respuesta 121
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El continente más poblado es Asia.', '/img/121', true, 100, 61, '1');

-- Respuesta 122 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El continente más poblado es África.', '/img/122', false, 0, 61, '1');

-- Pregunta 62
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el metal más ligero?', '/img/62', 1, '1', 1);

-- Respuesta 123
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El metal más ligero es el litio.', '/img/123', true, 100, 62, '1');

-- Respuesta 124 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El metal más ligero es el aluminio.', '/img/124', false, 0, 62, '1');

-- Pregunta 63
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el desierto más grande del mundo?', '/img/63', 1, '1', 1);

-- Respuesta 125
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El desierto más grande del mundo es el Desierto del Sahara.', '/img/125', true, 100, 63, '1');

-- Respuesta 126 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El desierto más grande del mundo es el Desierto de Atacama.', '/img/126', false, 0, 63, '1');

-- Pregunta 64
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el instrumento musical más antiguo?', '/img/64', 1, '1', 1);

-- Respuesta 127
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El instrumento musical más antiguo es la flauta de hueso.', '/img/127', true, 100, 64, '1');

-- Respuesta 128 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El instrumento musical más antiguo es el tambor.', '/img/128', false, 0, 64, '1');

-- Pregunta 65
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el animal más fuerte del mundo?', '/img/65', 1, '1', 1);

-- Respuesta 129
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El animal más fuerte del mundo es el escarabajo rinoceronte.', '/img/129', true, 100, 65, '1');

-- Respuesta 130 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El animal más fuerte del mundo es el elefante africano.', '/img/130', false, 0, 65, '1');

-- Pregunta 66
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el metal más utilizado en la fabricación de latas?', '/img/66', 1, '1', 1);

-- Respuesta 131
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El metal más utilizado en la fabricación de latas es el aluminio.', '/img/131', true, 100, 66, '1');

-- Respuesta 132 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El metal más utilizado en la fabricación de latas es el acero.', '/img/132', false, 0, 66, '1');

-- Pregunta 67
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el océano más profundo del mundo?', '/img/67', 1, '1', 1);

-- Respuesta 133
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El océano más profundo del mundo es el Océano Pacífico.', '/img/133', true, 100, 67, '1');

-- Respuesta 134 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El océano más profundo del mundo es el Océano Atlántico.', '/img/134', false, 0, 67, '1');

-- Pregunta 68
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el país más extenso del mundo?', '/img/68', 1, '1', 1);

-- Respuesta 135
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El país más extenso del mundo es Rusia.', '/img/135', true, 100, 68, '1');

-- Respuesta 136 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El país más extenso del mundo es Canadá.', '/img/136', false, 0, 68, '1');

-- Pregunta 69
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el gas más ligero?', '/img/69', 1, '1', 1);

-- Respuesta 137
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El gas más ligero es el hidrógeno.', '/img/137', true, 100, 69, '1');

-- Respuesta 138 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El gas más ligero es el helio.', '/img/138', false, 0, 69, '1');

-- Pregunta 70
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el símbolo químico del oro?', '/img/70', 1, '1', 1);

-- Respuesta 139
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El símbolo químico del oro es Au.', '/img/139', true, 100, 70, '1');

-- Respuesta 140 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El símbolo químico del oro es Ag.', '/img/140', false, 0, 70, '1');


-- Pregunta 71
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el instrumento musical nacional de Japón?', '/img/71', 1, '1', 1);

-- Respuesta 141
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El instrumento musical nacional de Japón es el koto.', '/img/141', true, 100, 71, '1');

-- Respuesta 142 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El instrumento musical nacional de Japón es la guitarra.', '/img/142', false, 0, 71, '1');

-- Pregunta 72
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el océano más salado del mundo?', '/img/72', 1, '1', 1);

-- Respuesta 143
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El océano más salado del mundo es el Mar Muerto.', '/img/143', true, 100, 72, '1');

-- Respuesta 144 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El océano más salado del mundo es el Océano Pacífico.', '/img/144', false, 0, 72, '1');

-- Pregunta 73
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el país con más volcanes activos?', '/img/73', 1, '1', 1);

-- Respuesta 145
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El país con más volcanes activos es Indonesia.', '/img/145', true, 100, 73, '1');

-- Respuesta 146 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El país con más volcanes activos es Chile.', '/img/146', false, 0, 73, '1');

-- Pregunta 74
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el metal más denso?', '/img/74', 1, '1', 1);

-- Respuesta 147
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El metal más denso es el osmio.', '/img/147', true, 100, 74, '1');

-- Respuesta 148 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El metal más denso es el plomo.', '/img/148', false, 0, 74, '1');

-- Pregunta 75
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el río más largo de América del Sur?', '/img/75', 1, '1', 1);

-- Respuesta 149
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El río más largo de América del Sur es el río Amazonas.', '/img/149', true, 100, 75, '1');

-- Respuesta 150 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El río más largo de América del Sur es el río Paraná.', '/img/150', false, 0, 75, '1');

-- Pregunta 76
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el elemento químico más abundante en el universo?', '/img/76', 1, '1', 1);

-- Respuesta 151
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El elemento químico más abundante en el universo es el hidrógeno.', '/img/151', true, 100, 76, '1');

-- Respuesta 152 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El elemento químico más abundante en el universo es el oxígeno.', '/img/152', false, 0, 76, '1');

-- Pregunta 77
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es la montaña más alta de América?', '/img/77', 1, '1', 1);

-- Respuesta 153
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('La montaña más alta de América es el Monte McKinley (Denali).', '/img/153', true, 100, 77, '1');

-- Respuesta 154 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('La montaña más alta de América es el Aconcagua.', '/img/154', false, 0, 77, '1');

-- Pregunta 78
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el animal más veloz del mundo?', '/img/78', 1, '1', 1);

-- Respuesta 155
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El animal más veloz del mundo es el guepardo.', '/img/155', true, 100, 78, '1');

-- Respuesta 156 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El animal más veloz del mundo es el halcón peregrino.', '/img/156', false, 0, 78, '1');

-- Pregunta 79
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el país más poblado de Europa?', '/img/79', 1, '1', 1);

-- Respuesta 157
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El país más poblado de Europa es Rusia.', '/img/157', true, 100, 79, '1');

-- Respuesta 158 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El país más poblado de Europa es Alemania.', '/img/158', false, 0, 79, '1');

-- Pregunta 80
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el lago más profundo del mundo?', '/img/80', 1, '1', 1);

-- Respuesta 159
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El lago más profundo del mundo es el lago Baikal.', '/img/159', true, 100, 80, '1');

-- Respuesta 160 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El lago más profundo del mundo es el lago Superior.', '/img/160', false, 0, 80, '1');


-- Pregunta 81
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el instrumento musical nacional de Perú?', '/img/81', 1, '1', 2);

-- Respuesta 161
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El instrumento musical nacional de Perú es el charango.', '/img/161', true, 100, 81, '1');

-- Respuesta 162 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El instrumento musical nacional de Perú es la zampoña.', '/img/162', false, 0, 81, '1');

-- Pregunta 82
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el desierto más frío del mundo?', '/img/82', 1, '1', 2);

-- Respuesta 163
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El desierto más frío del mundo es el Desierto de McMurdo.', '/img/163', true, 100, 82, '1');

-- Respuesta 164 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El desierto más frío del mundo es el Desierto de Atacama.', '/img/164', false, 0, 82, '1');

-- Pregunta 83
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el país con más islas en el mundo?', '/img/83', 1, '1', 2);

-- Respuesta 165
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El país con más islas en el mundo es Suecia.', '/img/165', true, 100, 83, '1');

-- Respuesta 166 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El país con más islas en el mundo es Indonesia.', '/img/166', false, 0, 83, '1');

-- Pregunta 84
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el planeta más cercano al Sol?', '/img/84', 1, '1', 2);

-- Respuesta 167
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El planeta más cercano al Sol es Mercurio.', '/img/167', true, 100, 84, '1');

-- Respuesta 168 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El planeta más cercano al Sol es Venus.', '/img/168', false, 0, 84, '1');

-- Pregunta 85
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el metal más abundante en la corteza terrestre?', '/img/85', 1, '1', 2);

-- Respuesta 169
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El metal más abundante en la corteza terrestre es el aluminio.', '/img/169', true, 100, 85, '1');

-- Respuesta 170 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El metal más abundante en la corteza terrestre es el hierro.', '/img/170', false, 0, 85, '1');

-- Pregunta 86
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el río más largo de África?', '/img/86', 1, '1', 2);

-- Respuesta 171
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El río más largo de África es el río Nilo.', '/img/171', true, 100, 86, '1');

-- Respuesta 172 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El río más largo de África es el río Congo.', '/img/172', false, 0, 86, '1');

-- Pregunta 87
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el elemento químico más ligero?', '/img/87', 1, '1', 2);

-- Respuesta 173
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El elemento químico más ligero es el hidrógeno.', '/img/173', true, 100, 87, '1');

-- Respuesta 174 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El elemento químico más ligero es el helio.', '/img/174', false, 0, 87, '1');

-- Pregunta 88
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es la montaña más alta de África?', '/img/88', 1, '1', 2);

-- Respuesta 175
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('La montaña más alta de África es el Kilimanjaro.', '/img/175', true, 100, 88, '1');

-- Respuesta 176 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('La montaña más alta de África es el Monte Elbrus.', '/img/176', false, 0, 88, '1');

-- Pregunta 89
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el animal más grande del mundo?', '/img/89', 1, '1', 2);

-- Respuesta 177
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El animal más grande del mundo es la ballena azul.', '/img/177', true, 100, 89, '1');

-- Respuesta 178 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El animal más grande del mundo es el elefante africano.', '/img/178', false, 0, 89, '1');

-- Pregunta 90
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el país con más Patrimonios de la Humanidad declarados?', '/img/90', 1, '1', 2);

-- Respuesta 179
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El país con más Patrimonios de la Humanidad declarados es Italia.', '/img/179', true, 100, 90, '1');

-- Respuesta 180 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El país con más Patrimonios de la Humanidad declarados es España.', '/img/180', false, 0, 90, '1');



-- Pregunta 91
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el país con la mayor extensión territorial?', '/img/91', 1, '1', 3);

-- Respuesta 181
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El país con la mayor extensión territorial es Rusia.', '/img/181', true, 100, 91, '1');

-- Respuesta 182 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El país con la mayor extensión territorial es Canadá.', '/img/182', false, 0, 91, '1');

-- Pregunta 92
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el metal más resistente?', '/img/92', 1, '1', 3);

-- Respuesta 183
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El metal más resistente es el tungsteno.', '/img/183', true, 100, 92, '1');

-- Respuesta 184 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El metal más resistente es el acero.', '/img/184', false, 0, 92, '1');

-- Pregunta 93
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el océano más grande del mundo?', '/img/93', 1, '1', 3);

-- Respuesta 185
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El océano más grande del mundo es el Océano Pacífico.', '/img/185', true, 100, 93, '1');

-- Respuesta 186 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El océano más grande del mundo es el Océano Atlántico.', '/img/186', false, 0, 93, '1');

-- Pregunta 94
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el animal más pequeño del mundo?', '/img/94', 1, '1', 3);

-- Respuesta 187
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El animal más pequeño del mundo es el colibrí abeja.', '/img/187', true, 100, 94, '1');

-- Respuesta 188 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El animal más pequeño del mundo es la araña diminuta.', '/img/188', false, 0, 94, '1');

-- Pregunta 95
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el país con más ganadores del Premio Nobel?', '/img/95', 1, '1', 3);

-- Respuesta 189
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El país con más ganadores del Premio Nobel es Estados Unidos.', '/img/189', true, 100, 95, '1');

-- Respuesta 190 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El país con más ganadores del Premio Nobel es Suecia.', '/img/190', false, 0, 95, '1');

-- Pregunta 96
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el metal más utilizado en la fabricación de joyas?', '/img/96', 1, '1', 3);

-- Respuesta 191
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El metal más utilizado en la fabricación de joyas es el oro.', '/img/191', true, 100, 96, '1');

-- Respuesta 192 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El metal más utilizado en la fabricación de joyas es la plata.', '/img/192', false, 0, 96, '1');

-- Pregunta 97
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el océano más profundo del mundo?', '/img/97', 1, '1', 3);

-- Respuesta 193
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El océano más profundo del mundo es el Océano Pacífico.', '/img/193', true, 100, 97, '1');

-- Respuesta 194 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El océano más profundo del mundo es el Océano Atlántico.', '/img/194', false, 0, 97, '1');

-- Pregunta 98
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el ave más grande del mundo?', '/img/98', 1, '1', 3);

-- Respuesta 195
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El ave más grande del mundo es el avestruz.', '/img/195', true, 100, 98, '1');

-- Respuesta 196 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El ave más grande del mundo es el cóndor de los Andes.', '/img/196', false, 0, 98, '1');

-- Pregunta 99
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el país con más variedades de quesos?', '/img/99', 1, '1', 3);

-- Respuesta 197
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El país con más variedades de quesos es Francia.', '/img/197', true, 100, 99, '1');

-- Respuesta 198 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El país con más variedades de quesos es Italia.', '/img/198', false, 0, 99, '1');

-- Pregunta 100
INSERT INTO question (name, file_url, question_category_id, created_by, t_par_question_type_id)
VALUES ('¿Cuál es el continente con más países?', '/img/100', 1, '1', 3);

-- Respuesta 199
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El continente con más países es África.', '/img/199', true, 100, 100, '1');

-- Respuesta 200 (Falsa)
INSERT INTO question_response (name, file_url, is_valid, percentage, question_id, created_by)
VALUES ('El continente con más países es Europa.', '/img/200', false, 0, 100, '1');

