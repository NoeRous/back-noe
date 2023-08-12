---menus

INSERT INTO public.menu (name,url,icon,"label",menu_id,"group") VALUES
	 ('Dashboard','/admin/dashboard','home',NULL,NULL,'Menú prinipal'),
	 ('Postulación','/admin/postulation','book',NULL,NULL,'Menú prinipal'),
	 ('Bandeja','/admin/inbox','inbox',NULL,NULL,'Administrar Postulaciones'),
	 ('Seguimiento','/admin/tracking','remove_red_eye',NULL,NULL,'Administrar Postulaciones'),
	 ('Postulantes','/admin/applicant','person',NULL,NULL,'Administrar Postulaciones'),
	 ('Examenes','/admin/test','folder_open',NULL,NULL,'Administrar'),
	 ('Categorias','/admin/question-category','category',NULL,NULL,'Biblioteca de preguntas'),
	 ('Banco de Preguntas','/admin/question','library_books',NULL,NULL,'Biblioteca de preguntas'),
	 ('Convocatorias','/admin/announcement','announcement',NULL,NULL,'Administrar'),
	 ('Instituciones','/admin/institution','school',NULL,NULL,'Parametricas');
INSERT INTO public.menu (name,url,icon,"label",menu_id,"group") VALUES
	 ('Tipos de Institución','/admin/institution-type','local_library',NULL,NULL,'Parametricas'),
	 ('Cargos','/admin/position','work',NULL,NULL,'Parametricas'),
	 ('Tipos de Cargos','/admin/position-type','group_work',NULL,NULL,'Parametricas'),
	 ('Instituciones y Cargos','/admin/institution-position','work_outline',NULL,NULL,'Parametricas'),
	 ('Usuarios','/admin/user','supervised_user_circle',NULL,NULL,'Roles y Permisos'),
	 ('Roles y menus','/admin/role-menu','how_to_reg',NULL,NULL,'Roles y Permisos'),
	 ('Empleados','/admin/employee','accessibility_new',NULL,NULL,'Administrar');

	
	-----roles menus
	
INSERT INTO public.role_menu ("sequence",deleted_at,role_id,menu_id) VALUES
	 (NULL,NULL,1,1),
	 (NULL,NULL,1,2),
	 (NULL,NULL,2,3),
	 (NULL,NULL,2,4),
	 (NULL,NULL,2,5),
	 (NULL,NULL,3,5),
	 (NULL,NULL,3,4),
	 (NULL,NULL,3,3),
	 (NULL,NULL,4,5),
	 (NULL,NULL,4,4);
INSERT INTO public.role_menu ("sequence",deleted_at,role_id,menu_id) VALUES
	 (NULL,NULL,4,3),
	 (NULL,NULL,5,5),
	 (NULL,NULL,5,4),
	 (NULL,NULL,5,3),
	 (NULL,NULL,6,5),
	 (NULL,NULL,6,4),
	 (NULL,NULL,6,3),
	 (NULL,NULL,7,5),
	 (NULL,NULL,7,4),
	 (NULL,NULL,7,3);
INSERT INTO public.role_menu ("sequence",deleted_at,role_id,menu_id) VALUES
	 (NULL,NULL,8,5),
	 (NULL,NULL,8,4),
	 (NULL,NULL,8,3),
	 (NULL,NULL,9,5),
	 (NULL,NULL,9,4),
	 (NULL,NULL,9,3),
	 (NULL,NULL,10,5),
	 (NULL,NULL,10,4),
	 (NULL,NULL,10,3),
	 (NULL,NULL,11,6);
INSERT INTO public.role_menu ("sequence",deleted_at,role_id,menu_id) VALUES
	 (NULL,NULL,11,7),
	 (NULL,NULL,11,8),
	 (NULL,NULL,11,9),
	 (NULL,NULL,11,10),
	 (NULL,NULL,11,11),
	 (NULL,NULL,11,12),
	 (NULL,NULL,11,13),
	 (NULL,NULL,11,14),
	 (NULL,NULL,12,5),
	 (NULL,NULL,12,4);
INSERT INTO public.role_menu ("sequence",deleted_at,role_id,menu_id) VALUES
	 (NULL,NULL,13,5),
	 (NULL,NULL,13,4),
	 (NULL,NULL,14,15),
	 (NULL,NULL,14,16),
	 (NULL,NULL,14,10),
	 (NULL,NULL,14,13),
	 (NULL,NULL,14,12),
	 (NULL,NULL,14,11),
	 (NULL,NULL,14,14),
	 (NULL,NULL,14,1);
INSERT INTO public.role_menu ("sequence",deleted_at,role_id,menu_id) VALUES
	 (NULL,NULL,2,1),
	 (NULL,NULL,14,17),
	 (NULL,NULL,11,17);
