export interface APILabel {
  id?: number;
  name: string;
}

export interface Task {
  id: number;
  description: string;
  complete: boolean;
  inProgress: boolean;
  priority: number;
  labels?: APILabel[];
}

export interface Field {
  type: string;
  placeholder?: string;
  testId?: string;
  value: any;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  options?: Array<{ value: string; label: string }>;
}
