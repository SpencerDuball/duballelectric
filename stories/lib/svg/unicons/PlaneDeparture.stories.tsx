import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { PlaneDeparture, PlaneDeparturePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PlaneDeparture",
  component: PlaneDeparture,
} as ComponentMeta<typeof PlaneDeparture>;

const Template: ComponentStory<typeof PlaneDeparture> = (
  args: PlaneDeparturePropsI
) => (
  <x.div display="flex" gap="20px">
    <PlaneDeparture {...args} />
    <PlaneDeparture {...args} fill="red.500" />
    <PlaneDeparture {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
