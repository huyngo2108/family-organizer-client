import { Task } from '../types/task';

export type TaskRowModel = {
  id: string;
  title: string;
  member: string;
  avatar: any;
  time: string;
  notes: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Unfinished' | 'Done';
};

function nameFromEmail(email?: string) {
  if (!email) return 'Unassigned';
  const [n] = email.split('@');
  if (!n) return email;
  return n.charAt(0).toUpperCase() + n.slice(1);
}

export function mapTaskToRow(t: Task): TaskRowModel {
  return {
    id: t.id,
    title: t.title,
    member: nameFromEmail(t.assigneeEmail),
    avatar: require('../../assets/images/logo.png'),
    time: t.dueDate || 'no deadline',
    notes: t.description?.length ? t.description : 'none',
    priority: t.priority,
    status: t.status,
  };
}
