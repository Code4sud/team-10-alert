-- Insert mock data
-- First, create scenarios
INSERT INTO scenario (id, name, description, imageUrl, difficulty)
VALUES ('scen-001', 'Forest Adventure', 'A mysterious journey through an ancient forest',
        'https://example.com/forest.jpg', 3),
       ('scen-002', 'City Mystery', 'Uncover secrets in the bustling metropolis', 'https://example.com/city.jpg', 4),
       ('scen-003', 'Mountain Quest', 'Scale the peaks of challenge', 'https://example.com/mountain.jpg', 5);

-- Create scenario nodes
INSERT INTO scenario_node (id, imageUrl, description, responseParentId, scenarioId)
VALUES
-- Forest Adventure nodes
('node-001', 'https://example.com/forest-entrance.jpg',
 'You stand at the entrance of a mysterious forest. The path splits in three directions.', 'resp-parent-001',
 'scen-001'),
('node-002', 'https://example.com/forest-clearing.jpg',
 'You discover a sunlit clearing with strange markings on the ground.', 'resp-parent-002', 'scen-001'),
('node-003', 'https://example.com/forest-cave.jpg', 'A dark cave entrance looms before you, emanating cold air.',
 'resp-parent-003', 'scen-001'),
('node-004', 'https://example.com/forest-bridge.jpg', 'An old wooden bridge crosses a deep ravine.', 'resp-parent-004',
 'scen-001'),

-- City Mystery nodes
('node-005', 'https://example.com/city-street.jpg',
 'You find yourself in a dimly lit alley with suspicious activity ahead.', 'resp-parent-005', 'scen-002'),
('node-006', 'https://example.com/city-building.jpg',
 'An abandoned building with a partially open door catches your attention.', 'resp-parent-006', 'scen-002'),
('node-007', 'https://example.com/city-square.jpg',
 'The city square is unusually empty, with strange symbols chalked on the ground.', 'resp-parent-007', 'scen-002'),

-- Mountain Quest nodes
('node-008', 'https://example.com/mountain-base.jpg', 'The mountain path begins here, with three possible routes.',
 'resp-parent-008', 'scen-003'),
('node-009', 'https://example.com/mountain-cave.jpg', 'A shelter cave appears through the snow storm.',
 'resp-parent-009', 'scen-003'),
('node-010', 'https://example.com/mountain-peak.jpg', 'The final ascent to the peak lies before you.',
 'resp-parent-010', 'scen-003');

-- Update scenarios with initial nodes
UPDATE scenario
SET initialScenarioNodeId = 'node-001'
WHERE id = 'scen-001';

UPDATE scenario
SET initialScenarioNodeId = 'node-005'
WHERE id = 'scen-002';

UPDATE scenario
SET initialScenarioNodeId = 'node-008'
WHERE id = 'scen-003';

-- Insert scenario responses
INSERT INTO scenario_response (id, description, scoreDescription, effectDescription, healthPointsImpact,
                               wisePointsImpact, scenarioNodeParentId, scenarioNodeChildId)
VALUES
-- Forest Adventure responses
('resp-001', 'Take the left path through dense vegetation', 'SUPER', 'You carefully navigate through thorny bushes', -2,
 3,
 'node-001', 'node-002'),
('resp-002', 'Follow the right path along the stream', 'SUPER', 'The sound of water guides your way', 1, 1, 'node-001',
 'node-003'),
('resp-003', 'Investigate the cave entrance', 'SUPER', 'The darkness conceals unknown dangers', -3, 4, 'node-002',
 'node-004'),
('resp-004', 'Search the clearing thoroughly', 'SUPER', 'You find hidden clues in the markings', 0, 5, 'node-002',
 'node-003'),

-- City Mystery responses
('resp-005', 'Approach stealthily', 'SUPER', 'You remain undetected and gather valuable information', 1, 4, 'node-005',
 'node-006'),
('resp-006', 'Confront directly', 'SUPER', 'Your boldness catches them off guard', -2, 2, 'node-005', 'node-007'),
('resp-007', 'Enter the building', 'SUPER', 'The creaking door reveals a hidden passage', -1, 3, 'node-006',
 'node-007'),

-- Mountain Quest responses
('resp-008', 'Take the steep direct route', 'SUPER', 'The challenging climb tests your limits', -4, 5, 'node-008',
 'node-009'),
('resp-009', 'Follow the longer, safer path', 'SUPER', 'A wise choice that preserves your strength', 2, 2, 'node-008',
 'node-010'),
('resp-010', 'Rest in the cave', 'SUPER', 'The shelter provides needed recovery', 5, 1, 'node-009', 'node-010');

-- Insertion de données de vigilance
INSERT INTO vigilance (id, alertType, vigilanceType, alertStartDate)
VALUES ('vigilance-001', 'Fire Alert', 'High', '2024-01-01'),
       ('vigilance-002', 'Flood Alert', 'Medium', '2024-02-01'),
       ('vigilance-003', 'Storm Alert', 'Low', '2024-03-01');

-- Insertion de tâches de vigilance
INSERT INTO vigilance_todo (id, task)
VALUES ('todo-001', 'Evacuate the area'),
       ('todo-002', 'Prepare emergency kit'),
       ('todo-003', 'Contact emergency services'),
       ('todo-004', 'Monitor weather updates'),
       ('todo-005', 'Secure all windows and doors');

-- Insertion d'utilisateurs
INSERT INTO "user" (id, email, password, firstname, lastname, phoneNumber, parentPhoneNumber, role, createdAt, updatedAt)
VALUES ('user-001', 'user1@example.com', 'hashedpassword1', 'John', 'Doe', '1234567890', NULL, 'USER', '2024-01-01', '2024-01-01'),
       ('user-002', 'user2@example.com', 'hashedpassword2', 'Jane', 'Smith', '0987654321', NULL, 'USER', '2024-01-02', '2024-01-02'),
       ('user-003', 'admin@example.com', 'hashedpassword3', 'Admin', 'User', '1122334455', NULL, 'ADMIN', '2024-01-03', '2024-01-03');

-- Lier les tâches de vigilance aux utilisateurs et aux vigilances
INSERT INTO user_vigilance_todo (id, isChecked, completionDate, userId, vigilanceId, vigilanceTodoId)
VALUES
-- Assignation des tâches de vigilance à l'utilisateur 1 pour la vigilance 1
('uvt-001', false, NULL, 'user-001', 'vigilance-001', 'todo-001'),
('uvt-002', false, NULL, 'user-001', 'vigilance-001', 'todo-002'),
('uvt-003', false, NULL, 'user-001', 'vigilance-001', 'todo-003'),

-- Assignation des tâches de vigilance à l'utilisateur 2 pour la vigilance 2
('uvt-004', false, NULL, 'user-002', 'vigilance-002', 'todo-004'),
('uvt-005', false, NULL, 'user-002', 'vigilance-002', 'todo-005'),

-- Assignation des tâches de vigilance à l'utilisateur 3 pour la vigilance 3
('uvt-006', true, '2024-01-01', 'user-003', 'vigilance-003', 'todo-001'),
('uvt-007', false, NULL, 'user-003', 'vigilance-003', 'todo-003');
