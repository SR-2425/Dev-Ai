
export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  githubUsername: string;
  rank: string;
  badgeLevel: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
}

export interface MetricCardData {
  label: string;
  value: string | number;
  trend: number;
  icon: string;
}

export interface ChartDataPoint {
  date: string;
  commits: number;
  prs: number;
  reviews: number;
}

export interface RankingItem {
  username: string;
  score: number;
  avatar: string;
  trend: 'up' | 'down' | 'neutral';
}

export interface PulseInsight {
  category: string;
  insight: string;
  sentiment: 'positive' | 'neutral' | 'improvement';
}
