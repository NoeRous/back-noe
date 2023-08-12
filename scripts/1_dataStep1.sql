----- t_par_institution_type
INSERT INTO t_par_institution_type (name,shortname, description) VALUES ('UNIVERSIDAD PEDAGóGICA','UP','UNIVERSIDAD PEDAGOGICA');
INSERT INTO t_par_institution_type (name,shortname, description) VALUES ('UNIDAD ACADÉMICA','UA','UNIDAD ACADEMICA');
INSERT INTO t_par_institution_type (name,shortname, description) VALUES ('ESCUELA SUPERIOR DE FORMACIÓN DE MAESTROS','ESFM','ESCUELA SUPERIOR DE FORMACIÓN DE MAESTROS');

----- INSTITUTION
INSERT INTO institution (code,t_par_institution_type_id,"name",description,institution_id,code_normal,code_ue,t_par_municipality_id,address,email,phone,coordinate,date_creation,state,image,created_at,created_by,updated_at,updated_by) VALUES
	 ('100',1,'UNIVERSIDAD PEDAGÓGICA','Universidad Pedagógica',NULL,'100','00001170',3,'','','','[-68.12788158859432,-16.5063621942177]','0001-01-01 00:00:00',true,'NULL','1900-01-21 15:17:14','1','1900-01-21 15:17:14','1'),
	 ('101',3,'MARISCAL SUCRE','Escuela Superior de Formación de Maestras y Maestros Mariscal Sucre',NULL,'101','00001050',3,'Av. del Maestro N° 331','esfm_sucre@minedu.gob.bo','1','[-65.26086808194049,-19.038995933888454]','1909-06-06 00:00:00',true,'101.webp','1900-01-21 15:17:14','1','2022-12-12 11:35:03.983972','1'),
	 ('102',3,'SIMON BOLIVAR (CORORO)','Escuela Superior de Formación de Maestras y Maestros Simón Bolívar',NULL,'102','00000379',18,'Plaza 25 de Mayo - Cororo','esfm_cororo@minedu.gob.bo','1','[-64.90384381840971, -19.069762668379823]','1966-05-26 00:00:00',true,'102.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('103',3,'FRANZ TAMAYO','Escuela Superior de Formación de Maestras y Maestros Franz Tamayo',NULL,'103','00000574',23,'Av. Gualberto Villaroel, Zona Pampas Iguera','esfm_cerrano@minedu.gob.bo','1','[-64.33138913867856,-19.115323294169922]','1961-01-14 00:00:00',true,'103.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('205',3,'DE EDUCACION FISICA Y DEPORTES ANTONIO JOSE DE SUCRE','Escuela Superior de Formación de Maestras y Maestros de Educación Física y Deportes Antonio José de Sucre',NULL,'205','00000503',30,'Zona Miraflores, Calle Nicaragua y Francisco de Miranda N° 2135','esfm_efisica@minedu.gob.bo','1','[-68.11891362999748,-16.504090007421397]','1931-02-03 00:00:00',true,'205.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('204',3,'MCAL.  ANDRES DE SANTA CRUZ Y CALAHUMANA','Escuela Superior de Formación de Maestras y Maestros Mcal.  Andrés de Santa Cruz y Calahumana',NULL,'204','00000500',30,'Zona Munaypata, Calle 31 de Julio s/n (lado UE 25 de Mayo)','esmf_calahumana@minedu.gob.bo','1','[-68.15600466090805,-16.488042546491275]','1958-11-24 00:00:00',true,'204.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('201',3,'SIMON BOLIVAR','Escuela Superior de Formación de Maestras y Maestros Simón Bolívar',NULL,'201','00000997',30,'Zona Alto Obrajes, Av. del Maestro','esfm_sbolivar@minedu.gob.bo','1','[-68.11287932957012,-16.518243459995738]','1917-05-24 00:00:00',true,'201.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('206',3,'TECNOLÓGICO Y HUMANÍSTICO EL ALTO','Escuela Superior de Formación de Maestras y Maestros Tecnológico y Humanístico El Alto',NULL,'206','00000999',34,'El Alto, Zona Alto Chijini, Av. Buenos Aires s/n','esfm_elalto@minedu.gob.bo','1','[-68.22283850029763,-16.556962264064165]','2006-03-06 00:00:00',true,'206.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('202',3,'WARISATA','Escuela Superior de Formación de Maestras y Maestros Warisata',NULL,'202','00000650',36,'Warisata, Av. Avelino Siñani (cerca Plaza Principal)','esfm_warisata@minedu.gob.bo','1','[-68.66181435315599,-15.972693500588823]','1937-05-16 00:00:00',true,'202.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('203',3,'SANTIAGO DE HUATA','Escuela Superior de Formación de Maestras y Maestros Santiago de Huata',NULL,'203','00000454',40,'Av. Normalista N° 777','esfmsh@minedu.gob.bo','1','[-68.81316513146862,-16.053870605547186]','1938-03-09 00:00:00',true,'203.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1');
INSERT INTO institution (code,t_par_institution_type_id,"name",description,institution_id,code_normal,code_ue,t_par_municipality_id,address,email,phone,coordinate,date_creation,state,image,created_at,created_by,updated_at,updated_by) VALUES
	 ('209',2,'UNIDAD ACADEMICA - ANCOCAGUA (ESFM-MCAL.ANDRES DE SANTA CRUZ Y CALAHUMANA)','Escuela Superior de Formación de Maestras y Maestros Mcal.  Andrés de Santa Cruz y Calahumana',8,'204','00001150',92,'Plaza principal de Pucarani (a 10 minutos de distancia)','ua_ancocagua@minedu.gob.bo','1','[-68.45449334327768,-16.430867759155507]','2001-03-26 00:00:00',true,'209.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('207',3,'VILLA AROMA','Escuela Superior de Formación de Maestras y Maestros Villa Aroma',NULL,'207','00000998',95,'Localidad Lahuachaca, Distrito Sica-Sica','esfm_lahuachaca@minedu.gob.bo','1','[-67.68386380200147,-17.3762703488698]','2005-12-15 00:00:00',true,'207.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('210',2,'UNIDAD ACADEMICA - CORPA (ESFM - MCAL. ANDRES DE SANTA CRUZ Y CALAHUMANA)','Escuela Superior de Formación de Maestras y Maestros Mcal.  Andrés de Santa Cruz y Calahumana',8,'204','00001151',114,'Localidad Corpa (lado UE Landini)','ua_corpa@minedu.gob.bo','1','[-68.86642875066993,-16.67563450160157]','2008-10-13 00:00:00',true,'210.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('208',2,'UNIDAD ACADEMICA - CARANAVI (ESFM - SIMON BOLIVAR)','Escuela Superior de Formación de Maestras y Maestros Simón Bolívar',8,'201','00001041',115,'Caranavi, Villa Yara','ua_caranavi@minedu.gob.bo','1','[-67.55650873735361,-15.835812857656888]','2009-01-14 00:00:00',true,'208.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('306',2,'UNIDAD ACADEMICA - CERCADO (SIMON RODRIGUEZ)','Escuela Superior de Formación de Maestras y Maestros Simón Rodríguez',17,'305','00001153',117,'Av. Robles N° 3131 (Prolongación Av. Santa Cruz)','ua_cercado@minedu.gob.bo','1','[-66.15487510771612, -17.356767152033086]','2007-03-08 00:00:00',true,'306.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('308',2,'UNIDAD ACADEMICA - TARATA (SIMON RODRIGUEZ)','Escuela Superior de Formación de Maestras y Maestros Simón Rodríguez',17,'305','00001156',125,'Av. Igualdad (frente Instituto Agropecuario Tecnológico)','ua_tarata@minedu.gob.bo','1','[-66.02570520010785, -17.62347782909611]','2008-10-10 00:00:00',true,'308.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('301',3,'ISMAEL MONTES','Escuela Superior de Formación de Maestras y Maestros Ismael Montes',NULL,'301','00000455',129,'Localidad Challwamayu, Av. Julio Camacho s/n','esfm_imontes@minedu.gob.bo','1','[-65.59327136942267, -17.560695285563625]','1961-02-18 00:00:00',true,'301.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('305',3,'SIMON RODRIGUEZ','Escuela Superior de Formación de Maestras y Maestros Simón Rodríguez',NULL,'305','00001016',142,'Zona Illataco, Paucarpata parada Trufi 211','esfm_srodriguez@minedu.gob.bo','1',' [-66.29694551988932, -17.36314790459362]','2007-03-08 00:00:00',true,'305.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('309',2,'UNIDAD ACADEMICA - SACABA (SIMON RODRIGUEZ)','Escuela Superior de Formación de Maestras y Maestros Simón Rodríguez',17,'305','00001155',143,'Catachilla Baja, Zona Villa Obrajes','ua_sacaba@minedu.gob.bo','1','[-66.0104121126851, -17.41166574761372]','2007-03-08 00:00:00',true,'309.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('307',2,'UNIDAD ACADEMICA - VILLA TUNARI (SIMON RODRIGUEZ)','Escuela Superior de Formación de Maestras y Maestros Simón Rodríguez',17,'305','00001154',145,'Carretera a Chipiriri Km. 6 1/2','ua_vtunari@minedu.gob.bo','1','[-65.3982974286868, -16.924247469519297]','2008-09-06 00:00:00',true,'307.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1');
INSERT INTO institution (code,t_par_institution_type_id,"name",description,institution_id,code_normal,code_ue,t_par_municipality_id,address,email,phone,coordinate,date_creation,state,image,created_at,created_by,updated_at,updated_by) VALUES
	 ('302',3,'MANUEL ASCENCIO VILLARROEL','Escuela Superior de Formación de Maestras y Maestros Manuel Ascencio Villarroel',NULL,'302','00000691',158,'Camino Antiguo a Santa Cruz, Cruce A. Paracaya','esfm_paracaya@minedu.gob.bo','1',' [-65.85924674559905, -17.503953716395657]','1948-07-16 00:00:00',true,'302.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('401',3,'ANGEL MENDOZA JUSTINIANO','Escuela Superior de Formación de Maestras y Maestros Ángel Mendoza Justiniano',NULL,'401','00001006',165,'Tte. Villa y Washington s/n','esfm_amendoza@minedu.gob.bo','1','[-67.11571555643806, -17.95135079688193]','1973-10-22 00:00:00',true,'401.webp ','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('402',3,'CARACOLLO','Escuela Superior de Formación de Maestras y Maestros Caracollo',NULL,'402','00000456',166,'Final Av. Bernal, extremo Este','esfm_bortuno@minedu.gob.bo','1','[-67.21571950908353, -17.633937058523788]','1964-11-28 00:00:00',true,'402.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('405',2,'UNIDAD ACADEMICA - CORQUE (ESFM - ANGEL MENDOZA)','Escuela Superior de Formación de Maestras y Maestros Ángel Mendoza Justiniano',22,'401','00001159',171,'Sector Oeste (detrás de las Iglesia colonial de Corque)','ua_corque@minedu.gob.bo','1','[-67.68417523790339, -18.350391420032533]','2009-12-01 00:00:00',true,'405.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('403',2,'UNIDAD ACADEMICA - MACHACAMARCA (ESFM - CARACOLLO)','Escuela Superior de Formación de Maestras y Maestros Caracollo',23,'402','00001028',182,'Av. Oruro s/n ex Colegio México','ua_machacamarca@minedu.gob.bo','1','[-67.02383036162274, -18.176043547809275]','2008-07-04 00:00:00',true,'403.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('404',2,'UNIDAD ACADEMICA - PAMPA AULLAGAS (ESFM - CARACOLLO)','Escuela Superior de Formación de Maestras y Maestros Caracollo',23,'402','00001043',184,'Pampa Aullagas (cerca Cementerio General)','ua_pampaaullagas@minedu.gob.bo','1','[-67.05866074722395, -19.200649147568384]','2009-06-08 00:00:00',true,'404.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('503',3,'MCAL. ANDRES DE SANTA CRUZ','Escuela Superior de Formación de Maestras y Maestros Mcal. Andrés de Santa Cruz',NULL,'503','00000453',202,'Localidades Aymaya y Chayanta','esfm_chayanta@minedu.gob.bo','1','[-66.45366792666452, -18.45478252706881]','1971-01-04 00:00:00',true,'503.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('501',3,'EDUARDO AVAROA','Escuela Superior de Formación de Maestras y Maestros Eduardo Avaroa',NULL,'501','00001009',202,'Final 17 de Agosto esquina Av. las Banderas','esfm_eavaroa@minedu.gob.bo','1','[-65.75259849483479, -19.57191814024631]','1985-04-01 00:00:00',true,'501.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('507',2,'UNIDAD ACADEMICA - SAN LUIS DE SACACA (ESFM - MCAL. ANDRES DE SANTA CRUZ)','Escuela Superior de Formación de Maestras y Maestros Mcal. Andrés de Santa Cruz',29,'503','00001015',218,'Av. Ejercito y Tarapaca','ua_sacaca@minedu.gob.bo','1','[-66.3907487019461, -18.072128063973167]','1967-12-12 00:00:00',true,'507.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('506',2,'UNIDAD ACADEMICA - ATOCHA (ESFM - EDUARDO AVAROA)','Escuela Superior de Formación de Maestras y Maestros Eduardo Avaroa',27,'501','00001024',221,'Distrito Atocha Telamayu Barrio Magisterio lado del Estadio','ua_atocha@minedu.gob.bo','1','[-66.22454270013918, -20.945789246993133]','2008-07-04 00:00:00',true,'506.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1');
INSERT INTO institution (code,t_par_institution_type_id,"name",description,institution_id,code_normal,code_ue,t_par_municipality_id,address,email,phone,coordinate,date_creation,state,image,created_at,created_by,updated_at,updated_by) VALUES
	 ('505',3,'JOSE DAVID BERRIOS','Escuela Superior de Formación de Maestras y Maestros José David Berríos',NULL,'505','00000377',229,'Calle Potosí final s/n, Localidad Caiza "D"','esfm_caizad@minedu.gob.bo','1','[-65.65031589523048, -20.00600051806732]','1938-05-23 00:00:00',true,'505.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('502',3,'FRANZ TAMAYO','Escuela Superior de Formación de Maestras y Maestros Franz Tamayo',NULL,'502','00001008',235,'Calle Pando s/n entre D. Campos y R. Pabón','esfm_llica@minedu.gob.bo','1','[-68.24795273665853, -19.85214708830538]','1961-03-22 00:00:00',true,'502.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('602',2,'UNIDAD ACADEMICA - TARIJA (ESFM - JUAN MISAEL SARACHO)','Escuela Superior de Formación de Maestras y Maestros Juan Misael Saracho',33,'601','00001034',239,'Av. Las Americas entre Calles Mendez y Suipacha','ua_tarija@minedu.gob.bo','1','[-64.80921973750243, -21.590574228399547]','2008-08-19 00:00:00',true,'602.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('603',2,'UNIDAD ACADEMICA - GRAN CHACO (ESFM - JUAN MISAEL SARACHO)','Escuela Superior de Formación de Maestras y Maestros Juan Misael Saracho',33,'601','00001035',242,'Localidad Caiza Provincia Gran Chaco','ua_granchaco@minedu.gob.bo','1','[-63.55437446436069, -21.802136690884492]','2008-08-19 00:00:00',true,'603.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('601',3,'JUAN MISAEL SARACHO (CANASMORO)','Escuela Superior de Formación de Maestras y Maestros Juan Misael Saracho',NULL,'601','00000996',247,'Comunidad Canasmoro a 23 Km. de la Ciudad','esfm_saracho@minedu.gob.bo','1','[-64.75058289852733, -21.356735399002783]','1938-04-25 00:00:00',true,'601.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('701',3,'ENRIQUE FINOT','Escuela Superior de Formación de Maestras y Maestros Enrique Finot',NULL,'701','00001005',250,'Av. San Martin y 3º Anillo, Z. Equipetrol','esfm_efinot@minedu.gob.bo','1','[-63.195348774377564, -17.763765416716268]','1959-03-30 00:00:00',true,'701.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('703',3,'RAFAEL CHAVEZ ORTIZ','Escuela Superior de Formación de Maestras y Maestros Rafael Chávez Ortiz',NULL,'703','00001007',267,'Final C. Tarija s/n','esfm_portachuelo@minedu.gob.bo','1','[-63.39822112264773, -17.350739816714903]','1941-02-16 00:00:00',true,'703.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('702',3,'PLURIETNICA DEL ORIENTE Y CHACO','Escuela Superior de Formación de Maestras y Maestros Pluriétnica del Oriente y Chaco',NULL,'702','00001010',272,'Fincal C. Petrolera s/n','esfm_plurietnica@minedu.gob.bo','1','[-63.51282714792145, -20.037538688051008]','1994-10-27 00:00:00',true,'702.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('707',2,'UNIDAD ACADEMICA - CHARAGUA (ESFM - PLURIETNICA DEL ORIENTE Y CHACO)','Escuela Superior de Formación de Maestras y Maestros Pluriétnica del Oriente y Chaco',37,'702','00001042',275,'Av. José Ugarte (Altura del Rebalse)','ua_charagua@minedu.gob.bo','1','[-63.166079590537144, -19.78150412960008]','2009-08-24 00:00:00',true,'707.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('705',2,'UNIDAD ACADEMICA - VALLE GRANDE (ESFM - ENRIQUE FINOT)','Escuela Superior de Formación de Maestras y Maestros Enrique Finot',36,'701','00001152',278,'Av. Ejercito s/n','ua_vallegrande@minedu.gob.bo','1','[-64.09559970934593, -18.484018491726506]','2010-03-22 00:00:00',true,'705.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1');
INSERT INTO institution (code,t_par_institution_type_id,"name",description,institution_id,code_normal,code_ue,t_par_municipality_id,address,email,phone,coordinate,date_creation,state,image,created_at,created_by,updated_at,updated_by) VALUES
	 ('706',2,'UNIDAD ACADEMICA - SAN JULIAN (ESFM - RAFAEL CHAVEZ ORTIZ)','Escuela Superior de Formación de Maestras y Maestros Rafael Chávez Ortiz',38,'703','00001027',295,'Barrio 25 de mayo  s/n (Cerca a la UE Santa Clara)','ua_sanjulian@minedu.gob.bo','1','[-62.60727805144373, -16.90789205413293]','2008-06-20 00:00:00',true,'706.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('704',3,'MULTIETNICA INDIGENA DE CONCEPCION','Escuela Superior de Formación de Maestras y Maestros Multiétnica Indígena de Concepción',NULL,'704','00000957',296,'Concepción, Comunidad el Porvenir','esfm_concepcion@minedu.gob.bo','1','[-62.00575992498332, -16.14328375555335]','2005-10-18 00:00:00',true,'704.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('801',3,'CLARA PARADA DE PINTO','Escuela Superior de Formación de Maestras y Maestros Clara Parada de Pinto',NULL,'801','00000838',306,'Av. José Shiriqui, Urbanización Palermo s/n','esfm_clarapinto@minedu.gob.bo','1','[-64.88377514021654, -14.813472379795819]','1971-04-12 00:00:00',true,'801.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('802',3,'RIBERALTA','Escuela Superior de Formación de Maestras y Maestros Riberalta',NULL,'802','00000378',309,'Av. Heroes del Chaco Nº 528','esfm_riberalta@minedu.gob.bo','1','[-66.06062780887521, -11.003282220365868]','1960-04-01 00:00:00',true,'802.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('804',2,'UNIDAD ACADEMICA - LORENZA CONGO (ESFM - CLARA PARADA DE PINTO)','Escuela Superior de Formación de Maestras y Maestros Clara Parada de Pinto',43,'801','00001157',316,'C. Moperita entre Calles Beni y Sargento Pesoa','uam.lorenzacongo2018@gmail.com','1','[-65.64268663871898, -14.989654921601788]','2009-10-13 00:00:00',true,'804.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('902',2,'UNIDAD ACADEMICA - COBIJA (ESFM - PUERTO RICO)','Escuela Superior de Formación de Maestras y Maestros Puerto Rico',46,'901','00001029',327,'Barrio Portuguez, Ex Cacique','uacobijaesfmpr@gmail.com','1','[-68.7817044499879, -11.020160046227552]','2008-07-22 00:00:00',true,'902.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('901',3,'PUERTO RICO','Escuela Superior de Formación de Maestras y Maestros Puerto Rico',NULL,'901','00000958',329,'Localidad de Puerto Rico','esfm_puertorico@minedu.gob.bo','1','[-67.5444307869941, -11.102521079797793]','2003-12-16 00:00:00',true,'901.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1'),
	 ('903',2,'UNIDAD ACADEMICA - FILADELFIA (ESFM - PUERTO RICO)','Escuela Superior de Formación de Maestras y Maestros Puerto Rico',46,'901','00001036',331,'Barrio Cacique  s/n','unidadacademicafiladelfia@gmail.com','1','[-68.75624038785381, -11.350037013608347]','2009-01-20 00:00:00',true,'903.webp','1900-01-21 15:17:14','1','2022-12-12 11:36:02.307269','1');





---- t_par_position_type

INSERT INTO t_par_position_type (name, description) VALUES ('DIRECTIVO','DIRECTIVO');
INSERT INTO t_par_position_type (name, description) VALUES ('ADMINISTRATIVO','ADMINISTRATIVO');
INSERT INTO t_par_position_type (name, description) VALUES ('SERVICIO','SERVICIO');
INSERT INTO t_par_position_type (name, description) VALUES ('DOCENTE','DOCENTE');


----POSITION
INSERT INTO position (name, description, created_at, created_by, updated_at, updated_by, t_par_position_type_id, spatiality_id)
VALUES 
    ('DIRECTORA O DIRECTOR GENERAL', 'DIRECTOR GENERAL', '2023-06-20', 1, '2023-06-20', 1, 1, NULL),
    ('DIRECTORA O DIRECTOR ACADÉMICO', 'DIRECTOR ACADÉMICO', '2023-06-20', 1, '2023-06-20', 1, 1, NULL),
    ('DIRECTORA O DIRECTOR ADMINISTRATIVO Y FINANCIERO', 'DIRECTOR ADMINISTRATIVO Y FINANCIERO', '2023-06-20', 1, '2023-06-20', 1, 1, NULL),
    ('COORDINADORA O COORDINADOR ACADEMICO – IEPC – PEC', 'COORDINADOR ACADEMICO', '2023-06-20', 1, '2023-06-20', 1, 2, NULL),
    ('ASESORA O ASESOR LEGAL', 'ASESOR LEGAL', '2023-06-20', 1, '2023-06-20', 1, 2, NULL),
    ('TÉCNICO I: RESPONSABLE DE ARCHIVO Y KÁRDEX (ESFM)', 'RESPONSABLE DE ARCHIVO Y KÁRDEX', '2023-06-20', 1, '2023-06-20', 1, 2, NULL),
    ('TÉCNICO I: RESPONSABLE DE PRESUPUESTO Y CONTABILIDAD', 'RESPONSABLE DE PRESUPUESTO Y CONTABILIDAD', '2023-06-20', 1, '2023-06-20', 1, 2, NULL),
    ('TÉCNICO I: RESPONSABLE DE BIENES Y SERVICIOS', 'RESPONSABLE DE BIENES Y SERVICIOS', '2023-06-20', 1, '2023-06-20', 1, 2, NULL),
    ('TÉCNICO I: RESPONSABLE DE SALUD PREVENTIVA', 'RESPONSABLE DE SALUD PREVENTIVA', '2023-06-20', 1, '2023-06-20', 1, 2, NULL),
    ('TÉCNICO II: TÉCNICA O TÉCNICO INFORMÁTICO DE SISTEMAS', 'TÉCNICO INFORMÁTICO DE SISTEMAS', '2023-06-20', 1, '2023-06-20', 1, 2, NULL),
    ('TÉCNICO II: TÉCNICA O TÉCNICO DE BIBLIOTECA', 'TÉCNICO DE BIBLIOTECA', '2023-06-20', 1, '2023-06-20', 1, 2, NULL),
    ('TÉCNICO II: TÉCNICA O TÉCNICO CAJERO', 'TÉCNICO CAJERO', '2023-06-20', 1, '2023-06-20', 1, 2, NULL),
    ('SECRETARIA O SECRETARIO DE LA DIRECCIÓN GENERAL', 'SECRETARIO DE LA DIRECCIÓN GENERAL', '2023-06-20', 1, '2023-06-20', 1, 2, NULL),
    ('SECRETARIA O SECRETARIO DE LA DIRECCIÓN ACADÉMICA', 'SECRETARIO DE LA DIRECCIÓN ACADÉMICA', '2023-06-20', 1, '2023-06-20', 1, 2, NULL),
    ('SECRETARIA O SECRETARIO DE LA DIRECCIÓN ADMINISTRATIVA FINANCIERA', 'SECRETARIO DE LA DIRECCIÓN ADMINISTRATIVA FINANCIERA', '2023-06-20', 1, '2023-06-20', 1, 2, NULL),
    ('SERVICIO - PORTERA O PORTERO', 'PORTERA O PORTERO', '2023-06-20', 1, '2023-06-20', 1, 3, NULL),
    ('SERVICIO - SERVICIOS MÚLTIPLES', 'SERVICIOS MÚLTIPLES', '2023-06-20', 1, '2023-06-20', 1, 3, NULL),
    ('SERVICIO - PERSONAL DE LIMPIEZA', 'PERSONAL DE LIMPIEZA', '2023-06-20', 1, '2023-06-20', 1, 3, NULL),
    ('SERVICIO - AUXILIAR', 'AUXILIAR', '2023-06-20', 1, '2023-06-20', 1, 3, NULL),
    ('SERVICIO - COCINERA O COCINERO', 'COCINERA O COCINERO', '2023-06-20', 1, '2023-06-20', 1, 3, NULL),
    ('COORDINADORA O COORDINADOR DE UNIDAD ACADÉMICA', 'COORDINADOR DE UNIDAD ACADÉMICA', '2023-06-20', 1, '2023-06-20', 1, 1, NULL),
    ('TÉCNICO I: RESPONSABLE DE ARCHIVO Y KÁRDEX (UA)', 'RESPONSABLE DE ARCHIVO Y KÁRDEX (UA)', '2023-06-20', 1, '2023-06-20', 1, 2, NULL),
    ('SECRETARIA O SECRETARIO DE LA COORDINACIÓN DE UNIDAD ACADÉMICA', 'SECRETARIO DE LA COORDINACIÓN DE UNIDAD ACADÉMICA', '2023-06-20', 1, '2023-06-20', 1, 2, NULL);
INSERT INTO position (name, description, created_at, created_by, updated_at, updated_by, t_par_position_type_id, spatiality_id)
VALUES 
    ('DOCENTE DE AGROPECUARIA', 'DOCENTE DE AGROPECUARIA', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE ARTES PLÁSTICAS Y VISUALES', 'DOCENTE DE ARTES PLÁSTICAS Y VISUALES', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE CARPINTERÍA INDUSTRIAL EN MADERA Y METAL', 'DOCENTE DE CARPINTERÍA INDUSTRIAL EN MADERA Y METAL', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE CIENCIAS NATURALES: BIOLOGÍA - GEOGRAFÍA', 'DOCENTE DE CIENCIAS NATURALES: BIOLOGÍA - GEOGRAFÍA', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE CIENCIAS NATURALES: FÍSICA - QUÍMICA', 'DOCENTE DE CIENCIAS NATURALES: FÍSICA - QUÍMICA', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE CIENCIAS SOCIALES', 'DOCENTE DE CIENCIAS SOCIALES', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE COMUNICACIÓN Y LENGUAJES: LENGUA CASTELLANA', 'DOCENTE DE COMUNICACIÓN Y LENGUAJES: LENGUA CASTELLANA', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE COMUNICACIÓN Y LENGUAJES: LENGUA EXTRANJERA (INGLÉS)', 'DOCENTE DE COMUNICACIÓN Y LENGUAJES: LENGUA EXTRANJERA (INGLÉS)', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE COSMOVISIONES, FILOSOFÍAS Y SICOLOGÍA', 'DOCENTE DE COSMOVISIONES, FILOSOFÍAS Y SICOLOGÍA', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE EDUCACIÓN ESPECIAL PARA PERSONAS CON DISCAPACIDAD', 'DOCENTE DE EDUCACIÓN ESPECIAL PARA PERSONAS CON DISCAPACIDAD', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE EDUCACIÓN FÍSICA Y DEPORTES', 'DOCENTE DE EDUCACIÓN FÍSICA Y DEPORTES', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE EDUCACIÓN INICIAL EN FAMILIA COMUNITARIA', 'DOCENTE DE EDUCACIÓN INICIAL EN FAMILIA COMUNITARIA', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE EDUCACIÓN MUSICAL', 'DOCENTE DE EDUCACIÓN MUSICAL', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE EDUCACIÓN PRIMARIA COMUNITARIA VOCACIONAL', 'DOCENTE DE EDUCACIÓN PRIMARIA COMUNITARIA VOCACIONAL', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE ELECTRICIDAD Y ELECTRÓNICA', 'DOCENTE DE ELECTRICIDAD Y ELECTRÓNICA', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE ELECTROMECANICA', 'DOCENTE DE ELECTROMECANICA', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE INDUSTRIA TEXTIL Y CONFECCIÓN', 'DOCENTE DE INDUSTRIA TEXTIL Y CONFECCIÓN', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE INVESTIGACIÓN IEPC-PEC', 'DOCENTE DE INVESTIGACIÓN IEPC-PEC', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE LENGUA ORIGINARIA - AYMARA', 'DOCENTE DE LENGUA ORIGINARIA - AYMARA', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE LENGUA ORIGINARIA - BESIRO', 'DOCENTE DE LENGUA ORIGINARIA - BESIRO', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE LENGUA ORIGINARIA - CHACOBO', 'DOCENTE DE LENGUA ORIGINARIA - CHACOBO', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE LENGUA ORIGINARIA - GUARANI', 'DOCENTE DE LENGUA ORIGINARIA - GUARANI', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE LENGUA ORIGINARIA - GWARAYU', 'DOCENTE DE LENGUA ORIGINARIA - GWARAYU', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE LENGUA ORIGINARIA - KABINEÑA', 'DOCENTE DE LENGUA ORIGINARIA - KABINEÑA', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE LENGUA ORIGINARIA - MOJEÑO IGNACIANO', 'DOCENTE DE LENGUA ORIGINARIA - MOJEÑO IGNACIANO', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE LENGUA ORIGINARIA - MOJEÑO TRINITARIO', 'DOCENTE DE LENGUA ORIGINARIA - MOJEÑO TRINITARIO', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE LENGUA ORIGINARIA - QUECHUA', 'DOCENTE DE LENGUA ORIGINARIA - QUECHUA', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE LENGUA ORIGINARIA - TACANA', 'DOCENTE DE LENGUA ORIGINARIA - TACANA', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE LENGUA ORIGINARIA - YAMINAWA', 'DOCENTE DE LENGUA ORIGINARIA - YAMINAWA', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE LENGUA ORIGINARIA - YURAKARE', 'DOCENTE DE LENGUA ORIGINARIA - YURAKARE', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE MATEMÁTICA', 'DOCENTE DE MATEMÁTICA', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE MECÁNICA AUTOMOTRIZ', 'DOCENTE DE MECÁNICA AUTOMOTRIZ', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE MECÁNICA INDUSTRIAL', 'DOCENTE DE MECÁNICA INDUSTRIAL', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE TRANSFORMACIÓN DE ALIMENTOS Y GASTRONOMIA', 'DOCENTE DE TRANSFORMACIÓN DE ALIMENTOS Y GASTRONOMIA', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE VALORES, ESPIRITUALIDAD Y RELIGIONES', 'DOCENTE DE VALORES, ESPIRITUALIDAD Y RELIGIONES', '2023-06-20', 1, '2023-06-20', 1, 4, NULL),
    ('DOCENTE DE EDUCACIÓN ESPECIAL', 'DOCENTE DE EDUCACIÓN ESPECIAL', '2023-06-20', 1, '2023-06-20', 1, 4, NULL);

----INSTITUTION_POSITION---2392
-----cargos ESFM ---1512
INSERT INTO institution_position (institution_id,position_id, created_at, created_by, updated_at, updated_by)
SELECT i.id, p.id, '2023-08-04', 1, '2023-08-04', 1
FROM institution i, position p
WHERE i.t_par_institution_type_id = 3 and p.id not in (21,22,23); ---27(ESFM)*56(cargos)=1512

-----CARGOS UA ---880

INSERT INTO institution_position (institution_id,position_id, created_at, created_by, updated_at, updated_by)
SELECT i.id, p.id, '2023-08-04', 1, '2023-08-04', 1
FROM institution i, position p
WHERE i.t_par_institution_type_id = 2 and p.id in (16,17,18,19,20,21,22,23); ---20(UA)*8(cargos ADM y DIRECT SER)=160
---- cargos UA de docente 
INSERT INTO institution_position (institution_id,position_id, created_at, created_by, updated_at, updated_by)
SELECT i.id, p.id, '2023-08-04', 1, '2023-08-04', 1
FROM institution i, position p, t_par_position_type tppt
WHERE tppt.id = p.t_par_position_type_id and i.t_par_institution_type_id = 2 and tppt.id = 4; ---36(CARGO DOCENTE)*20(UA) = 720 UA y DOCENTE



---- announcement

INSERT INTO announcement (year,name, description, date_init, date_end,state,cite,created_at,created_by,updated_at,updated_by) 
VALUES (2023,'CONVOCATORIA 2023','CONVOCATORIA 2023 realizada por la DGFM','2023-06-01','2023-09-01',true,'/022023','2023-06-20',1,'2023-06-20',1);

--------announcement_institution_position


INSERT INTO announcement_institution_position (number_available,created_at,created_by,updated_at,updated_by,institution_position_id, announcement_id)
SELECT 1,'2023-08-04',1,'2023-08-04',1,ip.id,a.id
FROM institution_position ip, announcement a, position p,t_par_position_type tppt
where p.id = ip.position_id and
tppt.id = p.t_par_position_type_id  and
tppt.id not in (3) and -- sin tipo servicio
a.id = 1 ---2157
