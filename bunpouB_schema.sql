-- ----------------------------------------------------------
-- MDB Tools - A library for reading MS Access database files
-- Copyright (C) 2000-2011 Brian Bruns and others.
-- Files in libmdb are licensed under LGPL and the utilities under
-- the GPL, see COPYING.LIB and COPYING files respectively.
-- Check out http://mdbtools.sourceforge.net
-- ----------------------------------------------------------

SET client_encoding = 'UTF-8';

CREATE TABLE "FAQ"
 (
	"FAQID"			SERIAL, 
	"FAQTitle"			VARCHAR (510), 
	"FAQText"			TEXT, 
	"FAQLink"			INTEGER
);

-- CREATE INDEXES ...
CREATE INDEX "FAQ_FAQID_idx" ON "FAQ" ("FAQID");
ALTER TABLE "FAQ" ADD CONSTRAINT "FAQ_pkey" PRIMARY KEY ("FAQID");

CREATE TABLE "FAQ_Keyword"
 (
	"FAQID"			INTEGER, 
	"KeywordText"			VARCHAR (510)
);

-- CREATE INDEXES ...
CREATE INDEX "FAQ_Keyword_FAQID_idx" ON "FAQ_Keyword" ("FAQID");
CREATE INDEX "FAQ_Keyword_KeywordText_idx" ON "FAQ_Keyword" ("KeywordText");

CREATE TABLE "JSL_Eavesdropping_Ex1"
 (
	"ActivityID"			INTEGER NOT NULL, 
	"DialogueID"			SERIAL, 
	"DialogueAudio"			VARCHAR (510), 
	"LessonNo"			INTEGER
);
COMMENT ON TABLE "JSL_Eavesdropping_Ex1" IS '2003';

-- CREATE INDEXES ...
CREATE INDEX "JSL_Eavesdropping_Ex1_ActivityID_idx" ON "JSL_Eavesdropping_Ex1" ("ActivityID");
ALTER TABLE "JSL_Eavesdropping_Ex1" ADD CONSTRAINT "JSL_Eavesdropping_Ex1_pkey" PRIMARY KEY ("DialogueID");
CREATE INDEX "JSL_Eavesdropping_Ex1_SoundURL_idx" ON "JSL_Eavesdropping_Ex1" ("DialogueAudio");

CREATE TABLE "JSL_Eavesdropping_Ex1_Q"
 (
	"DialogueID"			INTEGER, 
	"QuestionID"			SERIAL, 
	"Question"			VARCHAR (510), 
	"Answer"			VARCHAR (510)
);
COMMENT ON TABLE "JSL_Eavesdropping_Ex1_Q" IS '2003';

-- CREATE INDEXES ...
CREATE INDEX "JSL_Eavesdropping_Ex1_Q_DialogueID_idx" ON "JSL_Eavesdropping_Ex1_Q" ("DialogueID");
ALTER TABLE "JSL_Eavesdropping_Ex1_Q" ADD CONSTRAINT "JSL_Eavesdropping_Ex1_Q_pkey" PRIMARY KEY ("QuestionID");
CREATE INDEX "JSL_Eavesdropping_Ex1_Q_QuestionID_idx" ON "JSL_Eavesdropping_Ex1_Q" ("QuestionID");

CREATE TABLE "JSL_Vocab_Ex1"
 (
	"ActivityID"			INTEGER NOT NULL, 
	"RowID"			SERIAL, 
	"EnglishMeaning"			VARCHAR (510), 
	"CorrectAnswer"			VARCHAR (100), 
	"WrongAnswer1"			VARCHAR (100), 
	"WrongAnswer2"			VARCHAR (100), 
	"CorrectSound"			VARCHAR (510)
);
COMMENT ON TABLE "JSL_Vocab_Ex1" IS '2003';

-- CREATE INDEXES ...
CREATE INDEX "JSL_Vocab_Ex1_ActivityID_idx" ON "JSL_Vocab_Ex1" ("ActivityID");
CREATE UNIQUE INDEX "JSL_Vocab_Ex1_RowID_idx" ON "JSL_Vocab_Ex1" ("RowID");

CREATE TABLE "Verb_Conjugation_CP"
 (
	"ActivityID"			INTEGER, 
	"RowID"			SERIAL, 
	"Citation"			VARCHAR (100), 
	"CausitiveForm"			VARCHAR (100), 
	"PassiveForm"			VARCHAR (100), 
	"CausitivePassiveForm"			VARCHAR (100), 
	"CausitiveAudio"			VARCHAR (510), 
	"PassiveAudio"			VARCHAR (510), 
	"CausitivePassiveAudio"			VARCHAR (510), 
	"LessonNo"			INTEGER, 
	"F-O-IRR"			VARCHAR (6)
);
COMMENT ON TABLE "Verb_Conjugation_CP" IS '2003';

-- CREATE INDEXES ...
CREATE INDEX "Verb_Conjugation_CP_ActivityID_idx" ON "Verb_Conjugation_CP" ("ActivityID");
CREATE INDEX "Verb_Conjugation_CP_RowID_idx" ON "Verb_Conjugation_CP" ("RowID");

CREATE TABLE "Verb_Conjugation_PV_2003-12"
 (
	"ActivityID"			INTEGER, 
	"RowID"			SERIAL, 
	"Citation"			VARCHAR (100), 
	"PotentialForm"			VARCHAR (100), 
	"VolitionalForm"			VARCHAR (100), 
	"PotentialAudio"			VARCHAR (510), 
	"VolitionalAudio"			VARCHAR (510), 
	"LessonNo"			INTEGER, 
	"F-O-IRR"			VARCHAR (6)
);
COMMENT ON TABLE "Verb_Conjugation_PV_2003-12" IS '2003';

-- CREATE INDEXES ...
CREATE INDEX "Verb_Conjugation_PV_2003-12_ActivityID_idx" ON "Verb_Conjugation_PV_2003-12" ("ActivityID");
CREATE INDEX "Verb_Conjugation_PV_2003-12_RowID_idx" ON "Verb_Conjugation_PV_2003-12" ("RowID");

CREATE TABLE "Verb_CP_09-21-04"
 (
	"ActivityID"			INTEGER, 
	"RowID"			SERIAL, 
	"Citation"			VARCHAR (100), 
	"CausitiveForm"			VARCHAR (100), 
	"PassiveForm"			VARCHAR (100), 
	"CausitivePassiveForm"			VARCHAR (100), 
	"CausitiveAudio"			VARCHAR (510), 
	"PassiveAudio"			VARCHAR (510), 
	"CausitivePassiveAudio"			VARCHAR (510), 
	"LessonNo"			INTEGER, 
	"F-O-IRR"			VARCHAR (6)
);
COMMENT ON TABLE "Verb_CP_09-21-04" IS '2003';

-- CREATE INDEXES ...
CREATE INDEX "Verb_CP_09-21-04_ActivityID_idx" ON "Verb_CP_09-21-04" ("ActivityID");
CREATE INDEX "Verb_CP_09-21-04_RowID_idx" ON "Verb_CP_09-21-04" ("RowID");

CREATE TABLE "Verb_PV_09-21-04"
 (
	"ActivityID"			INTEGER, 
	"RowID"			SERIAL, 
	"Citation"			VARCHAR (100), 
	"PotentialForm"			VARCHAR (100), 
	"VolitionalForm"			VARCHAR (100), 
	"PotentialAudio"			VARCHAR (510), 
	"VolitionalAudio"			VARCHAR (510), 
	"LessonNo"			INTEGER, 
	"F-O-IRR"			VARCHAR (6)
);
COMMENT ON TABLE "Verb_PV_09-21-04" IS '2003';

-- CREATE INDEXES ...
CREATE INDEX "Verb_PV_09-21-04_ActivityID_idx" ON "Verb_PV_09-21-04" ("ActivityID");
CREATE INDEX "Verb_PV_09-21-04_RowID_idx" ON "Verb_PV_09-21-04" ("RowID");

CREATE TABLE "Verb_Conjugation_PV"
 (
	"ActivityID"			INTEGER, 
	"RowID"			SERIAL, 
	"Citation"			VARCHAR (100), 
	"PotentialForm"			VARCHAR (100), 
	"VolitionalForm"			VARCHAR (100), 
	"PotentialAudio"			VARCHAR (510), 
	"VolitionalAudio"			VARCHAR (510), 
	"LessonNo"			INTEGER, 
	"F-O-IRR"			VARCHAR (6)
);
COMMENT ON TABLE "Verb_Conjugation_PV" IS '2003';

-- CREATE INDEXES ...
CREATE INDEX "Verb_Conjugation_PV_ActivityID_idx" ON "Verb_Conjugation_PV" ("ActivityID");
CREATE INDEX "Verb_Conjugation_PV_RowID_idx" ON "Verb_Conjugation_PV" ("RowID");


-- CREATE Relationships ...
-- Relationship from "FAQ_Keyword" ("FAQID") to "FAQ"("FAQID") does not enforce integrity.
-- Relationship from "JSL_Eavesdropping_Ex1_Q" ("DialogueID") to "JSL_Eavesdropping_Ex1"("ActivityID") does not enforce integrity.
ALTER TABLE "MSysNavPaneGroups" ADD CONSTRAINT "MSysNavPaneGroups_GroupCategoryID_fk" FOREIGN KEY ("GroupCategoryID") REFERENCES "MSysNavPaneGroupCategories"("Id") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "MSysNavPaneGroupToObjects" ADD CONSTRAINT "MSysNavPaneGroupToObjects_GroupID_fk" FOREIGN KEY ("GroupID") REFERENCES "MSysNavPaneGroups"("Id") ON UPDATE CASCADE ON DELETE CASCADE;
