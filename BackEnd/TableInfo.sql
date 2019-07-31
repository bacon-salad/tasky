table1
Users
Columns
1 id: INTEGER NOT NULL
2 TMid: INTEGER NOT NULL foreign
5 Name: VARCHAR NOT NULL
6 password: VARCHAR NOT NULL
7 email: VARCHAR NOT NULL
8 phone: VARCHAR NOT NULL DEFAULT ''
9 taskmaster: BOOLEAN NOT NULL
10 TimeStamp: DATE NOT NULL CURRENT_TIMESTAMP
11 PRIMARY KEY (id)

table2
relationships
columns
1 id INTEGER NOT NULL
2 MajorId INTEGER NOT NULL foreign
3 MinorId INTEGER NOT NULL foreign
4 TimeStamp DATE NOT NULL CURRENT_TIMESTAMP
5 PRIMARY KEY (id)


table3
tasks  
columns
1 id: INTEGER NOT NULL
2 head: NOT NULL
3 body: NOT NULL
4 taskeeId: NOT NULL foreign
5 TaskMasterId: NOT NULL foreign
6 completed: ENUM ('notYet', 'yes', 'no') NOT NULL DEFAULT 'notYet' 
7 DateMade: DATE NOT NULL CURRENT_TIMESTAMP
8 DateDone: DATE NOT NULL
9 PRIMARY KEY (id)