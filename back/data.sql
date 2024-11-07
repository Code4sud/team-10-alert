
-- Insert mock data
-- First, create scenarios
INSERT INTO scenario (id, name, description, imageUrl, difficulty) VALUES
('scen-001', 'Forest Adventure', 'A mysterious journey through an ancient forest', 'https://example.com/forest.jpg', 3),
('scen-002', 'City Mystery', 'Uncover secrets in the bustling metropolis', 'https://example.com/city.jpg', 4),
('scen-003', 'Mountain Quest', 'Scale the peaks of challenge', 'https://example.com/mountain.jpg', 5);

-- Create scenario nodes
INSERT INTO scenario_node (id, imageUrl, description, responseParentId, scenarioId) VALUES
-- Forest Adventure nodes
('node-001', 'https://example.com/forest-entrance.jpg', 'You stand at the entrance of a mysterious forest. The path splits in three directions.', 'resp-parent-001', 'scen-001'),
('node-002', 'https://example.com/forest-clearing.jpg', 'You discover a sunlit clearing with strange markings on the ground.', 'resp-parent-002', 'scen-001'),
('node-003', 'https://example.com/forest-cave.jpg', 'A dark cave entrance looms before you, emanating cold air.', 'resp-parent-003', 'scen-001'),
('node-004', 'https://example.com/forest-bridge.jpg', 'An old wooden bridge crosses a deep ravine.', 'resp-parent-004', 'scen-001'),

-- City Mystery nodes
('node-005', 'https://example.com/city-street.jpg', 'You find yourself in a dimly lit alley with suspicious activity ahead.', 'resp-parent-005', 'scen-002'),
('node-006', 'https://example.com/city-building.jpg', 'An abandoned building with a partially open door catches your attention.', 'resp-parent-006', 'scen-002'),
('node-007', 'https://example.com/city-square.jpg', 'The city square is unusually empty, with strange symbols chalked on the ground.', 'resp-parent-007', 'scen-002'),

-- Mountain Quest nodes
('node-008', 'https://example.com/mountain-base.jpg', 'The mountain path begins here, with three possible routes.', 'resp-parent-008', 'scen-003'),
('node-009', 'https://example.com/mountain-cave.jpg', 'A shelter cave appears through the snow storm.', 'resp-parent-009', 'scen-003'),
('node-010', 'https://example.com/mountain-peak.jpg', 'The final ascent to the peak lies before you.', 'resp-parent-010', 'scen-003');

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
INSERT INTO scenario_response (id, description, effectDescription, healthPointsImpact, wisePointsImpact, scenarioNodeParentId, scenarioNodeChildId) VALUES
-- Forest Adventure responses
('resp-001', 'Take the left path through dense vegetation', 'You carefully navigate through thorny bushes', -2, 3, 'node-001', 'node-002'),
('resp-002', 'Follow the right path along the stream', 'The sound of water guides your way', 1, 1, 'node-001', 'node-003'),
('resp-003', 'Investigate the cave entrance', 'The darkness conceals unknown dangers', -3, 4, 'node-002', 'node-004'),
('resp-004', 'Search the clearing thoroughly', 'You find hidden clues in the markings', 0, 5, 'node-002', 'node-003'),

-- City Mystery responses
('resp-005', 'Approach stealthily', 'You remain undetected and gather valuable information', 1, 4, 'node-005', 'node-006'),
('resp-006', 'Confront directly', 'Your boldness catches them off guard', -2, 2, 'node-005', 'node-007'),
('resp-007', 'Enter the building', 'The creaking door reveals a hidden passage', -1, 3, 'node-006', 'node-007'),

-- Mountain Quest responses
('resp-008', 'Take the steep direct route', 'The challenging climb tests your limits', -4, 5, 'node-008', 'node-009'),
('resp-009', 'Follow the longer, safer path', 'A wise choice that preserves your strength', 2, 2, 'node-008', 'node-010'),
('resp-010', 'Rest in the cave', 'The shelter provides needed recovery', 5, 1, 'node-009', 'node-010');
