import unittest
from ABD import TaskManager

class TestTaskManager(unittest.TestCase):

    def setUp(self):
        self.manager = TaskManager()

    def test_add_task(self):
        self.manager.add_task("Task 1")
        self.assertEqual(len(self.manager.tasks), 1)
        self.assertEqual(self.manager.tasks[0]["title"], "Task 1")
        self.assertFalse(self.manager.tasks[0]["completed"])

    def test_complete_task(self):
        self.manager.add_task("Task 1")
        self.manager.complete_task(1)
        self.assertTrue(self.manager.tasks[0]["completed"])

    def test_delete_task(self):
        self.manager.add_task("Task 1")
        self.manager.delete_task(1)
        self.assertEqual(len(self.manager.tasks), 0)


if __name__ == "__main__":
    unittest.main()
