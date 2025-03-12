import jobs from '../fixtures/jobs';
import { JobStatus, type Job } from '../models/jobs.model';

export class JobsService {
    private data = jobs;

    async getJobs(filters: any) {
        try {
            const { page = 1, limit = 10} = filters;
            const skip = (page - 1) * limit;

            const filtered = this.data.filter(job => job.status !== JobStatus.DELETED);
            const paginatedJobs = filtered.slice(skip, skip + limit);
            const total = filtered.length;

            return {
                data: paginatedJobs,
                pagination: {
                    page,
                    limit,
                    total,
                    totalPages: Math.ceil(total / limit)
                }
            };
        } catch (error) {
            throw new Error(`Failed to fetch jobs`);
        }
    }

    async getSingleJob(id: string) {
        try {
            const job = this.data.find(job => job.id === parseInt(id));
            if (!job) {
                throw new Error('Job not found');
            }
            return job;
        } catch (error) {
            throw new Error(`Failed to fetch job`);
        }
    }

    async createJob(body: any) {
        try {
            const newJob: Job = {
                _id: (this.data.length + 1).toString(),
                ...body,
                createdAt: new Date(),
                deleted: false
            };
            this.data.push(newJob);
            return newJob;
        } catch (error) {
            throw new Error(`Failed to create job`);
        }
    }

    async updateJob(id: string, body: any) {
        try {
            const index = this.data.findIndex(job => job.id === parseInt(id));
            if (index === -1) {
                throw new Error('Job not found');
            }
            
            const updatedJob = {
                ...this.data[index],
                ...body
            };
            
            this.data[index] = updatedJob;
            return updatedJob;
        } catch (error) {
            throw new Error(`Failed to update job`);
        }
    }

    async deleteJob(id: string) {
        try {
            const index = this.data.findIndex(job => job.id === parseInt(id));
            if (index === -1) {
                throw new Error('Job not found');
            }
            
            this.data[index] = {
                ...this.data[index],
                status: JobStatus.DELETED
            };
            
            return { message: 'Job deleted successfully' };
        } catch (error) {
            throw new Error(`Failed to delete job`);
        }
    }
}