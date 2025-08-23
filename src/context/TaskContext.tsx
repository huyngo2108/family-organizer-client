import React, { createContext, useContext, useMemo, useState, ReactNode } from 'react';
import { Task, Priority } from '../types/task';

type CreateTaskInput = {
  title: string;
  description?: string;
  priority: Priority;
  dueDate?: string;
  assigneeEmail?: string;
};

type TaskContextType = {
  tasks: Task[];
  createTask: (input: CreateTaskInput) => Task;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createTask = (input: CreateTaskInput): Task => {
    const newTask: Task = {
      id: `${Date.now()}_${Math.floor(Math.random() * 100000)}`,
      title: input.title.trim(),
      description: input.description?.trim(),
      priority: input.priority,
      dueDate: input.dueDate?.trim(),
      assigneeEmail: input.assigneeEmail?.trim(),
      createdAt: new Date().toISOString(),
      status: 'Unfinished',
    };
    setTasks(prev => [newTask, ...prev]);
    return newTask;
  };

  const value = useMemo(() => ({ tasks, createTask }), [tasks]);
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export function useTasks() {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error('useTasks must be used within TaskProvider');
  return ctx;
}
