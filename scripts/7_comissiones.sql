----------SEDES prueba

INSERT INTO public.commission_headquarter (name, address, created_at, created_by, updated_at, updated_by)
VALUES
    ('Sede 1', 'av civica', '2023-08-08 00:00:00', 1, '2023-08-08 00:00:00', 1),
    ('Sede 2', 'av civica', '2023-08-08 00:00:00', 1, '2023-08-08 00:00:00', 1),
    ('Sede 3', 'av civica', '2023-08-08 00:00:00', 1, '2023-08-08 00:00:00', 1),
    ('Sede 4', 'av civica', '2023-08-08 00:00:00', 1, '2023-08-08 00:00:00', 1),
    ('Sede 5', 'av civica', '2023-08-08 00:00:00', 1, '2023-08-08 00:00:00', 1),
    ('Sede 6', 'av civica', '2023-08-08 00:00:00', 1, '2023-08-08 00:00:00', 1),
    ('Sede 7', 'av civica', '2023-08-08 00:00:00', 1, '2023-08-08 00:00:00', 1),
    ('Sede 8', 'av civica', '2023-08-08 00:00:00', 1, '2023-08-08 00:00:00', 1),
    ('Sede 9', 'av civica', '2023-08-08 00:00:00', 1, '2023-08-08 00:00:00', 1),
    ('Sede 10', 'av civica', '2023-08-08 00:00:00', 1, '2023-08-08 00:00:00', 1);


--------comisiones
INSERT INTO public.commission (created_at,created_by,updated_at,updated_by,deleted_at,deleted_by,phase_id,commission_headquarter_id,"name","date") VALUES
	 ('2023-08-08 00:00:00',1,'2023-08-08 00:00:00',1,NULL,NULL,1,1,'Comision de fase de postulacion cargo 1 ','2023-09-01 00:00:00'),
	 ('2023-08-08 00:00:00',1,'2023-08-08 00:00:00',1,NULL,NULL,2,1,'Comision de fase de evaluacion cargo 1','2023-09-15 00:00:00'),
	 ('2023-08-08 00:00:00',1,'2023-08-08 00:00:00',1,NULL,NULL,3,1,'Comision de fase de calificador de meritos cargo 1 ','2023-09-18 00:00:00');

-----commision interna 
INSERT INTO public.commission_internal (name_role,created_at,created_by,updated_at,updated_by,deleted_at,deleted_by,commission_id,person_id) VALUES
	 ('presidente','2023-08-08 00:00:00',1,'2023-08-08 00:00:00',1,NULL,NULL,1,1),
	 ('actas','2023-08-08 00:00:00',1,'2023-08-08 00:00:00',1,NULL,NULL,2,1),
	 ('vizor','2023-08-08 00:00:00',1,'2023-08-08 00:00:00',1,NULL,NULL,3,1);

	
-----comision asignacion
INSERT INTO public.commission_assigned (act_init_date,act_end_date,created_at,created_by,updated_at,updated_by,deleted_at,deleted_by,commission_id,announcement_institution_position_id) VALUES
	 ('2023-09-01 08:00:00','2023-09-01 11:00:00','2023-08-08 00:00:00',1,'2023-08-08 00:00:00',1,NULL,NULL,1,1),
	 ('2023-09-01 08:00:00','2023-09-01 11:00:00','2023-08-08 00:00:00',1,'2023-08-08 00:00:00',1,NULL,NULL,2,1),
	 ('2023-09-01 08:00:00','2023-09-01 11:00:00','2023-08-08 00:00:00',1,'2023-08-08 00:00:00',1,NULL,NULL,3,1);

--- representante externo 

INSERT INTO public.representative (identity_card,created_at,created_by,updated_at,updated_by,deleted_at,deleted_by,personal_number,identity_card_complement,last_name,mothers_last_name,husband_last_name,firts_name,second_name) VALUES
	 (123456789,'2023-05-05 00:00:00',1,'2023-05-05 00:00:00',1,NULL,NULL,'555555',NULL,'prueba',NULL,NULL,'naomi',NULL);

-----comision externa 

INSERT INTO public.commission_external (name_role,created_at,created_by,updated_at,updated_by,deleted_at,deleted_by,commission_id,representative_id,name_institution) VALUES
	 ('presidente','2023-01-01 00:00:00',1,'2023-01-01 00:00:00',1,NULL,NULL,1,1,'CTEUB');
