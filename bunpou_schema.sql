-- ----------------------------------------------------------
-- MDB Tools - A library for reading MS Access database files
-- Copyright (C) 2000-2011 Brian Bruns and others.
-- Files in libmdb are licensed under LGPL and the utilities under
-- the GPL, see COPYING.LIB and COPYING files respectively.
-- Check out http://mdbtools.sourceforge.net
-- ----------------------------------------------------------

SET client_encoding = 'UTF-8';

CREATE TABLE "Activity"
 (
	"ActivityID"			SERIAL, 
	"ActivityGroupID"			INTEGER NOT NULL, 
	"ActivityName"			VARCHAR (510) NOT NULL, 
	"ActivityCode"			VARCHAR (100), 
	"ActivityInstructions"			TEXT, 
	"MaxPerActivity"			INTEGER, 
	"Table"			VARCHAR (100)
);
COMMENT ON COLUMN "Activity"."Table" IS 'informational only';

-- CREATE INDEXES ...
CREATE INDEX "Activity_activitycode_idx" ON "Activity" ("ActivityCode");
CREATE UNIQUE INDEX "Activity_activityid_idx" ON "Activity" ("ActivityID");
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_pkey" PRIMARY KEY ("ActivityID");

CREATE TABLE "ActivityGroup"
 (
	"ActivityGroupID"			SERIAL, 
	"ActivityGroupCode"			VARCHAR (100) NOT NULL, 
	"ActivityGroupName"			VARCHAR (100) NOT NULL, 
	"TopicID"			INTEGER NOT NULL, 
	"GroupOrder"			INTEGER, 
	"RestrictedAccess"			BOOL NOT NULL
);

-- CREATE INDEXES ...
CREATE INDEX "ActivityGroup_ActivityGroupCode_idx" ON "ActivityGroup" ("ActivityGroupCode");
ALTER TABLE "ActivityGroup" ADD CONSTRAINT "ActivityGroup_pkey" PRIMARY KEY ("ActivityGroupID");
CREATE INDEX "ActivityGroup_TopicID - GroupName_idx" ON "ActivityGroup" ("TopicID", "ActivityGroupName");

CREATE TABLE "ActivityToParticle"
 (
	"ActivityItemID"			SERIAL, 
	"ActivityID"			INTEGER NOT NULL, 
	"ParticleID"			INTEGER NOT NULL, 
	"ActivityItemOrder"			INTEGER, 
	"ActivityItemNote"			VARCHAR (500)
);
COMMENT ON COLUMN "ActivityToParticle"."ParticleID" IS 'which question / sentence, etc; unique id from respective table';
COMMENT ON COLUMN "ActivityToParticle"."ActivityItemOrder" IS 'order in which question will appear (if no order, nothing specified)';
COMMENT ON COLUMN "ActivityToParticle"."ActivityItemNote" IS 'note specific to current question';

-- CREATE INDEXES ...
CREATE INDEX "ActivityToParticle_ActivityToItem_idx" ON "ActivityToParticle" ("ActivityID", "ParticleID");
ALTER TABLE "ActivityToParticle" ADD CONSTRAINT "ActivityToParticle_pkey" PRIMARY KEY ("ActivityItemID");

CREATE TABLE "ActivityToSentenceGroup"
 (
	"ActivityItemID"			SERIAL, 
	"ActivityID"			INTEGER NOT NULL, 
	"SentenceGroupID"			INTEGER NOT NULL, 
	"ActivityItemOrder"			INTEGER, 
	"ActivityItemNote"			VARCHAR (100)
);
COMMENT ON COLUMN "ActivityToSentenceGroup"."SentenceGroupID" IS 'which question / sentence, etc; unique id from respective table';
COMMENT ON COLUMN "ActivityToSentenceGroup"."ActivityItemOrder" IS 'order in which question will appear (if no order, nothing specified)';
COMMENT ON COLUMN "ActivityToSentenceGroup"."ActivityItemNote" IS 'note specific to current question';

-- CREATE INDEXES ...
CREATE UNIQUE INDEX "ActivityToSentenceGroup_ActivityToItem_idx" ON "ActivityToSentenceGroup" ("ActivityID", "SentenceGroupID");
ALTER TABLE "ActivityToSentenceGroup" ADD CONSTRAINT "ActivityToSentenceGroup_pkey" PRIMARY KEY ("ActivityItemID");

CREATE TABLE "ActivityToVerb"
 (
	"ActivityItemID"			SERIAL, 
	"ActivityID"			INTEGER NOT NULL, 
	"VerbID"			INTEGER NOT NULL, 
	"ActivityItemOrder"			INTEGER, 
	"ActivityItemNote"			VARCHAR (500)
);
COMMENT ON COLUMN "ActivityToVerb"."VerbID" IS 'which question / sentence, etc; unique id from respective table';
COMMENT ON COLUMN "ActivityToVerb"."ActivityItemOrder" IS 'order in which question will appear (if no order, nothing specified)';
COMMENT ON COLUMN "ActivityToVerb"."ActivityItemNote" IS 'note specific to current question';

-- CREATE INDEXES ...
CREATE UNIQUE INDEX "ActivityToVerb_ActivityToItem_idx" ON "ActivityToVerb" ("ActivityID", "VerbID");
ALTER TABLE "ActivityToVerb" ADD CONSTRAINT "ActivityToVerb_pkey" PRIMARY KEY ("ActivityItemID");

CREATE TABLE "ActivityToVerb_GiveReceiveVideoClip"
 (
	"ActivityItemID"			SERIAL, 
	"ActivityID"			INTEGER NOT NULL, 
	"VerbGRvideoclipID"			INTEGER NOT NULL, 
	"ActivityItemOrder"			INTEGER, 
	"ActivityItemNote"			VARCHAR (500)
);
COMMENT ON COLUMN "ActivityToVerb_GiveReceiveVideoClip"."VerbGRvideoclipID" IS 'which question / sentence, etc; unique id from respective table';
COMMENT ON COLUMN "ActivityToVerb_GiveReceiveVideoClip"."ActivityItemOrder" IS 'order in which question will appear (if no order, nothing specified)';
COMMENT ON COLUMN "ActivityToVerb_GiveReceiveVideoClip"."ActivityItemNote" IS 'note specific to current question';

-- CREATE INDEXES ...
CREATE INDEX "ActivityToVerb_GiveReceiveVideoClip_ActivityToItem_idx" ON "ActivityToVerb_GiveReceiveVideoClip" ("ActivityID", "VerbGRvideoclipID");
ALTER TABLE "ActivityToVerb_GiveReceiveVideoClip" ADD CONSTRAINT "ActivityToVerb_GiveReceiveVideoClip_pkey" PRIMARY KEY ("ActivityItemID");

CREATE TABLE "ActivityToVerb_TransIntransPair"
 (
	"ActivityItemID"			SERIAL, 
	"ActivityID"			INTEGER NOT NULL, 
	"VerbTransIntransPairID"			INTEGER NOT NULL, 
	"ActivityItemOrder"			INTEGER, 
	"ActivityItemNote"			VARCHAR (500)
);
COMMENT ON COLUMN "ActivityToVerb_TransIntransPair"."VerbTransIntransPairID" IS 'which question / sentence, etc; unique id from respective table';
COMMENT ON COLUMN "ActivityToVerb_TransIntransPair"."ActivityItemOrder" IS 'order in which question will appear (if no order, nothing specified)';
COMMENT ON COLUMN "ActivityToVerb_TransIntransPair"."ActivityItemNote" IS 'note specific to current question';

-- CREATE INDEXES ...
CREATE INDEX "ActivityToVerb_TransIntransPair_ActivityToItem_idx" ON "ActivityToVerb_TransIntransPair" ("ActivityID", "VerbTransIntransPairID");
ALTER TABLE "ActivityToVerb_TransIntransPair" ADD CONSTRAINT "ActivityToVerb_TransIntransPair_pkey" PRIMARY KEY ("ActivityItemID");

CREATE TABLE "Bushu"
 (
	"TermID"			SERIAL, 
	"PageNumber"			INTEGER, 
	"Term"			VARCHAR (100), 
	"ActivityID"			INTEGER NOT NULL
);

-- CREATE INDEXES ...
CREATE INDEX "Bushu_ActivityID_idx" ON "Bushu" ("TermID");
CREATE INDEX "Bushu_ActivityID1_idx" ON "Bushu" ("ActivityID");
ALTER TABLE "Bushu" ADD CONSTRAINT "Bushu_pkey" PRIMARY KEY ("TermID");
CREATE INDEX "Bushu_TermID_idx" ON "Bushu" ("PageNumber");

CREATE TABLE "BushuChoice"
 (
	"BushuID"			SERIAL, 
	"BushuChoice"			VARCHAR (100)
);

-- CREATE INDEXES ...
CREATE UNIQUE INDEX "BushuChoice_kanjiChoice_idx" ON "BushuChoice" ("BushuChoice");
CREATE UNIQUE INDEX "BushuChoice_kanjiID_idx" ON "BushuChoice" ("BushuID");
ALTER TABLE "BushuChoice" ADD CONSTRAINT "BushuChoice_pkey" PRIMARY KEY ("BushuID");

CREATE TABLE "BushuCorrect"
 (
	"TermID"			INTEGER, 
	"BushuID"			INTEGER, 
	"Kanji"			VARCHAR (2)
);

-- CREATE INDEXES ...
CREATE INDEX "BushuCorrect_kanjiChoice_idx" ON "BushuCorrect" ("BushuID");
CREATE INDEX "BushuCorrect_kanjiID_idx" ON "BushuCorrect" ("TermID");

CREATE TABLE "Kanji"
 (
	"TermID"			SERIAL, 
	"PageNumber"			INTEGER, 
	"Term"			VARCHAR (100), 
	"ActivityID"			INTEGER NOT NULL
);

-- CREATE INDEXES ...
CREATE INDEX "Kanji_ActivityID_idx" ON "Kanji" ("TermID");
CREATE INDEX "Kanji_ActivityID1_idx" ON "Kanji" ("ActivityID");
ALTER TABLE "Kanji" ADD CONSTRAINT "Kanji_pkey" PRIMARY KEY ("TermID");
CREATE INDEX "Kanji_TermID_idx" ON "Kanji" ("PageNumber");

CREATE TABLE "KanjiChoice"
 (
	"KanjiID"			SERIAL, 
	"KanjiChoice"			VARCHAR (100)
);

-- CREATE INDEXES ...
CREATE UNIQUE INDEX "KanjiChoice_kanjiChoice_idx" ON "KanjiChoice" ("KanjiChoice");
CREATE UNIQUE INDEX "KanjiChoice_kanjiID_idx" ON "KanjiChoice" ("KanjiID");
ALTER TABLE "KanjiChoice" ADD CONSTRAINT "KanjiChoice_pkey" PRIMARY KEY ("KanjiID");

CREATE TABLE "KanjiCorrect"
 (
	"TermID"			INTEGER, 
	"KanjiID"			INTEGER, 
	"Hiragana"			VARCHAR (100) NOT NULL
);

-- CREATE INDEXES ...
CREATE INDEX "KanjiCorrect_kanjiChoice_idx" ON "KanjiCorrect" ("KanjiID");
CREATE INDEX "KanjiCorrect_kanjiID_idx" ON "KanjiCorrect" ("TermID");

CREATE TABLE "Particle"
 (
	"ParticleID"			SERIAL, 
	"Particle"			VARCHAR (100) NOT NULL, 
	"Notes"			VARCHAR (510), 
	"ParticleImage"			VARCHAR (500)
);

-- CREATE INDEXES ...
CREATE INDEX "Particle_Particle_idx" ON "Particle" ("Particle");
ALTER TABLE "Particle" ADD CONSTRAINT "Particle_pkey" PRIMARY KEY ("ParticleID");

CREATE TABLE "ParticleExample"
 (
	"ParticleExampleID"			SERIAL, 
	"ParticleFunctionID"			INTEGER NOT NULL, 
	"ParticleExampleSentence"			VARCHAR (510) NOT NULL, 
	"ParticleExampleTranslation"			VARCHAR (510) NOT NULL
);

-- CREATE INDEXES ...
CREATE UNIQUE INDEX "ParticleExample_examplefunction_idx" ON "ParticleExample" ("ParticleFunctionID", "ParticleExampleSentence");
ALTER TABLE "ParticleExample" ADD CONSTRAINT "ParticleExample_pkey" PRIMARY KEY ("ParticleExampleID");

CREATE TABLE "ParticleFunction"
 (
	"ParticleFunctionID"			SERIAL, 
	"ParticleID"			INTEGER NOT NULL, 
	"ParticleFunction"			VARCHAR (200), 
	"ParticleFunctionNotes"			VARCHAR (500), 
	"ParticleFunctionOrder"			INTEGER
);

-- CREATE INDEXES ...
CREATE UNIQUE INDEX "ParticleFunction_ParticleToFunction_idx" ON "ParticleFunction" ("ParticleFunctionID", "ParticleID");
ALTER TABLE "ParticleFunction" ADD CONSTRAINT "ParticleFunction_pkey" PRIMARY KEY ("ParticleFunctionID");

CREATE TABLE "Paste Errors"
 (
	"ActivityID"			VARCHAR (510), 
	"SentenceGroupID"			INTEGER, 
	"ActivityItemOrder"			INTEGER
);

-- CREATE INDEXES ...

CREATE TABLE "Sentence"
 (
	"SentenceID"			SERIAL, 
	"SentenceTranslation"			VARCHAR (510), 
	"SentenceAudio"			VARCHAR (510)
);

-- CREATE INDEXES ...
ALTER TABLE "Sentence" ADD CONSTRAINT "Sentence_pkey" PRIMARY KEY ("SentenceID");

CREATE TABLE "SentenceFragment"
 (
	"SentenceFragmentID"			SERIAL, 
	"SentenceID"			INTEGER NOT NULL, 
	"SentenceFragmentText"			VARCHAR (510), 
	"SentenceFragmentOrder"			INTEGER
);

-- CREATE INDEXES ...
CREATE UNIQUE INDEX "SentenceFragment_particle_fillinid_idx" ON "SentenceFragment" ("SentenceFragmentID");
ALTER TABLE "SentenceFragment" ADD CONSTRAINT "SentenceFragment_pkey" PRIMARY KEY ("SentenceFragmentID");

CREATE TABLE "SentenceFragmentItem_Particle"
 (
	"FragmentItemID"			SERIAL, 
	"SentenceFragmentID"			INTEGER NOT NULL, 
	"ParticleID"			INTEGER, 
	"ItemUseNotes"			VARCHAR (510), 
	"IsCorrect"			BOOL NOT NULL
);
COMMENT ON COLUMN "SentenceFragmentItem_Particle"."IsCorrect" IS '0 - no; 1 - yes;';

-- CREATE INDEXES ...
CREATE UNIQUE INDEX "SentenceFragmentItem_Particle_FragmentChoice_idx" ON "SentenceFragmentItem_Particle" ("SentenceFragmentID", "ParticleID");
ALTER TABLE "SentenceFragmentItem_Particle" ADD CONSTRAINT "SentenceFragmentItem_Particle_pkey" PRIMARY KEY ("FragmentItemID");
CREATE INDEX "SentenceFragmentItem_Particle_SentenceFragmentItem_ParticleParticleID_idx" ON "SentenceFragmentItem_Particle" ("ParticleID");
CREATE INDEX "SentenceFragmentItem_Particle_SentenceFragmentItem_ParticleSentenceFragmentID_idx" ON "SentenceFragmentItem_Particle" ("SentenceFragmentID");

CREATE TABLE "SentenceFragmentItem_Verb"
 (
	"FragmentItemID"			SERIAL, 
	"SentenceFragmentID"			INTEGER, 
	"VerbID"			INTEGER, 
	"VerbForm"			VARCHAR (100), 
	"IsCorrect"			BOOL NOT NULL, 
	"VerbAudio"			VARCHAR (510), 
	"ItemUseNotes"			VARCHAR (400)
);
COMMENT ON COLUMN "SentenceFragmentItem_Verb"."IsCorrect" IS '0;"no";1;"yes"';

-- CREATE INDEXES ...
ALTER TABLE "SentenceFragmentItem_Verb" ADD CONSTRAINT "SentenceFragmentItem_Verb_pkey" PRIMARY KEY ("FragmentItemID");
CREATE UNIQUE INDEX "SentenceFragmentItem_Verb_SentenceFragmentID_idx" ON "SentenceFragmentItem_Verb" ("SentenceFragmentID");
CREATE INDEX "SentenceFragmentItem_Verb_VerbID_idx" ON "SentenceFragmentItem_Verb" ("VerbID");

CREATE TABLE "SentenceFragmentToText"
 (
	"SentenceFragmentToTextID"			SERIAL, 
	"SentenceFragmentID"			INTEGER, 
	"SentenceTextID"			INTEGER
);

-- CREATE INDEXES ...
ALTER TABLE "SentenceFragmentToText" ADD CONSTRAINT "SentenceFragmentToText_pkey" PRIMARY KEY ("SentenceFragmentToTextID");
CREATE UNIQUE INDEX "SentenceFragmentToText_SentenceFragmentID_idx" ON "SentenceFragmentToText" ("SentenceFragmentID");
CREATE INDEX "SentenceFragmentToText_SentenceFragmentToTextID_idx" ON "SentenceFragmentToText" ("SentenceFragmentToTextID");
CREATE UNIQUE INDEX "SentenceFragmentToText_SentenceTextID_idx" ON "SentenceFragmentToText" ("SentenceTextID");

CREATE TABLE "SentenceGroup"
 (
	"字段1"			VARCHAR (100), 
	"SentenceGroupID"			SERIAL, 
	"NumberOfPeople"			INTEGER
);
COMMENT ON COLUMN "SentenceGroup"."NumberOfPeople" IS 'number of people in dialogue';

-- CREATE INDEXES ...
CREATE INDEX "SentenceGroup_NumberOfPeople_idx" ON "SentenceGroup" ("NumberOfPeople");
CREATE INDEX "SentenceGroup_ParticleSentenceGroupID_idx" ON "SentenceGroup" ("SentenceGroupID");
ALTER TABLE "SentenceGroup" ADD CONSTRAINT "SentenceGroup_pkey" PRIMARY KEY ("SentenceGroupID");

CREATE TABLE "SentenceGroupToSentence"
 (
	"SentenceGroupToSentenceID"			SERIAL, 
	"SentenceGroupID"			INTEGER, 
	"SentenceID"			INTEGER, 
	"SentenceOrder"			INTEGER
);
COMMENT ON COLUMN "SentenceGroupToSentence"."SentenceGroupID" IS 'DB ID from SentenceGroup table';
COMMENT ON COLUMN "SentenceGroupToSentence"."SentenceID" IS 'DB ID from Sentence table';
COMMENT ON COLUMN "SentenceGroupToSentence"."SentenceOrder" IS 'Order of sentence if there was more than one sentence in the sentence group.';

-- CREATE INDEXES ...
ALTER TABLE "SentenceGroupToSentence" ADD CONSTRAINT "SentenceGroupToSentence_pkey" PRIMARY KEY ("SentenceGroupToSentenceID");
CREATE INDEX "SentenceGroupToSentence_SentenceGroupToSentenceSentenceGroupID_idx" ON "SentenceGroupToSentence" ("SentenceGroupID");
CREATE INDEX "SentenceGroupToSentence_SentenceGroupToSentenceSentenceID_idx" ON "SentenceGroupToSentence" ("SentenceID");
CREATE INDEX "SentenceGroupToSentence_SentenceOrder_idx" ON "SentenceGroupToSentence" ("SentenceID", "SentenceOrder");

CREATE TABLE "Topic"
 (
	"TopicID"			SERIAL, 
	"Topic"			VARCHAR (510)
);

-- CREATE INDEXES ...
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_pkey" PRIMARY KEY ("TopicID");
CREATE INDEX "Topic_topicid_idx" ON "Topic" ("TopicID");

CREATE TABLE "Verb"
 (
	"VerbID"			SERIAL, 
	"English"			VARCHAR (100), 
	"Meaning"			VARCHAR (100), 
	"VerbClassID"			INTEGER, 
	"TransIntrans"			INTEGER, 
	"Citation"			VARCHAR (100), 
	"Masu"			VARCHAR (100), 
	"Te"			VARCHAR (100), 
	"Honorific"			VARCHAR (100), 
	"Humble"			VARCHAR (100), 
	"Neutral"			VARCHAR (100), 
	"AudioCitation"			VARCHAR (100), 
	"AudioMasu"			VARCHAR (100), 
	"AudioTe"			VARCHAR (510), 
	"AudioHonorific"			VARCHAR (510), 
	"AudioHumble"			VARCHAR (510), 
	"AudioNeutral"			VARCHAR (510), 
	"VerbImage"			VARCHAR (510)
);
COMMENT ON COLUMN "Verb"."Meaning" IS 'english definition of verb (for trans/intrans)';
COMMENT ON COLUMN "Verb"."VerbClassID" IS 'Vowel, Consonant, or Irregular';
COMMENT ON COLUMN "Verb"."TransIntrans" IS '0 - neither; 1 - transitive; 2 - intransitive';

-- CREATE INDEXES ...
ALTER TABLE "Verb" ADD CONSTRAINT "Verb_pkey" PRIMARY KEY ("VerbID");
CREATE INDEX "Verb_verbid_idx" ON "Verb" ("VerbID");

CREATE TABLE "Verb_GiveReceive"
 (
	"VerbID"			INTEGER, 
	"VerbHonorificNote"			VARCHAR (510), 
	"VerbHumbleNote"			VARCHAR (510), 
	"VerbNeutralNote"			TEXT
);

-- CREATE INDEXES ...
ALTER TABLE "Verb_GiveReceive" ADD CONSTRAINT "Verb_GiveReceive_pkey" PRIMARY KEY ("VerbID");
CREATE UNIQUE INDEX "Verb_GiveReceive_verbid_idx" ON "Verb_GiveReceive" ("VerbID");

CREATE TABLE "Verb_GiveReceiveVideoclip"
 (
	"VerbGRvideoclipID"			SERIAL, 
	"VerbGRvideoclipSrc"			VARCHAR (510), 
	"VerbGRvideoclipTitle"			VARCHAR (510), 
	"VerbGRvideoclipScriptJap"			TEXT, 
	"VerbGRvideoclipScriptEng"			TEXT
);

-- CREATE INDEXES ...
ALTER TABLE "Verb_GiveReceiveVideoclip" ADD CONSTRAINT "Verb_GiveReceiveVideoclip_pkey" PRIMARY KEY ("VerbGRvideoclipID");
CREATE INDEX "Verb_GiveReceiveVideoclip_Verb_GiveReceiveVideoclipVerbGRvideoclip_idx" ON "Verb_GiveReceiveVideoclip" ("VerbGRvideoclipSrc");
CREATE INDEX "Verb_GiveReceiveVideoclip_verbgrvideoclipid_idx" ON "Verb_GiveReceiveVideoclip" ("VerbGRvideoclipID");

CREATE TABLE "Verb_GRVideoclipToSentenceGroup"
 (
	"VideoClipToSenGroupID"			SERIAL, 
	"VerbGRvideoclipID"			INTEGER, 
	"SentenceGroupID"			INTEGER, 
	"SentenceGroupOrder"			INTEGER
);

-- CREATE INDEXES ...
ALTER TABLE "Verb_GRVideoclipToSentenceGroup" ADD CONSTRAINT "Verb_GRVideoclipToSentenceGroup_pkey" PRIMARY KEY ("VideoClipToSenGroupID");
CREATE INDEX "Verb_GRVideoclipToSentenceGroup_SentenceGroupID_idx" ON "Verb_GRVideoclipToSentenceGroup" ("SentenceGroupID");
CREATE INDEX "Verb_GRVideoclipToSentenceGroup_VerbGRvideoclipID_idx" ON "Verb_GRVideoclipToSentenceGroup" ("VerbGRvideoclipID");

CREATE TABLE "Verb_Te"
 (
	"VerbTePracticeID"			SERIAL, 
	"VerbID"			INTEGER, 
	"WrongAnswer1"			VARCHAR (100), 
	"WrongAnswer2"			VARCHAR (100)
);

-- CREATE INDEXES ...
ALTER TABLE "Verb_Te" ADD CONSTRAINT "Verb_Te_pkey" PRIMARY KEY ("VerbTePracticeID");
CREATE INDEX "Verb_Te_verbid_idx" ON "Verb_Te" ("VerbID");

CREATE TABLE "Verb_TransIntransPair"
 (
	"VerbTransIntransPairID"			SERIAL, 
	"VerbTransitive"			INTEGER, 
	"VerbIntransitive"			INTEGER
);

-- CREATE INDEXES ...
ALTER TABLE "Verb_TransIntransPair" ADD CONSTRAINT "Verb_TransIntransPair_pkey" PRIMARY KEY ("VerbTransIntransPairID");
CREATE INDEX "Verb_TransIntransPair_VerbTransIntransPairID_idx" ON "Verb_TransIntransPair" ("VerbTransIntransPairID");

CREATE TABLE "VerbClass"
 (
	"VerbClassID"			SERIAL, 
	"VerbClassName"			VARCHAR (100), 
	"DisplayOrder"			INTEGER
);

-- CREATE INDEXES ...
ALTER TABLE "VerbClass" ADD CONSTRAINT "VerbClass_pkey" PRIMARY KEY ("VerbClassID");

CREATE TABLE "ActivityToVerb_Te"
 (
	"ActivityItemID"			SERIAL, 
	"ActivityID"			INTEGER NOT NULL, 
	"VerbTePracticeID"			INTEGER NOT NULL, 
	"ActivityItemOrder"			INTEGER, 
	"ActivityItemNote"			VARCHAR (500)
);
COMMENT ON COLUMN "ActivityToVerb_Te"."VerbTePracticeID" IS 'which question / sentence, etc; unique id from respective table';
COMMENT ON COLUMN "ActivityToVerb_Te"."ActivityItemOrder" IS 'order in which question will appear (if no order, nothing specified)';
COMMENT ON COLUMN "ActivityToVerb_Te"."ActivityItemNote" IS 'note specific to current question';

-- CREATE INDEXES ...
CREATE INDEX "ActivityToVerb_Te_ActivityToPractice_idx" ON "ActivityToVerb_Te" ("ActivityID", "VerbTePracticeID");
ALTER TABLE "ActivityToVerb_Te" ADD CONSTRAINT "ActivityToVerb_Te_pkey" PRIMARY KEY ("ActivityItemID");

CREATE TABLE "SentenceText"
 (
	"SentenceTextID"			SERIAL, 
	"SentenceFragmentID"			INTEGER, 
	"SentenceText"			TEXT
);

-- CREATE INDEXES ...
ALTER TABLE "SentenceText" ADD CONSTRAINT "SentenceText_pkey" PRIMARY KEY ("SentenceTextID");
CREATE UNIQUE INDEX "SentenceText_SentenceFragmentID_idx" ON "SentenceText" ("SentenceFragmentID");
CREATE UNIQUE INDEX "SentenceText_SentenceTextID_idx" ON "SentenceText" ("SentenceTextID");

CREATE TABLE "Verb_TeRomanji"
 (
	"VerbID"			INTEGER, 
	"TeRomanji"			VARCHAR (100)
);

-- CREATE INDEXES ...
CREATE UNIQUE INDEX "Verb_TeRomanji_VerbID_idx" ON "Verb_TeRomanji" ("VerbID");


-- CREATE Relationships ...
ALTER TABLE "ActivityToParticle" ADD CONSTRAINT "ActivityToParticle_ActivityID_fk" FOREIGN KEY ("ActivityID") REFERENCES "Activity"("ActivityID") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "ActivityToSentenceGroup" ADD CONSTRAINT "ActivityToSentenceGroup_ActivityID_fk" FOREIGN KEY ("ActivityID") REFERENCES "Activity"("ActivityID") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "ActivityToVerb" ADD CONSTRAINT "ActivityToVerb_ActivityID_fk" FOREIGN KEY ("ActivityID") REFERENCES "Activity"("ActivityID") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "ActivityToVerb_GiveReceiveVideoClip" ADD CONSTRAINT "ActivityToVerb_GiveReceiveVideoClip_ActivityID_fk" FOREIGN KEY ("ActivityID") REFERENCES "Activity"("ActivityID") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "ActivityToVerb_Te" ADD CONSTRAINT "ActivityToVerb_Te_ActivityID_fk" FOREIGN KEY ("ActivityID") REFERENCES "Activity"("ActivityID") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "ActivityToVerb_TransIntransPair" ADD CONSTRAINT "ActivityToVerb_TransIntransPair_ActivityID_fk" FOREIGN KEY ("ActivityID") REFERENCES "Activity"("ActivityID") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "MSysNavPaneGroups" ADD CONSTRAINT "MSysNavPaneGroups_GroupCategoryID_fk" FOREIGN KEY ("GroupCategoryID") REFERENCES "MSysNavPaneGroupCategories"("Id") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "MSysNavPaneGroupToObjects" ADD CONSTRAINT "MSysNavPaneGroupToObjects_GroupID_fk" FOREIGN KEY ("GroupID") REFERENCES "MSysNavPaneGroups"("Id") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "ActivityToParticle" ADD CONSTRAINT "ActivityToParticle_ParticleID_fk" FOREIGN KEY ("ParticleID") REFERENCES "Particle"("ParticleID") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "ParticleExample" ADD CONSTRAINT "ParticleExample_ParticleFunctionID_fk" FOREIGN KEY ("ParticleFunctionID") REFERENCES "ParticleFunction"("ParticleFunctionID") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "ParticleFunction" ADD CONSTRAINT "ParticleFunction_ParticleID_fk" FOREIGN KEY ("ParticleID") REFERENCES "Particle"("ParticleID") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "SentenceFragmentItem_Particle" ADD CONSTRAINT "SentenceFragmentItem_Particle_ParticleID_fk" FOREIGN KEY ("ParticleID") REFERENCES "Particle"("ParticleID") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "ActivityToSentenceGroup" ADD CONSTRAINT "ActivityToSentenceGroup_SentenceGroupID_fk" FOREIGN KEY ("SentenceGroupID") REFERENCES "SentenceGroup"("SentenceGroupID") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "SentenceFragment" ADD CONSTRAINT "SentenceFragment_SentenceID_fk" FOREIGN KEY ("SentenceID") REFERENCES "Sentence"("SentenceID") ON UPDATE CASCADE ON DELETE CASCADE;
-- Relationship from "Verb" ("VerbClassID") to "VerbClass"("VerbClassID") does not enforce integrity.
-- Relationship from "ActivityGroup" ("TopicID") to "Topic"("TopicID") does not enforce integrity.
-- Relationship from "Activity" ("ActivityGroupID") to "ActivityGroup"("ActivityGroupID") does not enforce integrity.
-- Relationship from "SentenceFragment" ("SentenceID") to "Sentence"("SentenceID") does not enforce integrity.
-- Relationship from "ActivityToSentenceGroup" ("SentenceGroupID") to "SentenceGroup"("SentenceGroupID") does not enforce integrity.
-- Relationship from "Verb_TransIntransPair" ("VerbTransitive") to "Verb"("VerbID") does not enforce integrity.
-- Relationship from "SentenceFragment" ("SentenceID") to "Sentence"("SentenceID") does not enforce integrity.
ALTER TABLE "SentenceFragmentItem_Particle" ADD CONSTRAINT "SentenceFragmentItem_Particle_SentenceFragmentID_fk" FOREIGN KEY ("SentenceFragmentID") REFERENCES "SentenceFragment"("SentenceFragmentID") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "SentenceFragmentItem_Particle" ADD CONSTRAINT "SentenceFragmentItem_Particle_SentenceFragmentID_fk" FOREIGN KEY ("SentenceFragmentID") REFERENCES "SentenceFragment"("SentenceFragmentID") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "SentenceFragmentItem_Verb" ADD CONSTRAINT "SentenceFragmentItem_Verb_SentenceFragmentID_fk" FOREIGN KEY ("SentenceFragmentID") REFERENCES "SentenceFragment"("SentenceFragmentID") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "SentenceGroupToSentence" ADD CONSTRAINT "SentenceGroupToSentence_SentenceGroupID_fk" FOREIGN KEY ("SentenceGroupID") REFERENCES "SentenceGroup"("SentenceGroupID") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "Verb_GRVideoclipToSentenceGroup" ADD CONSTRAINT "Verb_GRVideoclipToSentenceGroup_SentenceGroupID_fk" FOREIGN KEY ("SentenceGroupID") REFERENCES "SentenceGroup"("SentenceGroupID") ON UPDATE CASCADE ON DELETE CASCADE;
-- Relationship from "SentenceGroupToSentence" ("SentenceID") to "Sentence"("SentenceID") does not enforce integrity.
ALTER TABLE "SentenceGroupToSentence" ADD CONSTRAINT "SentenceGroupToSentence_SentenceID_fk" FOREIGN KEY ("SentenceID") REFERENCES "Sentence"("SentenceID") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "SentenceGroupToSentence" ADD CONSTRAINT "SentenceGroupToSentence_SentenceID_fk" FOREIGN KEY ("SentenceID") REFERENCES "Sentence"("SentenceID") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "ActivityToVerb_GiveReceiveVideoClip" ADD CONSTRAINT "ActivityToVerb_GiveReceiveVideoClip_VerbGRvideoclipID_fk" FOREIGN KEY ("VerbGRvideoclipID") REFERENCES "Verb_GiveReceiveVideoclip"("VerbGRvideoclipID") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "Verb_GRVideoclipToSentenceGroup" ADD CONSTRAINT "Verb_GRVideoclipToSentenceGroup_VerbGRvideoclipID_fk" FOREIGN KEY ("VerbGRvideoclipID") REFERENCES "Verb_GiveReceiveVideoclip"("VerbGRvideoclipID") ON UPDATE CASCADE;
ALTER TABLE "ActivityToVerb_Te" ADD CONSTRAINT "ActivityToVerb_Te_VerbTePracticeID_fk" FOREIGN KEY ("VerbTePracticeID") REFERENCES "Verb_Te"("VerbTePracticeID") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "ActivityToVerb_TransIntransPair" ADD CONSTRAINT "ActivityToVerb_TransIntransPair_VerbTransIntransPairID_fk" FOREIGN KEY ("VerbTransIntransPairID") REFERENCES "Verb_TransIntransPair"("VerbTransIntransPairID") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "ActivityToVerb" ADD CONSTRAINT "ActivityToVerb_VerbID_fk" FOREIGN KEY ("VerbID") REFERENCES "Verb"("VerbID") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "SentenceFragmentItem_Verb" ADD CONSTRAINT "SentenceFragmentItem_Verb_VerbID_fk" FOREIGN KEY ("VerbID") REFERENCES "Verb"("VerbID") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "Verb_GiveReceive" ADD CONSTRAINT "Verb_GiveReceive_VerbID_fk" FOREIGN KEY ("VerbID") REFERENCES "Verb"("VerbID") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "Verb_Te" ADD CONSTRAINT "Verb_Te_VerbID_fk" FOREIGN KEY ("VerbID") REFERENCES "Verb"("VerbID") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "Verb_TeRomanji" ADD CONSTRAINT "Verb_TeRomanji_VerbID_fk" FOREIGN KEY ("VerbID") REFERENCES "Verb"("VerbID") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "Verb_TransIntransPair" ADD CONSTRAINT "Verb_TransIntransPair_VerbTransitive_fk" FOREIGN KEY ("VerbTransitive") REFERENCES "Verb"("VerbID") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "Verb_TransIntransPair" ADD CONSTRAINT "Verb_TransIntransPair_VerbIntransitive_fk" FOREIGN KEY ("VerbIntransitive") REFERENCES "Verb"("VerbID") ON UPDATE CASCADE ON DELETE CASCADE;
