'use client';

import { useEffect, useState } from 'react';

interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionData {
  totalContributions: number;
  weeks: ContributionWeek[];
}

interface GitHubContributionsProps {
  username: string;
}

const GitHubContributions = ({ username }: GitHubContributionsProps) => {
  const [contributions, setContributions] = useState<ContributionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query {
                user(login: "${username}") {
                  contributionsCollection(from: "${selectedYear}-01-01T00:00:00Z", to: "${selectedYear}-12-31T23:59:59Z") {
                    contributionCalendar {
                      totalContributions
                      weeks {
                        contributionDays {
                          contributionCount
                          date
                        }
                      }
                    }
                  }
                }
              }
            `
          }),
        });

        const data = await response.json();
        setContributions(data.data.user.contributionsCollection.contributionCalendar);
      } catch (error) {
        console.error('Error fetching GitHub contributions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username, selectedYear]);

  if (loading) {
    return <div className="animate-pulse bg-neutral-800 h-48 rounded-lg"></div>;
  }

  if (!contributions) {
    return <div>Failed to load GitHub contributions</div>;
  }

  const getContributionColor = (count: number) => {
    if (count === 0) return 'bg-neutral-800';
    if (count <= 3) return 'bg-green-900';
    if (count <= 6) return 'bg-green-700';
    if (count <= 9) return 'bg-green-500';
    return 'bg-green-300';
  };

  const years = Array.from(
    { length: new Date().getFullYear() - 2020 + 1 },
    (_, i) => new Date().getFullYear() - i
  );

  return (
    <div className="p-4 bg-[#1a1a1a] rounded-xl border border-neutral-800 h-[190px] flex flex-col">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-mono text-neutral-300">GitHub Contributions</h3>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="bg-neutral-800 text-neutral-300 rounded px-1 py-0.5 text-xs font-mono border border-neutral-700"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="flex mt-2 flex-1 justify-center items-center overflow-hidden">
        <div className="flex w-full h-full px-2">
          {contributions.weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex-1 flex flex-col h-full justify-between" style={{ gap: '2px' }}>
              {week.contributionDays.map((day, dayIndex) => (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className={`w-[12px] h-[12px] rounded ${getContributionColor(day.contributionCount)}`}
                  title={`${day.contributionCount} contributions on ${new Date(day.date).toLocaleDateString()}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="text-sm font-mono text-neutral-400 mt-1">
        {contributions.totalContributions} contributions in {selectedYear}
      </p>
    </div>
  );
};

export default GitHubContributions;
