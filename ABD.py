"""
ABD.py
Simple Task Manager Application
Author: Fathi
"""

class TaskManager:
    def __init__(self):
        self.tasks = []

    def add_task(self, title):
        task = {
            "title": title,
            "completed": False
        }
        self.tasks.append(task)
        print(f"Task '{title}' added successfully.")

    def list_tasks(self):
        if not self.tasks:
            print("No tasks available.")
            return
        
        for index, task in enumerate(self.tasks, start=1):
            status = "✔ Done" if task["completed"] else "✘ Not Done"
            print(f"{index}. {task['title']} - {status}")

    def complete_task(self, task_number):
        if 0 < task_number <= len(self.tasks):
            self.tasks[task_number - 1]["completed"] = True
            print("Task marked as completed.")
        else:
            print("Invalid task number.")

    def delete_task(self, task_number):
        if 0 < task_number <= len(self.tasks):
            deleted = self.tasks.pop(task_number - 1)
            print(f"Task '{deleted['title']}' deleted.")
        else:
            print("Invalid task number.")


def main():
    manager = TaskManager()

    while True:
        print("\n==== Task Manager ====")
        print("1. Add Task")
        print("2. List Tasks")
        print("3. Complete Task")
        print("4. Delete Task")
        print("5. Exit")

        choice = input("Choose an option: ")

        if choice == "1":
            title = input("Enter task title: ")
            manager.add_task(title)

        elif choice == "2":
            manager.list_tasks()

        elif choice == "3":
            num = int(input("Enter task number to complete: "))
            manager.complete_task(num)

        elif choice == "4":
            num = int(input("Enter task number to delete: "))
            manager.delete_task(num)

        elif choice == "5":
            print("Exiting program...")
            break

        else:
            print("Invalid option.")


if __name__ == "__main__":
    main()

    
    
    