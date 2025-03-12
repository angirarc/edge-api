export enum JobStatus {
    ACTIVE = 'Active',
    INACTIVE = 'Inactive',
    SUSPENDED = 'Suspended'
}

export interface Job {
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