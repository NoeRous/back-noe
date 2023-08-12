----- t_par_question_type
INSERT INTO t_par_question_type (name, description,is_multiple,max_options) VALUES ('OPCIÓN MULTIPLE','PREGUNTAS DE RESPUESTAS MULTIPLES',true,5);
INSERT INTO t_par_question_type (name, description,is_multiple,max_options) VALUES ('OPCIÓN UNICA','PREGUNTAS DE RESPUESTA UNICA',false,5);
INSERT INTO t_par_question_type (name, description,is_multiple,max_options) VALUES ('FALSO/VERDADERO','PREGUNTAS DE RESPUESTA FALSO o VERDADERO',false,2);
INSERT INTO t_par_question_type (name, description,is_multiple,max_options) VALUES ('SI/NO','PREGUNTAS DE RESPUESTA SI o NO',false,2);


INSERT INTO public.t_par_gender ("name",short_name) VALUES
	 ('FEMENINO','F'),
	 ('MASCULINO','M');

------departamentos

INSERT INTO t_par_department (name,shortname,state) VALUES
	 ('CHUQUISACA','CH ',true),
	 ('LA PAZ','LP ',true),
	 ('COCHABAMBA','CB ',true),
	 ('ORURO','OR ',true),
	 ('POTOSI','PT ',true),
	 ('TARIJA','TJ ',true),
	 ('SANTA CRUZ','SC ',true),
	 ('BENI','BN ',true),
	 ('PANDO','PN ',true);

------provincias

INSERT INTO t_par_province (t_par_department_id,name,state) VALUES
	 (1,'YAMPARAEZ',true),
	 (1,'NOR CINTI',true),
	 (1,'BELISARIO BOETO',true),
	 (1,'AZURDUY',true),
	 (1,'SUR CINTI',true),
	 (1,'LUIS CALVO',true),
	 (1,'TOMINA',true),
	 (1,'HERNANDO SILES',true),
	 (1,'ZUDANEZ',true),
	 (1,'OROPEZA',true);
INSERT INTO t_par_province (t_par_department_id,name,state) VALUES
	 (2,'INQUISIVI',true),
	 (2,'SUR YUNGAS',true),
	 (2,'LOS ANDES',true),
	 (2,'AROMA',true),
	 (2,'NOR YUNGAS',true),
	 (2,'ABEL ITURRALDE',true),
	 (2,'BAUTISTA SAAVEDRA',true),
	 (2,'MANCO KAPAC',true),
	 (2,'GUALBERTO VILLARROEL',true),
	 (2,'CARANAVI',true);
INSERT INTO t_par_province (t_par_department_id,name,state) VALUES
	 (2,'GENERAL JOSE MANUEL PANDO',true),
	 (2,'MURILLO',true),
	 (2,'OMASUYOS',true),
	 (2,'PACAJES',true),
	 (2,'CAMACHO',true),
	 (2,'MUNECAS',true),
	 (2,'LARECAJA',true),
	 (2,'FRANZ TAMAYO',true),
	 (2,'INGAVI',true),
	 (2,'LOAYZA',true);
INSERT INTO t_par_province (t_par_department_id,name,state) VALUES
	 (3,'CERCADO',true),
	 (3,'CAMPERO',true),
	 (3,'AYOPAYA',true),
	 (3,'ARANI',true),
	 (3,'ARQUE',true),
	 (3,'CAPINOTA',true),
	 (3,'GERMAN JORDAN',true),
	 (3,'QUILLACOLLO',true),
	 (3,'CHAPARE',true),
	 (3,'TAPACARI',true);
INSERT INTO t_par_province (t_par_department_id,name,state) VALUES
	 (3,'CARRASCO',true),
	 (3,'MIZQUE',true),
	 (3,'PUNATA',true),
	 (3,'BOLIVAR',true),
	 (3,'TIRAQUE',true),
	 (3,'ESTEBAN ARCE',true),
	 (4,'SAN PEDRO DE TOTORA',true),
	 (4,'CERCADO',true),
	 (4,'AVAROA',true),
	 (4,'CARANGAS',true);
INSERT INTO t_par_province (t_par_department_id,name,state) VALUES
	 (4,'SAJAMA',true),
	 (4,'LITORAL',true),
	 (4,'POOPO',true),
	 (4,'PANTALEON DALENCE',true),
	 (4,'LADISLAO CABRERA',true),
	 (4,'SAUCARI',true),
	 (4,'TOMAS BARRON',true),
	 (4,'SUR CARANGAS',true),
	 (4,'SEBASTIAN PAGADOR',true),
	 (4,'MEJILLONES',true);
INSERT INTO t_par_province (t_par_department_id,name,state) VALUES
	 (4,'NOR CARANGAS',true),
	 (4,'SABAYA',true),
	 (5,'NOR LIPEZ',true),
	 (5,'JOSE MARIA LINARES',true),
	 (5,'ANTONIO QUIJARRO',true),
	 (5,'GENERAL BERNARDINO BILBAO',true),
	 (5,'DANIEL CAMPOS',true),
	 (5,'MODESTO OMISTE',true),
	 (5,'ENRIQUE BALDIVIESO',true),
	 (5,'SUD CHICHAS',true);
INSERT INTO t_par_province (t_par_department_id,name,state) VALUES
	 (5,'TOMAS FRIAS',true),
	 (5,'CHAYANTA',true),
	 (5,'CHARCAS',true),
	 (5,'NOR CHICHAS',true),
	 (5,'SUR LIPEZ',true),
	 (5,'CORNELIO SAAVEDRA',true),
	 (5,'RAFAEL BUSTILLO',true),
	 (5,'ALONSO DE IBAÑEZ',true),
	 (6,'CERCADO',true),
	 (6,'ARCE',true);
INSERT INTO t_par_province (t_par_department_id,name,state) VALUES
	 (6,'BOURDETH O CONNOR',true),
	 (6,'GRAN CHACO',true),
	 (6,'AVILEZ',true),
	 (6,'MENDEZ',true),
	 (7,'GUARAYOS',true),
	 (7,'ANDRES IBANEZ',true),
	 (7,'WARNES',true),
	 (7,'VELASCO',true),
	 (7,'ICHILO',true),
	 (7,'CHIQUITOS',true);
INSERT INTO t_par_province (t_par_department_id,name,state) VALUES
	 (7,'SARA',true),
	 (7,'CORDILLERA',true),
	 (7,'VALLE GRANDE',true),
	 (7,'FLORIDA',true),
	 (7,'OBISPO SANTISTEBAN',true),
	 (7,'ANGEL SANDOVAL',true),
	 (7,'MANUEL M. CABALLERO',true),
	 (7,'GERMAN BUSCH',true),
	 (7,'ÑUFLO DE CHAVEZ',true),
	 (8,'MARBAN',true);
INSERT INTO t_par_province (t_par_department_id,name,state) VALUES
	 (8,'MAMORE',true),
	 (8,'ITENEZ',true),
	 (8,'YACUMA',true),
	 (8,'GENERAL JOSE BALLIVIAN',true),
	 (8,'VACA DIEZ',true),
	 (8,'CERCADO',true),
	 (8,'MOXOS',true),
	 (9,'NICOLAS SUAREZ',true),
	 (9,'MANURIPI',true),
	 (9,'MADRE DE DIOS',true);
INSERT INTO t_par_province (t_par_department_id,name,state) VALUES
	 (9,'ABUNA',true),
	 (9,'FEDERICO ROMAN',true);

------provincias 

-----sistema 

INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (1,'YOTALA',true),
	 (1,'POROMA',true),
	 (1,'SUCRE',true),
	 (2,'TARVITA',true),
	 (2,'AZURDUY',true),
	 (3,'PRESTO',true),
	 (3,'ZUDANEZ',true),
	 (3,'MOJOCOYA',true),
	 (3,'ICLA',true),
	 (4,'PADILLA',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (4,'TOMINA',true),
	 (4,'SOPACHUY',true),
	 (4,'VILLA ALCALA',true),
	 (4,'EL VILLAR',true),
	 (5,'MONTEAGUDO',true),
	 (5,'HUACARETA  (C. SAN PABLO DE HUACARETA)',true),
	 (6,'YAMPARAEZ',true),
	 (6,'TARABUCO',true),
	 (7,'CAMARGO',true),
	 (7,'SAN LUCAS',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (7,'INCAHUASI',true),
	 (7,'VILLA CHARCAS',true),
	 (8,'VILLA SERRANO',true),
	 (9,'CULPINA',true),
	 (9,'LAS CARRERAS',true),
	 (9,'CAMATAQUI (C. VILLA ABECIA)',true),
	 (10,'VILLA VACA GUZMAN (C. MUYUPAMPA)',true),
	 (10,'HUACAYA (C. VILLA DE HUACAYA)',true),
	 (10,'MACHARETI',true),
	 (11,'LA PAZ',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (11,'PALCA',true),
	 (11,'MECAPACA',true),
	 (11,'ACHOCALLA',true),
	 (11,'CIUDAD EL ALTO',true),
	 (12,'ANCORAIMES',true),
	 (12,'ACHACACHI',true),
	 (12,'HUATAJATA',true),
	 (12,'CHUA COCANI',true),
	 (12,'HUARINA',true),
	 (12,'SANTIAGO DE HUATA',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (13,'CHARANA',true),
	 (13,'NAZACARA DE PACAJES',true),
	 (13,'SANTIAGO DE HUATA',true),
	 (13,'CORO CORO',true),
	 (13,'CAQUIAVIRI',true),
	 (13,'CALACOTO',true),
	 (13,'COMANCHE',true),
	 (13,'WALDO BALLIVIAN (A. TUMARAPI)',true),
	 (14,'HUMANATA',true),
	 (14,'ESCOMA',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (14,'PUERTO ACOSTA',true),
	 (14,'MOCOMOCO',true),
	 (14,'PUERTO CARABUCO',true),
	 (15,'CHUMA',true),
	 (15,'AYATA',true),
	 (15,'AUCAPATA',true),
	 (16,'COMBAYA',true),
	 (16,'SORATA',true),
	 (16,'GUANAY',true),
	 (16,'TACACOMA',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (16,'QUIABAYA',true),
	 (16,'TIPUANI',true),
	 (16,'TEOPONTE',true),
	 (16,'MAPIRI',true),
	 (17,'APOLO',true),
	 (17,'PELECHUCO',true),
	 (18,'GUAQUI',true),
	 (18,'TIAWANACU',true),
	 (18,'DESAGUADERO',true),
	 (18,'TARACO',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (18,'JESÚS DE MACHACA',true),
	 (18,'SAN ANDRÉS DE MACHACA',true),
	 (18,'VIACHA',true),
	 (19,'CAIROMA',true),
	 (19,'SAPAHAQUI',true),
	 (19,'LURIBAY',true),
	 (19,'YACO',true),
	 (19,'MALLA',true),
	 (20,'INQUISIVI',true),
	 (20,'QUIME',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (20,'CAJUATA',true),
	 (20,'COLQUIRI',true),
	 (20,'ICHOCA',true),
	 (20,'LICOMA PAMPA (C. VILLA LIBERTAD LICOMA)',true),
	 (21,'IRUPANA (C. VILLA DE LANZA)',true),
	 (21,'LA ASUNTA',true),
	 (21,'PALOS BLANCOS',true),
	 (21,'YANACACHI',true),
	 (21,'CHULUMANI (C. VILLA DE LA LIBERTAD)',true),
	 (22,'LAJA',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (22,'PUERTO PEREZ',true),
	 (22,'PUCARANI',true),
	 (22,'BATALLAS',true),
	 (23,'UMALA',true),
	 (23,'SICA SICA (C. VILLA  AROMA)',true),
	 (23,'COLLANA',true),
	 (23,'COLQUENCHA',true),
	 (23,'PATACAMAYA',true),
	 (23,'CALAMARCA',true),
	 (23,'AYO AYO',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (24,'CORIPATA',true),
	 (24,'COROICO',true),
	 (25,'SAN BUENA VENTURA',true),
	 (25,'IXIAMAS',true),
	 (26,'CURVA',true),
	 (26,'GRAL.  JUAN J. PEREZ (CHARAZANI)',true),
	 (27,'COPACABANA',true),
	 (27,'TITO YUPANQUI (C. PARQUIPUJIO)',true),
	 (27,'SAN PEDRO DE TIQUINA',true),
	 (28,'CHACARILLA',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (28,'PAPEL PAMPA',true),
	 (28,'SAN PEDRO DE CURAHUARA',true),
	 (29,'CATACORA',true),
	 (29,'JESUS DE MACHACA',true),
	 (30,'CARANAVI',true),
	 (30,'ALTO BENI',true),
	 (31,'COCHABAMBA',true),
	 (32,'AIQUILE',true),
	 (32,'PASORAPA',true),
	 (32,'OMEREQUE',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (33,'AYOPAYA (C. VILLA DE INDEPENDENCIA)',true),
	 (33,'COCAPATA',true),
	 (33,'MOROCHATA',true),
	 (34,'ANZALDO (C. VILLA DE ANZALDO)',true),
	 (34,'TARATA',true),
	 (34,'SACABAMBA',true),
	 (34,'ARBIETO',true),
	 (35,'ARANI',true),
	 (35,'VACAS',true),
	 (36,'ARQUE (C. VILLA DE ARQUE)',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (36,'TACOPAYA',true),
	 (37,'SICAYA',true),
	 (37,'CAPINOTA',true),
	 (37,'SANTIVANEZ (C. VILLA SANTIVANEZ)',true),
	 (38,'CLIZA',true),
	 (38,'TOLATA',true),
	 (38,'TOKO',true),
	 (39,'SIPE SIPE',true),
	 (39,'COLCAPIRHUA',true),
	 (39,'VINTO',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (39,'TIQUIPAYA',true),
	 (39,'QUILLACOLLO',true),
	 (40,'SACABA',true),
	 (40,'COLOMI',true),
	 (40,'VILLA TUNARI',true),
	 (41,'TAPACARI',true),
	 (42,'ENTRE RÍOS (BULO BULO)',true),
	 (42,'TOTORA',true),
	 (42,'POJO',true),
	 (42,'POCONA',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (42,'CHIMORE',true),
	 (42,'PUERTO VILLARROEL',true),
	 (43,'MIZQUE',true),
	 (43,'VILA VILA',true),
	 (43,'ALALAY',true),
	 (44,'VILLA RIVERO',true),
	 (44,'TACACHI',true),
	 (44,'SAN BENITO (C. VILLA JOSE QUINTIN MENDOZA)',true),
	 (44,'CUCHUMUELA (VILLA G. VILLARROEL)',true),
	 (44,'PUNATA (C, VILLA PUNATA)',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (45,'BOLIVAR',true),
	 (46,'SHINAHOTA',true),
	 (46,'TIRAQUE',true),
	 (47,'EL CHORO',true),
	 (47,'ORURO',true),
	 (47,'CARACOLLO',true),
	 (47,'PARI-PARIA-SORACACHI',true),
	 (48,'SANTUARIO DE QUILLACAS',true),
	 (48,'CHALLAPATA',true),
	 (49,'CHOQUE COTA',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (49,'CORQUE',true),
	 (50,'CURAHUARA DE CARANGAS',true),
	 (50,'TURCO',true),
	 (51,'ESCARA',true),
	 (51,'HUACHACALLA',true),
	 (51,'ESMERALDA',true),
	 (51,'YUNGUYO DEL LITORAL',true),
	 (51,'CRUZ DE MACHACAMARCA',true),
	 (52,'ANTEQUERA',true),
	 (52,'PAZNA',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (52,'POOPO (C. VILLA DE POOPO)',true),
	 (53,'MACHACAMARCA',true),
	 (53,'HUANUNI',true),
	 (54,'PAMPA AULLAGAS',true),
	 (54,'SALINAS DE GARCI MENDOZA',true),
	 (55,'CHIPAYA',true),
	 (55,'SABAYA',true),
	 (55,'COIPASA',true),
	 (56,'TOLEDO',true),
	 (57,'EUCALIPTUS',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (58,'BELEN DE ANDAMARCA',true),
	 (58,'ANDAMARCA (STGO. DE ANDAMARCA)',true),
	 (59,'TOTORA',true),
	 (60,'SANTIAGO DE HUARI',true),
	 (61,'TODOS SANTOS',true),
	 (61,'CARANGAS',true),
	 (61,'LA RIVERA',true),
	 (62,'HUAYLLAMARCA (C. SANTIAGO DE HUAYLLAMARCA)',true),
	 (63,'URMIRI',true),
	 (63,'YOCALLA',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (63,'TINGUIPAYA (C. ING. GABRIEL VERA)',true),
	 (63,'POTOSI',true),
	 (64,'LLALLAGUA',true),
	 (64,'UNCIA',true),
	 (64,'CHAYANTA',true),
	 (64,'CHUQUIHUTA',true),
	 (65,'TACOBAMBA',true),
	 (65,'CHAQUI',true),
	 (65,'BETANZOS',true),
	 (66,'RAVELO (A. MORO MORO)',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (66,'POCOATA',true),
	 (66,'OCURI',true),
	 (66,'COLQUECHACA',true),
	 (67,'TORO TORO',true),
	 (67,'SAN PEDRO (C. SAN PEDRO DE BUENA VISTA)',true),
	 (68,'VITICHI',true),
	 (68,'COTAGAITA',true),
	 (69,'SACACA (C. VILLA DE SACACA)',true),
	 (69,'CARIPUYO',true),
	 (70,'TUPIZA',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (70,'ATOCHA',true),
	 (71,'COLCHA "K"  (VILLA MARTIN)',true),
	 (71,'SAN PEDRO DE QUEMES',true),
	 (72,'SAN ANTONIO DE ESMORUCO',true),
	 (72,'MOJINETE',true),
	 (72,'SAN PABLO DE LIPEZ',true),
	 (73,'CKOCHAS',true),
	 (73,'PUNA (C. VILLA TALAVERA)',true),
	 (73,'CAIZA "D"',true),
	 (74,'UYUNI',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (74,'PORCO',true),
	 (74,'TOMAVE',true),
	 (75,'ARAMPAMPA',true),
	 (75,'ACASIO',true),
	 (76,'LLICA',true),
	 (76,'TAHUA',true),
	 (77,'VILLAZON',true),
	 (78,'SAN AGUSTIN',true),
	 (79,'TARIJA',true),
	 (80,'PADCAYA',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (80,'BERMEJO',true),
	 (81,'YACUIBA',true),
	 (81,'CARAPARI',true),
	 (81,'VILLA MONTES',true),
	 (82,'YUNCHARA',true),
	 (82,'URIONDO (A. CONCEPCION)',true),
	 (83,'SAN LORENZO (C. VILLA SAN LORENZO)',true),
	 (83,'EL PUENTE',true),
	 (84,'ENTRE RIOS',true),
	 (85,'SANTA CRUZ  DE LA SIERRA',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (85,'COTOCA',true),
	 (85,'AYACUCHO (C. PORONGO)',true),
	 (85,'LA GUARDIA',true),
	 (85,'EL TORNO',true),
	 (86,'WARNES',true),
	 (86,'OKINAWA UNO',true),
	 (87,'SAN MIGUEL (C. SAN MIGUEL DE VELASCO)',true),
	 (87,'SAN IGNACIO (C. SAN IGNACIO DE VELASCO)',true),
	 (87,'SAN RAFAEL',true),
	 (88,'SAN JUÁN DE YAPACANÍ',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (88,'BUENA VISTA',true),
	 (88,'SAN CARLOS',true),
	 (88,'YAPACANI',true),
	 (89,'SAN JOSE (C. SAN JOSE DE CHIQUITOS)',true),
	 (89,'ROBORE',true),
	 (89,'PAILON',true),
	 (90,'PORTACHUELO',true),
	 (90,'SANTA ROSA DEL SARA',true),
	 (90,'COLPA BÉLGICA',true),
	 (91,'CUEVO',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (91,'BOYUIBE',true),
	 (91,'CAMIRI',true),
	 (91,'GUTIERREZ',true),
	 (91,'CABEZAS',true),
	 (91,'CHARAGUA',true),
	 (91,'LAGUNILLAS',true),
	 (92,'TRIGAL',true),
	 (92,'VALLE GRANDE (C. JESUS DE VALLE GRANDE)',true),
	 (92,'PUCARA',true),
	 (92,'POSTRER VALLE',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (92,'MORO MORO',true),
	 (93,'SAMAIPATA',true),
	 (93,'QUIRUSILLAS',true),
	 (93,'MAIRANA',true),
	 (93,'PAMPA GRANDE',true),
	 (94,'SAN PEDRO',true),
	 (94,'MONTERO',true),
	 (94,'GENERAL SAAVEDRA',true),
	 (94,'MINEROS',true),
	 (94,'FERNÁNDEZ ALONSO',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (95,'SAN JAVIER',true),
	 (95,'SAN RAMÓN',true),
	 (95,'SAN ANTONIO DE LOMERÍO',true),
	 (95,'CUATRO CAÑADAS',true),
	 (95,'SAN JULIAN',true),
	 (95,'CONCEPCION',true),
	 (96,'SAN MATIAS',true),
	 (97,'SAIPINA',true),
	 (97,'COMARAPA',true),
	 (98,'PUERTO SUAREZ',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (98,'CARMEN RIVERO TÓRREZ',true),
	 (98,'PUERTO QUIJARRO',true),
	 (99,'EL PUENTE',true),
	 (99,'ASCENCION DE GUARAYOS',true),
	 (99,'URUBICHA',true),
	 (100,'TRINIDAD',true),
	 (100,'SAN JAVIER',true),
	 (101,'GUAYARAMERIN',true),
	 (101,'RIBERALTA',true),
	 (102,'RURRENABAQUE',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (102,'REYES',true),
	 (102,'SAN BORJA',true),
	 (102,'SANTA ROSA',true),
	 (103,'SANTA ANA',true),
	 (103,'EXALTACION',true),
	 (104,'SAN IGNACIO',true),
	 (105,'SAN ANDRES',true),
	 (105,'LORETO',true),
	 (106,'SAN RAMON',true),
	 (106,'PUERTO SILES',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (106,'SAN JOAQUIN',true),
	 (107,'BAURES',true),
	 (107,'MAGDALENA',true),
	 (107,'HUACARAJE',true),
	 (108,'COSTA RICA (C. BELLA FLOR)',true),
	 (108,'MUKDEN (C. BOLPEBRA)',true),
	 (108,'COBIJA',true),
	 (108,'CAMPO ANA (C. PORVENIR)',true),
	 (109,' PUERTO RICO',true),
	 (109,'SAN PABLO (C. SAN PEDRO)',true);
INSERT INTO t_par_municipality (t_par_province_id,name,state) VALUES
	 (109,'FILADELFIA',true),
	 (110,'AGUA DULCE (C. PUERTO GONZALO MORENO)',true),
	 (110,'EXALTACION  (C. SAN LORENZO )',true),
	 (110,'BOLIVAR (C. SENA)',true),
	 (111,'NACEBE (C. SANTA ROSA DEL ABUNA)',true),
	 (111,'INGAVI',true),
	 (112,'EUREKA (C. SANTOS MERCADO)',true),
	 (112,'NUEVO MANOA (C.  NUEVA ESPERANZA)',true),
	 (112,'VILLA NUEVA',true);

---------------------


