import type { Meta, StoryObj } from "@storybook/react";
import { StatCard } from "./StatCard";

const meta = {
  title: "Atoms/StatCard",
  component: StatCard,
  args: { label: "Revenue", value: "$124,560", delta: "+12.4%" }
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};