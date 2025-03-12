export class StatisticsService {
    async applicationStatistics(body: any) {
        // Generate mock data for application statistics
        const statuses = ['Pending', 'In Review', 'Accepted', 'Rejected'];
        const jobCategories = ['Engineering', 'Design', 'Marketing', 'Sales', 'Customer Support'];
        
        // Generate random counts for each status
        const statusCounts = statuses.map(() => Math.floor(Math.random() * 50) + 10);
        
        // Generate timeline data (last 7 days)
        const timelineLabels = Array.from({length: 7}, (_, i) => {
            const date = new Date();
            date.setDate(date.getDate() - i);
            return date.toLocaleDateString();
        }).reverse();
        
        const timelineCounts = timelineLabels.map(() => Math.floor(Math.random() * 30) + 5);
        
        // Generate category-wise application counts
        const categoryData = jobCategories.map(() => Math.floor(Math.random() * 40) + 15);
        
        return {
            statusDistribution: {
                labels: statuses,
                counts: statusCounts
            },
            timelineData: {
                labels: timelineLabels,
                counts: timelineCounts
            },
            categoryDistribution: {
                labels: jobCategories,
                counts: categoryData
            }
        };
    }
}