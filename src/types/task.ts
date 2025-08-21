export type Priority = 'Low' | 'Medium' | 'High';
export type TaskStatus = 'Unfinished' | 'Done';

export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: Priority;
  dueDate?: string;            // "DD/MM/YYYY"
  assigneeEmail?: string;      // giao 1 email
  createdAt: string;           // ISO
  status: TaskStatus;
}
