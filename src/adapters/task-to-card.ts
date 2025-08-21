import { Task } from '../types/task';

export type TaskCardModel = {
  id: string;
  title: string;
  member: string;               // hiện tên/ email
  avatar?: any;                 // giữ nguyên kiểu cũ của bạn (require(...) hoặc uri)
  time: string;                 // hiển thị dưới tiêu đề
  notes: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Unfinished' | 'Done';
};

// Helper: format time theo đúng text bạn đã dùng (~ 21:00 today / DD/MM/YYYY)
function toTimeLine(d?: string) {
  if (!d) return 'no deadline';
  return d; // giữ đúng text người dùng nhập "DD/MM/YYYY" để khớp UI cũ
}

// Helper: lấy tên từ email nếu chưa có member
function nameFromEmail(email?: string) {
  if (!email) return 'Unassigned';
  const [name] = email.split('@');
  return name?.charAt(0).toUpperCase() + name?.slice(1) || email;
}

export function mapTaskToCardModel(t: Task): TaskCardModel {
  return {
    id: t.id,
    title: t.title,
    member: nameFromEmail(t.assigneeEmail),
    avatar: undefined, // nếu TaskCard yêu cầu, bạn có thể gán 1 avatar mặc định ở đây
    time: toTimeLine(t.dueDate),
    notes: t.description?.length ? t.description : 'none',
    priority: t.priority,
    status: t.status,
  };
}
