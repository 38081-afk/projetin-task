/*
definiçoes de tipos e interface TypeScript
Centralizando todas as tipagens
*/

// interface principal da tarefa 

export interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    createdAt?: string;
    updatedAt?: string;
}


//Dados do Formulario de criação de tarefa 
export interface TaskFormData {
    title: string;
    description: string;
}

//Props do componente de formulario
export interface TaskFormProps {
    form: TaskFormData;
    onSubmit: () => void | Promise<void>;
    osChange: (field: string, value: string) => void;
    submitting?: boolean;
    editingTaskId?: number | void;
    onCancelEdit?: () => void;
}

// Props do componente da lista de tarefas
export interface TaskListProps {
    tasks: Task[];
    loading: boolean;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
}

export interface ListHeaderProps {
    taskCount: number;
    completedCount: number;
}

export interface ListEmptyProps {
    title?: string;
    description?: string;
}

export interface ErrorMessangeProps{
    error: string;
}

export interface UseTaskReturn {
    tasks: Task[];
    loading: boolean;
    error: string | null;
    submitting: boolean;
    createTask: (taskData: TaskFormData) => Promise<boolean>;
    updateTask: (id: number) => Promise<void>;
    toggleTask: (id: number) => Promise<void>;
    deleteTask: (id: number) => Promise<void>;
    fetchTask:  () => Promise<void>;
}

export interface Messages {
    LOADING: string;
    EMPTY_TITLE: string;
    EMPTY_DESCRIPTION: string;
    ERROR_LOAD: string;
    ERROR_CREATE: string;
    ERROR_UPDATE: string;
    ERROR_DELETE: string;
    ERROR_EMPTY_TITLE: string;
    ERROR_CONNECTION: string;
}