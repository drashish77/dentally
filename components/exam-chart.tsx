'use client'

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from './ui/chart'

// Sample data for the chart
const data = [
  {
    date: 'Jan',
    score: 75,
    rank: 25
  },
  {
    date: 'Feb',
    score: 80,
    rank: 20
  },
  {
    date: 'Mar',
    score: 78,
    rank: 22
  },
  {
    date: 'Apr',
    score: 85,
    rank: 15
  },
  {
    date: 'May',
    score: 82,
    rank: 18
  },
  {
    date: 'Jun',
    score: 88,
    rank: 12
  },
  {
    date: 'Jul',
    score: 92,
    rank: 8
  },
  {
    date: 'Aug',
    score: 90,
    rank: 10
  },
  {
    date: 'Sep',
    score: 94,
    rank: 5
  },
  {
    date: 'Oct',
    score: 91,
    rank: 7
  },
  {
    date: 'Nov',
    score: 95,
    rank: 3
  },
  {
    date: 'Dec',
    score: 93,
    rank: 4
  }
]

export function ExamChart() {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 0
        }}
      >
        <XAxis
          dataKey='date'
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className='rounded-lg border bg-background p-2 shadow-sm'>
                  <div className='grid grid-cols-2 gap-2'>
                    <div className='flex flex-col'>
                      <span className='text-[0.70rem] uppercase text-muted-foreground'>
                        Score
                      </span>
                      <span className='font-bold text-muted-foreground'>
                        {payload[0].value}%
                      </span>
                    </div>
                    <div className='flex flex-col'>
                      <span className='text-[0.70rem] uppercase text-muted-foreground'>
                        Rank
                      </span>
                      <span className='font-bold text-muted-foreground'>
                        #{payload[1].value}
                      </span>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Line
          type='monotone'
          strokeWidth={2}
          dataKey='score'
          activeDot={{
            r: 6,
            style: { fill: 'var(--theme-primary)', opacity: 0.8 }
          }}
          style={{
            stroke: 'var(--theme-primary)'
          }}
        />
        <Line
          type='monotone'
          dataKey='rank'
          strokeWidth={2}
          activeDot={{
            r: 6,
            style: { fill: 'var(--theme-secondary)', opacity: 0.8 }
          }}
          style={{
            stroke: 'var(--theme-secondary)'
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
