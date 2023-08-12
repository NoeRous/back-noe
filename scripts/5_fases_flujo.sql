-----phase
INSERT INTO public.phase ("name",description,date_init,date_end,date_publication_result,score,score_min_pass,"sequence",created_at,created_by,updated_at,updated_by,announcement_id,role_id,name_action,icon_action) VALUES
	 ('POSTULACIÓN','POSTULACIÓN','2023-07-01 00:00:00','2023-07-30 00:00:00','2023-07-30 00:00:00',0,0,1,'2023-01-01 00:00:00',1,'2023-01-01 00:00:00',NULL,1,2,'Ver Postulación','folder_open'),
	 ('EXAMEN TECNICO','EXAMEN TECNICO','2023-07-01 00:00:00','2023-07-30 00:00:00','2023-07-30 00:00:00',50,51,2,'2023-01-01 00:00:00',1,'2023-01-01 00:00:00',NULL,1,3,'Ir a Examen','folder_close'),
	 ('CALIFICACIÓN DE MERITOS','CALIFICACIÓN DE MERITOS','2023-07-01 00:00:00','2023-07-30 00:00:00','2023-07-30 00:00:00',50,51,3,'2023-01-01 00:00:00',1,'2023-01-01 00:00:00',NULL,1,4,'Subir meritos','upload');
	

--------postulation_state----
INSERT INTO public.postulation_state ("name",description) VALUES
	 ('EN PROCESO','EL ESTADO ES PARA IDENTIFICAR QUE ESTA EN PROCESO');
	
INSERT INTO public.postulation_state ("name",description) VALUES
	 ('CALIFICO','EL ESTADO ES PARA IDENTIFICAR QUE CALIFICO');
	
INSERT INTO public.postulation_state ("name",description) VALUES
	 ('NO CALIFICO','EL ESTADO ES PARA IDENTIFICAR QUE NO CALIFICO');

INSERT INTO public.phase_sequence (created_at,created_by,updated_at,updated_by,current_phase_id,next_phase_id) VALUES
	 ('2023-01-01 00:00:00',1,'2023-01-01 00:00:00',1,1,2),
	 ('2023-01-01 00:00:00',1,'2023-01-01 00:00:00',1,2,3);
