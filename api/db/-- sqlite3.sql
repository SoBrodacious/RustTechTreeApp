-- sqlite3
-- Get child nodes connected to 1
SELECT * FROM item n LEFT JOIN path e ON n.id = e.child;

-- get all nodes connected to 1 (parent and child)
--SELECT * FROM item WHERE id IN (SELECT parent FROM path WHERE child = 2 UNION SELECT child FROM path WHERE parent = 2);

--get all parent nodes and lowest children and describe the path
--WITH RECURSIVE transitive_closure(parent, child, distance, path_string) AS ( SELECT parent, child, 1 AS distance, parent || '.' || child || '.' AS path_string FROM path UNION ALL SELECT tc.parent, e.child, tc.distance + 1, tc.path_string || e.child || '.' AS path_string FROM path AS e JOIN transitive_closure AS tc ON e.parent = tc.child WHERE tc.path_string NOT LIKE '%' || e.child || '.%') SELECT * FROM transitive_closure ORDER BY parent, child, distance;