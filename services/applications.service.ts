import applications from "../fixtures/applications";
import type { Application } from "../models/applications.model";

export class ApplicationsService {
    private data = applications;

    async getApplications(filters: any) {
        try {
            const { page = 1, limit = 10} = filters;
            const skip = (page - 1) * limit;

            const paginatedApplications = this.data.slice(skip, skip + limit);
            const total = this.data.length;

            return {
                data: paginatedApplications,
                pagination: {
                    page,
                    limit,
                    total,
                    totalPages: Math.ceil(total / limit)
                }
            };
        } catch (error) {
            throw new Error(`Failed to fetch applications`);
        }
    }

    async getSingleApplication(id: string) {
        try {
            const application = this.data.find(application => application.id === parseInt(id));
            if (!application) {
                throw new Error('Application not found');
            }
            return application;
        } catch (error) {
            throw new Error(`Failed to fetch application`);
        }
    }

    async createApplication(body: any) {
        try {
            const newApplication: Application = {
                _id: (this.data.length + 1).toString(),
                ...body,
                createdAt: new Date(),
                deleted: false
            };
            this.data.push(newApplication);
            return newApplication;
        } catch (error) {
            throw new Error(`Failed to create application`);
        }
    }

    async updateApplication(id: string, body: any) {
        try {
            const index = this.data.findIndex(application => application.id === parseInt(id));
            if (index === -1) {
                throw new Error('Application not found');
            }
            
            const updatedApplication = {
                ...this.data[index],
                ...body
            };
            
            this.data[index] = updatedApplication;
            return updatedApplication;
        } catch (error) {
            throw new Error(`Failed to update application`);
        }
    }

    async deleteApplication(id: string) {
        try {
            const index = this.data.findIndex(application => application.id === parseInt(id));
            if (index === -1) {
                throw new Error('Application not found');
            }
            
            this.data = this.data.filter((_, i) => i !== index)
            
            return { message: 'Application deleted successfully' };
        } catch (error) {
            throw new Error(`Failed to delete application`);
        }
    }
}