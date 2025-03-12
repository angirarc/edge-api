import { monthlyData, weeklyData, yearlyData } from "../fixtures/statistics";

export class StatisticsService {
    async applicationStatistics(period: "week" | "month" | "year") {
        let data = weeklyData;
        switch (period) {
            case "month":
                data = monthlyData;
                break
            case "year":
                data = yearlyData;
                break
            default:
                break
        }

        return data
    }
}