"use client"

import { Bar, BarChart, CartesianGrid, Cell, LabelList, Pie, PieChart, XAxis, YAxis } from "recharts"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export type ChartDatum = { label: string; students: number }

export type EnrollmentChartKey = "enrollmentStatus" | "studentLevel" | "ageRange" | "attendance" | "topStates"

const studentsConfig = {
  students: { label: "Students", color: "var(--chart-1)" },
} satisfies ChartConfig

const chartData: Record<EnrollmentChartKey, { title: string; type: "bar" | "doughnut"; data: ChartDatum[] }> = {
  enrollmentStatus: {
    title: "Enrollment status",
    type: "bar",
    data: [
      { label: "First-Time In College", students: 40 },
      { label: "Transfer Student", students: 36 },
      { label: "Returning Student", students: 525 },
    ],
  },
  studentLevel: {
    title: "Student level",
    type: "bar",
    data: [
      { label: "Freshman", students: 394 },
      { label: "Sophomore", students: 94 },
      { label: "Junior", students: 67 },
      { label: "Senior", students: 46 },
    ],
  },
  ageRange: {
    title: "Age range",
    type: "doughnut",
    data: [
      { label: "17 and under", students: 6 },
      { label: "18-24", students: 530 },
      { label: "25-39", students: 47 },
      { label: "40 and over", students: 17 },
    ],
  },
  attendance: {
    title: "Attendance status",
    type: "bar",
    data: [
      { label: "Full-time", students: 512 },
      { label: "Part-time", students: 89 },
    ],
  },
  topStates: {
    title: "Top states of origin",
    type: "bar",
    data: [
      { label: "AR", students: 208 },
      { label: "LA", students: 80 },
      { label: "TX", students: 70 },
      { label: "MS", students: 39 },
      { label: "TN", students: 38 },
      { label: "FL", students: 36 },
      { label: "AL", students: 26 },
      { label: "FC", students: 15 },
      { label: "IL", students: 10 },
      { label: "MO", students: 8 },
    ],
  },
}

const doughnutColors = ["var(--chart-3)", "var(--chart-1)", "var(--chart-4)", "var(--chart-5)"]

function summarize(data: ChartDatum[]) {
  return data.map((d) => `${d.label}: ${d.students}`).join(", ")
}

export function EnrollmentChart({ chartKey }: { chartKey: EnrollmentChartKey }) {
  const { title, type, data } = chartData[chartKey]
  const ariaLabel = `${title} chart. ${summarize(data)} students.`

  if (type === "doughnut") {
    const config: ChartConfig = Object.fromEntries(
      data.map((d, i) => [d.label, { label: d.label, color: doughnutColors[i % doughnutColors.length] }]),
    )
    return (
      <figure className="rounded-lg border border-border p-4">
        <figcaption className="text-center text-sm font-semibold text-foreground">{title}</figcaption>
        <ChartContainer config={config} className="mx-auto aspect-square max-h-72" role="img" aria-label={ariaLabel}>
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent nameKey="label" hideLabel />} />
            <Pie data={data} dataKey="students" nameKey="label" innerRadius="55%" strokeWidth={2}>
              {data.map((d, i) => (
                <Cell key={d.label} fill={doughnutColors[i % doughnutColors.length]} />
              ))}
            </Pie>
            <ChartLegend content={<ChartLegendContent nameKey="label" />} className="flex-wrap gap-2" />
          </PieChart>
        </ChartContainer>
      </figure>
    )
  }

  return (
    <figure className="rounded-lg border border-border p-4">
      <figcaption className="text-center text-sm font-semibold text-foreground">{title}</figcaption>
      <ChartContainer config={studentsConfig} className="mt-2 aspect-auto h-64 w-full" role="img" aria-label={ariaLabel}>
        <BarChart data={data} margin={{ top: 20, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="label"
            tickLine={false}
            axisLine={false}
            interval={0}
            tickMargin={8}
            height={data.length > 4 ? 30 : 40}
          />
          <YAxis tickLine={false} axisLine={false} width={36} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Bar dataKey="students" fill="var(--color-students)" radius={[4, 4, 0, 0]}>
            <LabelList dataKey="students" position="top" className="fill-foreground" fontSize={11} />
          </Bar>
        </BarChart>
      </ChartContainer>
    </figure>
  )
}
