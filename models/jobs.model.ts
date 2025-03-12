export enum JobStatus {
    ACTIVE = 'Active',
    INACTIVE = 'Inactive',
    SUSPENDED = 'Suspended',
    DELETED = 'Deleted'
}

export interface Job {
    id: number;
    title: string;
    category: string;
    industry: string;
    description: string;
    salaryRange: string;
    company: string;
    status: JobStatus;
    postedBy: string;
    postedOn: Date;
}