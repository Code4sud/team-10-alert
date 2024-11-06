-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "scenario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "difficulty" INTEGER NOT NULL,
    "initialScenarioNodeId" TEXT,
    CONSTRAINT "scenario_initialScenarioNodeId_fkey" FOREIGN KEY ("initialScenarioNodeId") REFERENCES "scenarioNode" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "scenarioNode" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "imageUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "scenarioId" TEXT,
    CONSTRAINT "scenarioNode_scenarioId_fkey" FOREIGN KEY ("scenarioId") REFERENCES "scenario" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "dashboardNode" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "scenarioNodeId" TEXT NOT NULL,
    "x" REAL NOT NULL,
    "y" REAL NOT NULL,
    CONSTRAINT "dashboardNode_scenarioNodeId_fkey" FOREIGN KEY ("scenarioNodeId") REFERENCES "scenarioNode" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "edge" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "targetId" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    CONSTRAINT "edge_targetId_fkey" FOREIGN KEY ("targetId") REFERENCES "dashboardNode" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "edge_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "dashboardNode" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "response" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "effectDescription" TEXT NOT NULL,
    "healthPointsImpact" INTEGER NOT NULL,
    "wisePointsImpact" INTEGER NOT NULL,
    "scenarioNodeParentId" TEXT NOT NULL,
    "scenarioNodeChildId" TEXT NOT NULL,
    CONSTRAINT "response_scenarioNodeParentId_fkey" FOREIGN KEY ("scenarioNodeParentId") REFERENCES "scenarioNode" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "response_scenarioNodeChildId_fkey" FOREIGN KEY ("scenarioNodeChildId") REFERENCES "scenarioNode" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "scenario_initialScenarioNodeId_key" ON "scenario"("initialScenarioNodeId");

-- CreateIndex
CREATE UNIQUE INDEX "scenarioNode_scenarioId_key" ON "scenarioNode"("scenarioId");

-- CreateIndex
CREATE UNIQUE INDEX "dashboardNode_scenarioNodeId_key" ON "dashboardNode"("scenarioNodeId");
