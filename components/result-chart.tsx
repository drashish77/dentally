'use client'

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from './ui/chart'

// Sample data for the chart
const data = [
  {
    subject: 'Physics',
    score: 94
  },
  {
    subject: 'Chemistry',
    score: 82
  },
  {
    subject: 'Biology',
    score: 85
  },
  {
    subject: 'Math',
    score: 88
  },
  {
    subject: 'English',
    score: 92
  },
  {
    subject: 'Computer',
    score: 78
  }
]

export function ResultChart() {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 0
        }}
      >
        <XAxis
          dataKey='subject'
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
                  <div className='grid grid-cols-1 gap-2'>
                    <div className='flex flex-col'>
                      <span className='text-[0.70rem] uppercase text-muted-foreground'>
                        {payload[0].payload.subject}
                      </span>
                      <span className='font-bold text-muted-foreground'>
                        {payload[0].value}%
                      </span>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Bar
          dataKey='score'
          radius={[4, 4, 0, 0]}
          style={{
            fill: 'var(--theme-primary)',
            opacity: 0.8
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
